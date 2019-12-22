import React, {Component} from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
    Row,
    Card,
    CardBody,
    FormGroup,
    Label,
    Button,
    CardTitle
} from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";
import {Colxx} from "../../../../components/common/CustomBootstrap";
import {
    FormikReactSelect,
} from "../../../../containers/form-validations/FormikFields";
// import * as Const from "../../../Const";
import ImgComponent from "../Sub/ImgComponent";
import {WithWizard} from "react-albus/lib";
import WizardBottonNavigations from "../Sub/WizardBottonNavigations";
import PersianClassCalender from "../../../OldOrders/SelectTime/Headers/sub/PersianClassCalender";
import NotificationManager from "../../../../components/common/react-notifications/NotificationManager";
import {sendImg, UpdateChichiManPersonalInfo} from "../../../functions/ServerConnection";
import Loader from "../../../HomePages/Sub/Loader/Loader";


const SignupSchema = Yup.object().shape({

    //
    // PhoneNumber: Yup.number()
    //     .required("شماره تلفن اجباری است!"),
    // SSN: Yup.number()
    //     .required("شماره کد ملی  اجباری است!").min(1000000000,'شماره کد ملی باید ده کاراکتر باشد'),
    // CN: Yup.number()
    //     .required("شماره شناسنامه اجباری است!"),
    // CNPlace: Yup.string()
    //     .required("محل صدور شناسنامه اجباری است!"),
    // MartialStatus: Yup.string()
    //     .required("وضعیت تاهل خود را انتخاب کنید "),
    // Name: Yup.string()
    //     .required("نام اجباری است!"),
    // LastName: Yup.string()
    //     .required("نام خانوادگی اجباری است!"),
    // Address: Yup.string()
    //     .required("آدرس اجباری است!"),



});




const SexOption = [
    { value: "مرد", label: "مرد" },
    { value: "زن", label: "زن" },
    { value: "دیگران", label: "دیگران" },
 ];
const MartialStatusOption = [
    { value: "مجرد", label: "مجرد" },
    { value: "متاهل", label: "متاهل" },
  ];

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,ChanceTypeOption:[],
            Img:{'SSN':'',"CN":'','Personal':''},Date:'',ax:{"SSN":"", "CN": "", "Personal": ""},axError:{"SSN":"", "CN": "", "Personal": ""},
            showLoader:false
        }
    }

    GetImag(Type,value){

        let {ax}=this.state;
        ax[Type]=value;
        this.setState({
            ax
        },()=>{
            // console.log(ax)
            // console.log(ax['SSN'])
        })
        // console.log('Type');
        // console.log(Type);
        // console.log('value');
        // console.log(value);

    }
    GetData(Data){
        // console.log(Data)
        if (Data!==null){
            let Date=`${Data.year}/${Data.month}/${Data.day}`;
            console.log(Date);
            this.setState({
                Date
            });

        }
        // console.log(date)
    }

    handleSubmit = async (values, { setSubmitting }) => {
        const payload = {
            ...values,
            Sex: values.Sex.value,
            MartialStatus: values.MartialStatus.value,
            // ChanceType: values.ChanceType.value,
            // Name: values.Name.value,

        };
        console.log(payload);
        let {Date, ax, axError} = this.state;
        console.log(Date);
        let axValid = true;
        if (ax['SSN'] === '') {
            axValid = false;
            axError['SSN'] = "عکس کد ملی اجباری است "
        }else {
             axError['SSN'] = ""
        }
        if (ax['CN'] === '') {
            axValid = false;
            axError['CN'] = "عکس شناسنامه اجباری است "
        }else {
             axError['CN'] = ""
        }

        if (ax['Personal'] === '') {
            axValid = false;
            axError['Personal'] = "عکس کاربری اجباری است  "
        }else {
             axError['Personal'] = ""
        }
        this.setState({
            axError
        }, () => {

        })

        if (axValid) {
            this.setState({
                showLoader:true
            });
            let ImgeFiles = [ax['SSN'], ax['CN'], ax['Personal']];
            let ImgeId = []

            for (let i = 0; i < ImgeFiles.length; i++) {

                let idax = await sendImg(ImgeFiles[i], 'Public');
                console.log(idax)
                ImgeId.push(idax)
            }
            console.log(ImgeId);
            // ImgeId = ["5df62418386b8a3235aefde7",
            //     "5df6241a386b8a3235aefde8",
            //     "5df6241c696e5a631f0dc9c8"];


            // let Data = {
            //     "PhoneNumber": "09112561701",
            //     "FirstName": "ehsan",
            //     "LastName": "samimi",
            //     "SSN": "2092204971",
            //     "Serial": "8566",
            //     "ProfilePic": ImgeId[2],
            //     "Birthday": "12-9-98",
            //     "Address": "sari m iman",
            //     "MartialStatus": "single",
            //     "Sex": "man",
            //     "PlaceOfIssue": "sari",
            //     "HomePhone": "011336529092",
            //     "SSN_IMAGE": ImgeId[0],
            //     "SERIAL_IMAGE": ImgeId[1]
            // };
            let Data={
                 "PhoneNumber":this.props.PhoneNumber,
                 "FirstName": payload.Name,
                 "LastName": payload.LastName,
                 "SSN": payload.SSN,
                 "Serial": payload.CN,
                 "ProfilePic": ImgeId[2],
                 "Birthday": Date,
                 "Address": payload.Address,
                 "MartialStatus": payload.MartialStatus,
                 "Sex": payload.Sex,
                 "PlaceOfIssue": payload.CNPlace,
                 "HomePhone": payload.PhoneNumber,
                 "SSN_IMAGE": ImgeId[0],
                 "SERIAL_IMAGE": ImgeId[1]
            };
            console.log(Data);

            let Register = await UpdateChichiManPersonalInfo(JSON.stringify(Data));
            console.log(Register);
            this.setState({
                showLoader: false
            });
            let {state, Description} = Register;
            if (state) {
                NotificationManager.success(
                    "congratulation",
                    "اطلاعات شما با موفقیت ثبت شد",
                    3000,
                    null,
                    null,
                    "success"
                );
                let send=document.getElementById("sendItems");
                send.click();
            } else {
                NotificationManager.error(
                    "error",
                    Description,
                    3000,
                    null,
                    null,
                    "error"
                );
            }



        }

        // {SSN: File, CN: File, Personal: File}
        // let send=document.getElementById("sendItems");
        // send.click()
        // console.log(values);
        // let headers = {
        //     'Id': `${Const.ID}`,
        //     'Token': `${Const.Token}`
        // };
        // let form = new FormData();
        // form.append('Tag', payload.TagKind);
        // form.append('ChanceType', payload.ChanceType);
        // form.append('ItemType', payload.ItemType);
        // form.append('ImageUrl', payload.ImageUrl);
        // form.append('Key', payload.KeyItem);
        // form.append('Name', payload.Name);
        // axios.post(`${Const.URL}admin/gameitem/add` ,form, {headers:headers}).then(responsive=>
        // {
        //     const {Description}=responsive.data;
        //     if (Description === "D"){
        //         NotificationManager.success(
        //             "Success message",
        //             "Title here",
        //             3000,
        //             null,
        //             null,
        //             "success"
        //         );
        //     }
        //     setTimeout(function () {
        //         window.location.reload()
        //     }, 3000);
        //     setTimeout(function(){ window.location.reload(); }, 3000);
        //     console.log(Description)
        // }).catch(error=>{console.log(error)});
    };

    render() {
        // console.log('this.props.PhoneNumber');
        // console.log(this.props.PhoneNumber);

        let{axError}=this.state;
        return (
            this.state.showLoader?
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='col-6'>
                        <Loader/>
                    </div>
                </div>
                :

            <div dir='rtl'>
                <Row className="mb-4">
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <div className='d-flex justify-content-start'>
                                        <IntlMessages id="اطلاعات اولیه" />
                                    </div>

                                </CardTitle>

                                <Formik
                                    initialValues={{
                                        Name:'',
                                        LastName:'',
                                        PhoneNumber: "",
                                        Address:'',
                                        SSN:'',
                                        CN:'',
                                        CNPlace:'',
                                        Sex:{value: "مرد",label: "مرد"},
                                        MartialStatus:{value: "مجرد",label: "مجرد"},
                                        // TagKind: {value: "موتور",label: "موتور"},
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={this.handleSubmit}
                                >
                                    {({
                                          handleSubmit,
                                          setFieldValue,
                                          setFieldTouched,
                                          handleChange,
                                          handleBlur,
                                          values,
                                          errors,
                                          touched,
                                          isSubmitting
                                      }) => (
                                        <Form className="av-tooltip tooltip-label-bottom">
                                            <div className="w-100 d-flex ">
                                                <div className="col-sm-6 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="نام" />
                                                        </Label>
                                                        <Field className="form-control" name="Name"   onBlur={setFieldTouched}
                                                               placeholder="نام چی چی من رو وارد کنید !" />
                                                        {errors.Name && touched.Name ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Name}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="نام خانوادگی" />
                                                        </Label>
                                                        <Field className="form-control" name="LastName"  onBlur={setFieldTouched}
                                                               placeholder="نام خانوادگی چی چی من رو وارد کنید !" />
                                                        {errors.LastName && touched.LastName ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.LastName}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                            </div>
                                            <div className="w-100 row m-0 ">



                                                <div className="col-sm-8 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="آدرس" />
                                                        </Label>
                                                        <Field className="form-control" name="Address"   onBlur={setFieldTouched}
                                                               placeholder="آدرس را وارد کنید !" />
                                                        {errors.Address && touched.Address ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Address}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>

                                                <div className="col-sm-4 rowInput">
                                                    <FormGroup className=" has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="تاریخ تولد" />
                                                        </Label>
                                                        <div >
                                                            <PersianClassCalender GetData={this.GetData.bind(this)}/>
                                                        </div>
                                                    </FormGroup>
                                                </div>

                                            </div>
                                            <div className="w-100 row flex-wrap m-0 ">
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="شماره تماس منزل" />
                                                        </Label>
                                                        <Field className="form-control" name="PhoneNumber" type='number'   onBlur={setFieldTouched}
                                                               placeholder="011-1111111" />
                                                        {errors.PhoneNumber && touched.PhoneNumber ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.PhoneNumber}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="شماره کد ملی" />
                                                        </Label>
                                                        <Field className="form-control" name="SSN" type='number'  onBlur={setFieldTouched}
                                                               placeholder=" شماره ده رقمی  کارت ملی را وارد کنید!" />
                                                        {errors.SSN && touched.SSN ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.SSN}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="شماره شناسنامه" />
                                                        </Label>
                                                        <Field className="form-control" name="CN" type='number' onBlur={setFieldTouched}
                                                               placeholder="شماره شناسنامه را وارد کنید !" />
                                                        {errors.CN && touched.CN ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.CN}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>

                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="صادره از " />
                                                        </Label>
                                                        <Field className="form-control" name="CNPlace" type='text' onBlur={setFieldTouched}
                                                               placeholder="محل صدور شناسنامه را وارد کنید " />
                                                        {errors.CNPlace && touched.CNPlace ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.CNPlace}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>


                                                <div className="col-sm-4 ">

                                                    <FormGroup className="form-group has-float-label">
                                                        <Label>
                                                            <IntlMessages id="جنسیت" />
                                                        </Label>
                                                        <FormikReactSelect
                                                            name="Sex"
                                                            id="Sex"
                                                            value={values.Sex}
                                                            options={SexOption}
                                                            onChange={setFieldValue}
                                                            onBlur={setFieldTouched}
                                                        />
                                                        {errors.Sex && touched.Sex ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Sex}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>



                                                    {/*<FormGroup className="form-group has-float-label position-relative">*/}
                                                        {/*<Label>*/}
                                                            {/*<IntlMessages id="جنسیت " />*/}
                                                        {/*</Label>*/}
                                                        {/*<Field className="form-control" name="Sex" type='text' onBlur={setFieldTouched}*/}
                                                               {/*placeholder="جنسیت رو انتخاب کنید " />*/}
                                                        {/*{errors.Sex && touched.Sex ? (*/}
                                                            {/*<div className="invalid-feedback d-block">*/}
                                                                {/*{errors.Sex}*/}
                                                            {/*</div>*/}
                                                        {/*) : null}*/}
                                                    {/*</FormGroup>*/}
                                                </div>

                                                <div className="col-sm-4 ">

                                                    <FormGroup className="form-group has-float-label">
                                                        <Label>
                                                            <IntlMessages id="وضعیت تاهل" />
                                                        </Label>
                                                        <FormikReactSelect
                                                            name="MartialStatus"
                                                            id="MartialStatus"
                                                            value={values.MartialStatus}
                                                            options={MartialStatusOption}
                                                            onChange={setFieldValue}
                                                            onBlur={setFieldTouched}
                                                        />
                                                        {errors.MartialStatus && touched.MartialStatus ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.MartialStatus}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>


                                                    {/*<FormGroup className="form-group has-float-label position-relative">*/}
                                                        {/*<Label>*/}
                                                            {/*<IntlMessages id="وضعیت تاهل" />*/}
                                                        {/*</Label>*/}
                                                        {/*<Field className="form-control" name="MartialStatus" type='text' onBlur={setFieldTouched}*/}
                                                               {/*placeholder="انتخاب وضعیت تاهل اجباری است " />*/}
                                                        {/*{errors.MartialStatus && touched.MartialStatus ? (*/}
                                                            {/*<div className="invalid-feedback d-block">*/}
                                                                {/*{errors.MartialStatus}*/}
                                                            {/*</div>*/}
                                                        {/*) : null}*/}
                                                    {/*</FormGroup>*/}
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex mt-2 ">
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group  position-relative">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label  className='d-flex w-100 ml-2 mr-2'>
                                                                 <span className='ml-auto  '>عکس کارت ملی </span>
                                                            </Label>
                                                        </div>

                                                        <ImgComponent Type='SSN' GetData={this.GetImag.bind(this)}/>
                                                        {
                                                            axError["SSN"].length>1?<span className=" invalid-feedback d-block">{axError["SSN"]} </span>:""
                                                        }
                                                    </FormGroup>


                                                </div>
                                                <div className="col-sm-4">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label className='d-flex w-100 ml-2 mr-2'>

                                                                 <span className='ml-auto  '>عکس شناسنامه</span>
                                                             </Label>
                                                        </div>
                                                    <ImgComponent  Type='CN' GetData={this.GetImag.bind(this)}/>
                                                        {
                                                            axError["CN"].length>1?<span className=" invalid-feedback d-block">{axError["CN"]} </span>:""
                                                        }
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group  position-relative">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label  className='d-flex w-100 ml-2 mr-2'>
                                                                <span className='ml-auto  '>عکس پرسنلی</span>

                                                             </Label>
                                                        </div>

                                                    <ImgComponent Type='Personal' GetData={this.GetImag.bind(this)}/>

                                                        {
                                                            axError["Personal"].length>1?<span className=" invalid-feedback d-block">{axError["Personal"]} </span>:""
                                                        }
                                                    </FormGroup>
                                                </div>

                                            </div>
                                            <WizardBottonNavigations {...this.props}/>
                                        </Form>
                                    )}
                                </Formik>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

            </div>
        );
    }
}

export default Step3;

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
import {sendImg, UpdateChichiManContactInfo} from "../../../functions/ServerConnection";
import NotificationManager from "../../../../components/common/react-notifications/NotificationManager";
import Loader from "../../../HomePages/Sub/Loader/Loader";
const SignupSchema = Yup.object().shape({

    // Kind: Yup.object()
    //     .shape({
    //         label: Yup.string().required(),
    //         value: Yup.string().required()
    //     })
    //     .nullable()
    //     .required("نوع وسیله نقلیه اجباری است!"),
    //
    // DLN: Yup.number()
    //     .required("شماره گواهینامه اجباری است!"),
    // VCN: Yup.number()
    //     .required("شماره کارت اجباری است!"),
    // Plaque: Yup.number()
    //     .required("شماره پلاک اجباری است!"),

});



const options = [
    { value: "فعال", label: "فعال" },
    { value: "غیر فعال", label: "غیر فعال" },
    { value: "نا مشخص", label: "نامشخص" },
    // { value: "Gun", label: "Gun" }
];


class Step5 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,
            Img:{'contract':'',"safte":'',"soePishine":''},  ax:{'contract':'',"safte":'',"soePishine":''},axError:{'contract':'',"safte":'',"soePishine":''},
            showLoader:false,Date:[]
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

    handleSubmit = async (values, { setSubmitting }) => {
        const payload = {
            ...values,
            Kind: values.Kind.value,
            // ChanceType: values.ChanceType.value,
            // Name: values.Name.value,

        };
        console.log(payload);

        let {Date, ax, axError} = this.state;
         let axValid = true;

        if (ax['contract'] === '') {
            axValid = false;
            axError['contract'] = "عکس  قرارداد اجباری است  "
        }else {
            axError['contract'] = ""
        }
        if (ax['safte'] === '') {
            axValid = false;
            axError['safte'] = "عکس سفته اجباری است "
        }else {
            axError['safte'] = ""
        }
        if (ax['soePishine'] === '') {
            axValid = false;
            axError['soePishine'] = "عکس سوپیشینه اجباری است "
        }else {
            axError['soePishine'] = ""
        }

        this.setState({
            axError
        }, () => {
            console.log(this.state.axError)
        })

        if (axValid) {
            this.setState({
                showLoader:true
            });
             let ImgeFiles = [ax['contract'], ax['safte'] , ax['soePishine'] ];
            let ImgeId = [];

            for (let i = 0; i < ImgeFiles.length; i++) {
                let idax = await sendImg(ImgeFiles[i], 'Public');
                console.log(idax);
                ImgeId.push(idax);
            }
            console.log(ImgeId);
            let Data={
                "PhoneNumber": this.props.PhoneNumber,
                "Image": ImgeId[0],
                "Status": payload.Kind,
                "BasePayment": payload.darsad,
                "EndOfContract": Date['end'],
                "BeginOfContract": Date['begin'],
                "Percentage": payload.sabet,
                "FormNumber": payload.form,
                "AttachmentNumber": payload.attachNumber,
                "SoePishineImage": ImgeId[2],
                "Safteh": ImgeId[1]
             };
            console.log(Data);
            console.log(axError);

            let Register = await UpdateChichiManContactInfo(JSON.stringify(Data));
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

    };
    GetData(Data,type){
        console.log(type);
        console.log(Data);
        if (type!==null){
            let date=`${type.year}/${type.month}/${type.day}`;
            console.log(date);
            let {Date}=this.state;
            Date[Data]=date;
            this.setState({
                Date
            });
        }
        // console.log(date)
    }


    render() {
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
                                        <IntlMessages id="مستندات قرارداد" />
                                    </div>
                                </CardTitle>

                                <Formik
                                    initialValues={{
                                        form: '',
                                        attachNumber:'',
                                        sabet: "",
                                        darsad:'',
                                        Kind: {value: "فعال", label: "فعال"},
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
                                                <div className="col-sm-3 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <span>شماره نامه/فرم</span>
                                                        </Label>
                                                        <Field className="form-control" name="form" type='number' onBlur={setFieldTouched}
                                                               placeholder="شماره نامه/فرم را وارد کنید!" />
                                                        {errors.form && touched.form ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.form}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-3 rowInput">
                                                    <FormGroup className=" has-float-label position-relative">
                                                        <Label>
                                                            <span>تا تاریخ</span>
                                                         </Label>
                                                        <div >
                                                            <PersianClassCalender GetData={this.GetData.bind(this,'end')}/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-3 rowInput">
                                                    <FormGroup className=" has-float-label position-relative">
                                                        <Label>
                                                            <span>از تاریخ</span>
                                                         </Label>
                                                        <div >
                                                            <PersianClassCalender GetData={this.GetData.bind(this,'begin')}/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-3 ">
                                                    <FormGroup className="form-group has-float-label">
                                                        <Label>
                                                            <IntlMessages id="وضعیت" />
                                                        </Label>
                                                        <FormikReactSelect
                                                            name="Kind"
                                                            id="Kind"
                                                            value={values.Kind}
                                                            options={options}
                                                            onChange={setFieldValue}
                                                            onBlur={setFieldTouched}
                                                        />
                                                        {errors.Kind && touched.Kind ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Kind}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>


                                            </div>
                                            <div className="w-100 d-flex ">
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <span>شماره پیوست</span>

                                                         </Label>
                                                        <Field className="form-control" name="attachNumber" type='number' onBlur={setFieldTouched}
                                                               placeholder="شماره پیوست را وارد کنید !" />
                                                        {errors.attachNumber && touched.attachNumber ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.attachNumber}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <span>حقوق ثابت</span>
                                                         </Label>
                                                        <Field className="form-control" name="darsad" type='number' onBlur={setFieldTouched}
                                                               placeholder="قرارداد درصدی را وارد کنید !" />
                                                        {errors.darsad && touched.darsad ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.darsad}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>

                                                </div>
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <span>قرارداد درصدی</span>
                                                         </Label>
                                                        <Field className="form-control" name="sabet" type='number' onBlur={setFieldTouched}
                                                               placeholder="درصد قرار داد را وارد کنید" />
                                                        {errors.sabet && touched.sabet ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.sabet}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>

                                                </div>
                                            </div>

                                            <div className="w-100 d-flex ">
                                                <div className="col-sm-4 ">

                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <span>عکس قرارداد</span>
                                                             </Label>
                                                        </div>
                                                        <ImgComponent Type='contract' GetData={this.GetImag.bind(this)}/>
                                                         {
                                                            axError["contract"].length>1?<span className=" invalid-feedback d-block">{axError["contract"]} </span>:""
                                                        }
                                                    </FormGroup>

                                                </div>
                                                <div className="col-sm-4">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <span>عکس سفته</span>
                                                             </Label>
                                                        </div>

                                                        <ImgComponent  Type='safte' GetData={this.GetImag.bind(this)}/>
                                                        {
                                                            axError["safte"].length>1?<span className=" invalid-feedback d-block">{axError["safte"]} </span>:""
                                                        }
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <span>عکس سوپیشینه</span>
                                                             </Label>
                                                        </div>
                                                        <ImgComponent  Type='soePishine' GetData={this.GetImag.bind(this)}/>
                                                        {
                                                            axError["soePishine"].length>1?<span className=" invalid-feedback d-block">{axError["soePishine"]} </span>:""
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

export default Step5;

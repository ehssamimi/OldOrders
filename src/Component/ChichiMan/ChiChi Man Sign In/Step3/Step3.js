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
const SignupSchema = Yup.object().shape({


    // PhoneNumber: Yup.number()
    //     .required("شماره تلفن اجباری است!"),
    // SSN: Yup.number()
    //     .required("شماره کد ملی  اجباری است!").min(1000000000,'شماره کد ملی باید ده کاراکتر باشد'),
    // CN: Yup.number()
    //     .required("شماره شناسنامه اجباری است!"),
    // Name: Yup.string()
    //     .required("نام اجباری است!"),
    // LastName: Yup.string()
    //     .required("نام خانوادگی اجباری است!"),
    // Address: Yup.string()
    //     .required("آدرس اجباری است!"),

});





class Step3 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,ChanceTypeOption:[],
            Img:{'SSN':'',"CN":'','Personal':''}
        }
    }

    GetImag(Type,value){
        console.log('Type');
        console.log(Type);
        console.log('value');
        console.log(value);

    }

    handleSubmit = (values, { setSubmitting }) => {
        const payload = {
            ...values,
            // TagKind: values.TagKind.value,
            // ChanceType: values.ChanceType.value,
            // Name: values.Name.value,

        };
        console.log(payload);
        let send=document.getElementById("sendItems");
        send.click()
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
        return (
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
                                            <div className="w-100 d-flex ">
                                                <div className="col-sm-12 ">
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
                                            </div>
                                            <div className="w-100 d-flex ">
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

                                            </div>
                                            <div className="w-100 d-flex mt-2 ">
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group  position-relative">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس شناسنامه" />
                                                            </Label>
                                                        </div>

                                                        <ImgComponent Type='SSN' GetData={this.GetImag.bind(this)}/>

                                                    </FormGroup>


                                                </div>
                                                <div className="col-sm-4">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس کارت ملی" />
                                                            </Label>
                                                        </div>

                                                    <ImgComponent  Type='CN' GetData={this.GetImag.bind(this)}/>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group  position-relative">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس پرسنلی" />
                                                            </Label>
                                                        </div>

                                                    <ImgComponent Type='Personal' GetData={this.GetImag.bind(this)}/>
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

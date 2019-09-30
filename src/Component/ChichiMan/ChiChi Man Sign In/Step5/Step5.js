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
    { value: "موتور", label: "موتور" },
    { value: "ماشین", label: "ماشین" },
    { value: "دوچرخه", label: "دوچرخه" },
    // { value: "Gun", label: "Gun" }
];


class Step5 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,
            Img:{'contract':'',"safte":'',"soePishine":''}
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
            // Kind: values.Kind.value,
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
    GetData(Data){
        // console.log(Data)
        if (Data!==null){
            let date=`${Data.year}/${Data.month}/${Data.day}`;
            console.log(date);
            this.setState({
                Date: date
            });

        }
        // console.log(date)
    }


    render() {
        return (
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
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="شماره نامه/فرم" />
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
                                                <div className="col-sm-4 rowInput">
                                                    <FormGroup className=" has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="تا تاریخ" />
                                                        </Label>
                                                        <div >
                                                            <PersianClassCalender GetData={this.GetData.bind(this)}/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4 rowInput">
                                                    <FormGroup className=" has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="از تاریخ " />
                                                        </Label>
                                                        <div >
                                                            <PersianClassCalender GetData={this.GetData.bind(this)}/>
                                                        </div>
                                                    </FormGroup>
                                                </div>

                                            </div>
                                            <div className="w-100 d-flex ">
                                                <div className="col-sm-4 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="شماره پیوست" />
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
                                                            <IntlMessages id="حقوق ثابت" />
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
                                                            <IntlMessages id="قرارداد درصدی" />
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
                                                                <IntlMessages id="عکس قرارداد" />
                                                            </Label>
                                                        </div>
                                                        <ImgComponent Type='contract' GetData={this.GetImag.bind(this)}/>
                                                    </FormGroup>

                                                </div>
                                                <div className="col-sm-4">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس سفته" />
                                                            </Label>
                                                        </div>

                                                        <ImgComponent  Type='safte' GetData={this.GetImag.bind(this)}/>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-4">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس سوپیشینه" />
                                                            </Label>
                                                        </div>
                                                        <ImgComponent  Type='soePishine' GetData={this.GetImag.bind(this)}/>
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

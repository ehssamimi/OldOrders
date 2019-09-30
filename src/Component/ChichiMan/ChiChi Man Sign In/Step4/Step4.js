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


class Step4 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,ChanceTypeOption:[],
            Img:{'VCImg':'',"DLImg":''}
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
          Kind: values.Kind.value,
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
                                        <IntlMessages id="اطلاعات نقلیه" />
                                    </div>
                                </CardTitle>

                                <Formik
                                    initialValues={{
                                        Kind: {value: "موتور",label: "موتور"},
                                        DLN:'',
                                        VCN: "",
                                        Plaque:'',
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
                                                            <IntlMessages id="شماره گواهینامه" />
                                                        </Label>
                                                        <Field className="form-control" name="DLN" type='number'   onBlur={setFieldTouched}
                                                               placeholder="کد ده رقمی شماره گواهینامه" />
                                                        {errors.DLN && touched.DLN ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.DLN}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <FormGroup className="form-group has-float-label">
                                                        <Label>
                                                            <IntlMessages id="نوع وسیله نقلیه" />
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
                                                <div className="col-sm-6 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="کارت ماشین" />
                                                        </Label>
                                                        <Field className="form-control" name="VCN" type='number'   onBlur={setFieldTouched}
                                                               placeholder="شماره کارت وسیله نقلیه را وارد کنید !" />
                                                        {errors.VCN && touched.VCN ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.VCN}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="پلاک" />
                                                        </Label>
                                                        <Field className="form-control" name="Plaque" type='number'  onBlur={setFieldTouched}
                                                               placeholder="پلاک وسیله نقلیه را وارد کنید !" />
                                                        {errors.Plaque && touched.Plaque ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.Plaque}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                            </div>

                                            <div className="w-100 d-flex ">
                                                <div className="col-sm-6 ">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس کارت ماشین" />
                                                            </Label>
                                                        </div>

                                                    <ImgComponent Type='VCImg' GetData={this.GetImag.bind(this)}/>
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-6">
                                                    <FormGroup className="form-group  position-relative ">
                                                        <div className='d-flex justify-content-start'>
                                                            <Label>
                                                                <IntlMessages id="عکس گواهینامه" />
                                                            </Label>
                                                        </div>
                                                    <ImgComponent  Type='DLImg' GetData={this.GetImag.bind(this)}/>
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

export default Step4;

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
import {WithWizard} from "react-albus/lib";
import WizardBottonNavigations from "../Sub/WizardBottonNavigations";
// import * as Const from "../../../Const";
const SignupSchema = Yup.object().shape({

    // CodeNumber: Yup.number()
    //     .required("کد هراز هویت اجباری است!").min(1000,'باید 4 کاراکتر داشته باشد'),

});

const options = [
    { value: "موتور", label: "موتور" },
    { value: "ماشین", label: "ماشین" },
    { value: "دوچرخه", label: "دوچرخه" },
    // { value: "Gun", label: "Gun" }
];




class Step2 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,ChanceTypeOption:[]
        }
    }
    // componentDidMount(){
    //     let headers = {
    //         'Id': `${Const.ID}`,
    //         'Token': `${Const.Token}`
    //     };
    //
    //     axios.get(`${Const.URL}admin/gameitem/chancetype/get` , {headers:headers}).then(responsive=>
    //     {
    //         const {Description}=responsive.data;
    //
    //         let DES=JSON.parse(Description);
    //
    //         let keys=Object.keys(DES);let i;let ChanceTypeOption=[];
    //
    //         for(i in keys){
    //             let row={ value:keys[i], label: keys[i] };
    //             ChanceTypeOption.push(row);
    //         }
    //         this.setState({
    //             ChanceTypeOption
    //         });
    //         console.log(ChanceTypeOption)
    //
    //     }).catch(error=>{console.log(error)});
    //
    //     TweenMax.staggerFrom( '.rowInput', 1, {autoAlpha:0, y: 100} ,0.1);﻿﻿﻿
    // }


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
                                        <IntlMessages id="اهراز هویت" />
                                    </div>

                                </CardTitle>

                                <Formik
                                    initialValues={{
                                        CodeNumber: "",
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
                                            <div className="w-100 d-flex  justify-content-center">

                                                <div className="col-12  " >

                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="کد اهراز هویت" />
                                                        </Label>
                                                        <Field className="form-control" name="CodeNumber" type='number'  onBlur={setFieldTouched}
                                                               placeholder="کد خود رو وارد کنید !" />
                                                        {errors.CodeNumber && touched.CodeNumber ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.CodeNumber}
                                                            </div>
                                                        ) : null}
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

export default Step2;
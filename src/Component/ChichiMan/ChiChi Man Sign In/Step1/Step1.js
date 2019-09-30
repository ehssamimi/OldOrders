import React, {Component} from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { WithWizard } from 'react-albus';
// import axios from "axios";
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
import WizardBottonNavigations from "../Sub/WizardBottonNavigations";
// import * as Const from "../../../Const";
const SignupSchema = Yup.object().shape({

    // TagKind: Yup.object()
    //     .shape({
    //         label: Yup.string().required(),
    //         value: Yup.string().required()
    //     })
    //     .nullable()
    //     .required("نوع وسیله نقلیه اجباری است!"),
    //
    // PhoneNumber: Yup.number()
    //     .required("شماره تلفن اجباری است!").min(1000000000,'شماره تلفن باید یازده کاراکتر باشد')

});

const options = [
    { value: "موتور", label: "موتور" },
    { value: "ماشین", label: "ماشین" },
    { value: "دوچرخه", label: "دوچرخه" },
];




class Step1 extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            loaderActive:true,ChanceTypeOption:[]
        }
    }



    handleSubmit = (values, { setSubmitting }) => {
        const payload = {
            ...values,
            TagKind: values.TagKind.value,
            // ChanceType: values.ChanceType.value,
            // Name: values.Name.value,

        };
        console.log(payload);
       let send=document.getElementById("sendItems");
       send.click()
           // window.getElementId('')
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
                                        <IntlMessages id="ثبت شماره موبایل " />
                                    </div>

                                </CardTitle>

                                <Formik
                                    initialValues={{
                                        PhoneNumber: "",
                                        TagKind: {value: "موتور",label: "موتور"},
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
                                                    <FormGroup className="form-group has-float-label">
                                                        <Label>
                                                            <IntlMessages id="نوع وسیله نقلیه" />
                                                        </Label>
                                                        <FormikReactSelect
                                                            name="TagKind"
                                                            id="TagKind"
                                                            value={values.TagKind}
                                                            options={options}
                                                            onChange={setFieldValue}
                                                            onBlur={setFieldTouched}
                                                        />
                                                        {errors.TagKind && touched.TagKind ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.TagKind}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-6 ">

                                                    <FormGroup className="form-group has-float-label position-relative">
                                                        <Label>
                                                            <IntlMessages id="شماره موبایل" />
                                                        </Label>
                                                        <Field className="form-control" name="PhoneNumber" type='number'  onBlur={setFieldTouched}
                                                               placeholder="09**-***-****" />
                                                        {errors.PhoneNumber && touched.PhoneNumber ? (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.PhoneNumber}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>

                                                </div>

                                            </div>

                                            {/*<WithWizard render={({ next, previous, step, steps }) => (*/}
                                                {/*<div className={"wizard-buttons  col-12 mt-2 " + this.props.className}>*/}

                                                    {/*<Button color="primary" type="submit"*/}
                                                            {/*className={"mr-1 " +(steps.indexOf(step) >= steps.length - 1 ? "disabled" : "")}*/}
                                                        {/*// onClick={() => { this.props.onClickNext(next, steps, step) }}*/}
                                                    {/*>*/}
                                                        {/*{this.props.nextLabel}*/}
                                                    {/*</Button>*/}

                                                    {/*<Button color="primary"*/}
                                                            {/*className={"mr-auto " + (steps.indexOf(step) <= 0 ? "disabled" : "")}*/}
                                                            {/*onClick={() => { this.props.onClickPrev(previous, steps, step) }}>*/}
                                                        {/*{this.props.prevLabel}*/}
                                                    {/*</Button>*/}


                                                    {/*<Button id='sendItems'  onClick={() => { this.props.onClickNext(next, steps, step) }} className='d-none'>send</Button>*/}
                                                {/*</div>*/}
                                            {/*)} />*/}
                                            <WizardBottonNavigations {...this.props}/>




                                            {/*<Button color="primary" type="submit" className="col-2 rowInput">*/}
                                                {/*ارسال*/}
                                            {/*</Button>*/}
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

export default Step1;
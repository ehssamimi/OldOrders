import React, {Component} from 'react';
import Loader from "../../HomePages/Sub/Loader/Loader";
import {Card, CardBody, CardTitle, FormGroup, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {Colxx} from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Field, Form, Formik} from "formik";
import PersianClassCalender from "../../OldOrders/SelectTime/Headers/sub/PersianClassCalender";
import {FormikReactSelect} from "../../../containers/form-validations/FormikFields";
import ImgComponent from "../../ChichiMan/ChiChi Man Sign In/Sub/ImgComponent";
import WizardBottonNavigations from "../../ChichiMan/ChiChi Man Sign In/Sub/WizardBottonNavigations";
import * as Yup from "yup";
import {sendImg, ProductDetail, getAllCategories, AddProduct, GetProductDetail} from "../../functions/ServerConnection";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";
import CropImgCropper from "../../HomePages/Sub/CropImg/CropImgCropper";
import JustCropImg from "../../HomePages/Sub/CropImg/JustCropImg";
import ax from './../../../assets/img/2574.jpg'

const SignupSchema = Yup.object().shape({


    //
    Count: Yup.number()
        .required("تعداد محصول اجباری است!") ,
    Price: Yup.number()
        .required("قیمت اجباری است!") ,
    Name: Yup.string()
        .required("نام اجباری است!"),
    Manufacture: Yup.string()
        .required("نام تولید کننده اجباری است!"),




});




const ISOffOption = [
    { value: false , label: "تخفیف ندارد" },
    { value: true , label: "تخفیف دارد" },
];


class ContentProductAdd extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            loaderActive: true,
            ChanceTypeOption: [],
            modalLarge: false,
            CategoryOption: [],
            SubsOption: [],
            catValue: '',
            Subs: {},
            Date: '',
            Destination1: "",
            ax1File: "",
            ax1: ax,
            axError: '',
            showLoader: false,
            initialData:{
                Name:'',
                Manufacture:'',
                Count: "",
                Price:'',
                percent:'',
                Category:{ },
                sub_category:{ },
                isOff:{value: false ,label: "تخفیف ندارد"},
                Description:"" ,
                Attribute:""
                // TagKind: {value: "موتور",label: "موتور"},
            }
        }
    }

    async componentDidMount() {
        let categories = await getAllCategories();
        console.log("categories");
        console.log(categories);
        let CategoryOption=[];
        let Subs={};

        // ******** this function add sub category in array
        function SubCategory(sub) {
            let SubCat=[];
            sub.map((each,index)=>{
                let subRow= { value: each , label: each  };
                SubCat.push(subRow);
            });
            return SubCat;
        }

//      **********Map Category to seprate Category and sub category then add to Option drop down
        categories.map((each, index) => {
            let CatRow = {value: each.name, label: each.name};
            CategoryOption.push(CatRow);
            let SubCatCondition = each.sub_categories !== undefined ?
                SubCategory(each.sub_categories)
                :[{ value:"we have not sub category", label: "we have not sub category" }] ;
            Subs[each.name]=SubCatCondition;
        });




        const {match: {params}} = this.props;
        console.log(params);
        var initialData="";

        // console.log(params.Id=== undefined ?true:false);
        if (params.Id===undefined){
            // **************************inital value  *********************

            initialData={
                Name:'',
                Manufacture:'',
                Count: "",
                Price:'',
                percent:'',
                Category:{ },
                sub_category:{ },
                isOff:{value: false ,label: "تخفیف ندارد"},
                Description:"" ,
                Attribute:""
                // TagKind: {value: "موتور",label: "موتور"},
            }
        }else {
            // **************************inital value for update*********************
            let Description = await ProductDetail(params.Id);
            let productDetail = Description['Description'];
            initialData={
                Name: productDetail['UniqueValue'],
                Manufacture: productDetail['Manufacture'],
                Count: productDetail['Count'],
                Price: productDetail['CurrentPrice'],
                percent: productDetail['Off']['Percentage'],
                Category: {},
                sub_category: {},
                isOff: productDetail['Off']['Enable'] === false ? {value: false, label: "تخفیف ندارد"} : {
                    value: true,
                    label: "تخفیف دارد"
                },
                Description: productDetail['Description'],
                Attribute: productDetail['Attribute']
                // TagKind: {value: "موتور",label: "موتور"},
            };

        }
        this.setState({
            CategoryOption,Subs,initialData
        })
        // let each=await GetProductDetail(params.Id);

        // **************************sample*********************
        // _id: "5d907a3a007049cfe08e3f88"
        // UniqueValue: "برنج ارزون↵"
        // Name: "برنج ارزون↵"
        // Count: 19
        // SalesCount: null
        // ViewCount: 0
        // Create_at: "2019-09-29 14:02:38.988889"
        // Updated_at: "2019-09-29 14:02:38.988906"
        // Attribute: "۱۰ گرم"
        // Manufacture: "ارزون↵"
        // PrevPrice: 1000
        // CurrentPrice: 2572
        // Description: "description1"
        // Category: "گروه ۲"
        // Images: ["http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e"]
        // Off: {Enable: true, Percentage: 0.1}

    }

    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };

    // GetImag(Type,value){
    //     let {ax}=this.state;
    //     ax[Type]=value;
    //     this.setState({
    //         ax
    //     },()=>{
    //         // console.log(ax)
    //         // console.log(ax['SSN'])
    //     })
    // }
    GetImgFile(file,Destination , label ,base64){
        // console.log(file);
        // console.log(Destination);
        // console.log(label);
        switch(label) {
            case 'عکس اول':
                this.setState({
                    Destination1:Destination, ax1File:file ,ax1:base64
                });
                break;
            default:
                console.log("cant know why? but your sucks")
        }

        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));


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

    onChange = (event,value) => {
        let {Subs}=this.state;
        let Options=Subs[value.value];
        // console.log(Subs[value.value]);
        this.setState({
            catValue:value ,SubsOption:Options
        });

    };

    handleSubmit = async (values, { setSubmitting }) => {
        const payload = {
            ...values,
            isOff: values.isOff.value,
            Category: values.Category.value,
            sub_category: values.sub_category.value,
            // ChanceType: values.ChanceType.value,
            // Name: values.Name.value,

        };
        console.log(payload);
        let {  ax1File, axError} = this.state;
        console.log('ax1File');
        console.log(ax1File);
         let axValid = true;
        if (ax1File === '') {
            axValid = false;
            axError = "عکس محصول اجباری است "
        }else {
            axError = ""
        }
        this.setState({
            axError
        }, () => {

        })

        if (axValid) {
            console.log(payload);
            this.setState({
                showLoader:true
            });
            // console.log(payload);


            let idax = await sendImg(ax1File, 'Public');




            // let Data={
            //     "UniqueValue": payload.Name,
            //     "Name":payload.Name,
            //     "Attribute": payload.Attribute,
            //     "Manufacture": payload.Manufacture,
            //     "Count": payload.Count.toString(),
            //     "Price": payload.Price,
            //     "Description":payload.Description,
            //     "Category":payload.sub_category,
            //     "Images": [
            //         idax.toString()
            //  ],
            //     "Off": payload.percent,
            //     "IsOffEnable": payload.isOff
            // };

            let Data={
                "UniqueValue": payload.Name,
                "Name":payload.Name,
                "Attribute": payload.Attribute,
                "Manufacture": payload.Manufacture,
                "Count": payload.Count.toString(),
                "Price": payload.Price,
                "Description":payload.Description,
                "Category":payload.sub_category,
                "Images": [
                    idax.toString()
             ],
                "Off": payload.percent,
                "IsOffEnable": payload.isOff
            };


            console.log(Data);





            let Register = await AddProduct(JSON.stringify(Data));

            // console.log(Register);
            this.setState({
                showLoader: false
            });
            let {state, Description} = Register;
            if (state ) {
                NotificationManager.success(
                    "congratulation",
                    "اطلاعات شما با موفقیت ثبت شد",
                    3000,
                    null,
                    null,
                    "success"
                );
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
    render() {

        let{axError,ax1,CategoryOption,SubsOption}=this.state;
         return (
            this.state.showLoader ||Object.entries(CategoryOption).length===0?
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
                                            <span>اطلاعات محصول</span>
                                         </div>
                                    </CardTitle>
                                    <Formik
                                        initialValues={
                                            this.state.initialData


                                        }
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
                                            <Form className="av-tooltip tooltip-label-bottom w-100 row m-0" style={{height:'45vh',minHeight:"45vh"}}>
                                                <div className="col-sm-12 col-md-3 ">
                                                    <FormGroup className="form-group  position-relative">
                                                        <div className='d-flex justify-content-start col-12'>
                                                            <Label  className='d-flex  ml-2 mr-2'>
                                                                <span className='ml-auto  '>عکس محصول</span>
                                                            </Label>
                                                        </div>
                                                        <div className='d-flex col-12 flex-column paddingZero  '>
                                                            <div className="col-12">
                                                                <div className=' w-100  mt-1 mb-1 pointer h-30vh'
                                                                     onClick={this.toggleLarge.bind(this, '1')}>
                                                                    <img src={ax1} className='img-self-fill br02'/>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        {/*<ImgComponent Type='Img' GetData={this.GetImag.bind(this)}/>*/}

                                                        {
                                                            axError.length>1?<span className=" invalid-feedback d-block">{axError} </span>:""
                                                        }
                                                    </FormGroup>
                                                </div>
                                                <div className="col-sm-12 col-md-9 d-flex flex-column justify-content-between">

                                                    <div className="w-100 row m-0 ">
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormGroup className="form-group has-float-label position-relative">
                                                                <Label>
                                                                    <span>نام</span>

                                                                </Label>
                                                                <Field className="form-control" name="Name"   onBlur={setFieldTouched}
                                                                       placeholder="نام محصول را وارد کنید !" />
                                                                {errors.Name && touched.Name ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Name}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormGroup className="form-group has-float-label position-relative">
                                                                <Label>
                                                                    <span>تولید</span>

                                                                </Label>
                                                                <Field className="form-control" name="Manufacture"  onBlur={setFieldTouched}
                                                                       placeholder="کارخانه تولیدی را مشخص کنید !" />
                                                                {errors.Manufacture && touched.Manufacture ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Manufacture}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormGroup className="form-group has-float-label position-relative">
                                                                <Label>
                                                                    <span>قیمت</span>

                                                                </Label>
                                                                <Field className="form-control" name="Price" type="number" onBlur={setFieldTouched}
                                                                       placeholder="قیمت را مشخص کنید !" />
                                                                {errors.Price && touched.Price ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Price}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormGroup className="form-group has-float-label position-relative">
                                                                <Label>
                                                                    <span>تعداد</span>
                                                                </Label>
                                                                <Field className="form-control" name="Count"  type="number" onBlur={setFieldTouched}
                                                                       placeholder="تعداد را مشخص کنید !" />
                                                                {errors.Count && touched.Count ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Count}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6  ">

                                                            <FormGroup className="form-group has-float-label">
                                                                <Label>
                                                                    <span>دسته بندی</span>
                                                                </Label>
                                                                <FormikReactSelect
                                                                    name="Category"
                                                                    id="Category"
                                                                    value={this.state.catValue}
                                                                    options={CategoryOption}
                                                                    onChange={this.onChange.bind( values.Category) }
                                                                    onBlur={setFieldTouched}
                                                                />
                                                                {errors.Category && touched.Category ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Category}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">

                                                            <FormGroup className="form-group has-float-label">
                                                                <Label>
                                                                    <span>زیر دسته بندی</span>
                                                                </Label>
                                                                <FormikReactSelect
                                                                    name="sub_category"
                                                                    id="sub_category"
                                                                    value={values.sub_category}
                                                                    options={SubsOption}
                                                                    onChange={setFieldValue}
                                                                    onBlur={setFieldTouched}
                                                                />
                                                                {errors.sub_category && touched.sub_category ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.sub_category}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12  ">

                                                            <FormGroup className="form-group has-float-label">
                                                                <Label>
                                                                    <span>مشخصات</span>
                                                                </Label>
                                                                <Field className="form-control" name="Attribute"  type="text" onBlur={setFieldTouched}
                                                                       placeholder="مشخصات محصول را وارد کنید " />
                                                                {errors.Attribute && touched.Attribute ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Attribute}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        <div className="col-sm-12">

                                                            <FormGroup className="form-group has-float-label">
                                                                <Label>
                                                                    <span>توضیحات</span>
                                                                </Label>
                                                                <Field className="form-control" name="Description"
                                                                       component="textarea"
                                                                       rows="3"
                                                                       type="text" onBlur={setFieldTouched}
                                                                       placeholder="توضیحات را وارد کنید "/>
                                                                {errors.Description && touched.Description ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.Description}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormGroup className="form-group has-float-label">
                                                                <Label>
                                                                    <span>تخفیف</span>

                                                                </Label>
                                                                <FormikReactSelect
                                                                    name="isOff"
                                                                    id="isOff"
                                                                    value={values.isOff}
                                                                    options={ISOffOption}
                                                                    onChange={setFieldValue}
                                                                    onBlur={setFieldTouched}
                                                                />
                                                                {errors.isOff && touched.isOff ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {errors.isOff}
                                                                    </div>
                                                                ) : null}
                                                            </FormGroup>
                                                        </div>
                                                        {
                                                            values.isOff.value === true ?

                                                                <div className="col-sm-12 col-md-6 ">
                                                                    <FormGroup
                                                                        className="form-group has-float-label position-relative">
                                                                        <Label>
                                                                            <IntlMessages id="چند درصد"/>
                                                                        </Label>
                                                                        <Field className="form-control" name="percent"
                                                                               type="number" onBlur={setFieldTouched}
                                                                               placeholder="درصد را مشخص کنید !"/>
                                                                        {/*{errors.Count && touched.Count ? (*/}
                                                                        {/*<div className="invalid-feedback d-block">*/}
                                                                        {/*{errors.Count}*/}
                                                                        {/*</div>*/}
                                                                        {/*) : null}*/}
                                                                    </FormGroup>
                                                                </div>


                                                                :""
                                                        }


                                                    </div>
                                                    <button className="btn btn-success" type="submit">
                                                        فرستادن
                                                    </button>
                                                </div>

                                             </Form>
                                        )}
                                    </Formik>
                                </CardBody>
                            </Card>
                        </Colxx>
                    </Row>
                    <Modal
                        isOpen={this.state.modalLarge}
                        size="lg"
                        toggle={this.toggleLarge}
                    >
                        <ModalHeader toggle={this.toggleLarge}>
                        </ModalHeader>
                        <ModalBody>
                            <div className='col-12 d-flex flex-column'>
                                { <JustCropImg label='عکس اول' aspect={1/1} GetImgFile={this.GetImgFile.bind(this)}  /> }
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
        );
    }
}

export default ContentProductAdd;
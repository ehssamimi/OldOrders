import React, {Component} from 'react';
import Loader from "../../HomePages/Sub/Loader/Loader";
import {Card, CardBody, CardTitle, FormGroup, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {Colxx} from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Field, Form, Formik} from "formik";
 import {FormikReactSelect} from "../../../containers/form-validations/FormikFields";
  import * as Yup from "yup";
import {sendImg, ProductDetail, getAllCategories, AddProduct, UpdateProduct} from "../../functions/ServerConnection";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";
 import JustCropImg from "../../HomePages/Sub/CropImg/JustCropImg";
import ax from './../../../assets/img/4th.jpg'

const FormInput = ({ label,name,placeHolder,setFieldTouched,errors,touched }) => (
    <FormGroup className="form-group has-float-label position-relative">
        <Label>
            <span>{label}</span>
        </Label>
        <Field className="form-control" name={name}   onBlur={setFieldTouched}
               placeholder="نام محصول را وارد کنید !" />
        {errors[`${name}`]  && touched[`${name}`] ? (
            <div className="invalid-feedback d-block">
                {errors[`${name}`]}
            </div>
        ) : null}
    </FormGroup>
);



const SignupSchema = Yup.object().shape({

    Count: Yup.number().positive('تعداد محصول باید عدد مثبت  باشد').integer('تعداد محصول باید عدد صحیح باشد')
        .required("تعداد محصول اجباری است!"),
    Price: Yup.number()
        .positive("قیمت باید عدد مثبت باشد")
        .required("قیمت اجباری است!"),
    Name: Yup.string()
        .required("نام اجباری است!"),
    Manufacture: Yup.string()
        .required("نام تولید کننده اجباری است!"),
    Description: Yup.string()
        .required("توضیحات محصول اجباری است!"),
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
            axError: '', catError:{'cat':"",'sub':""},
            showLoader: false,
            initialData:{
                Name:'',
                Manufacture:'',
                Count: "",
                Price:'',
                percent:'',
                Category:{ },
                sub_category:{label:"",value:""},
                isOff:{value: false ,label: "تخفیف ندارد"},
                Description:"" ,
                Attribute:""
                // TagKind: {value: "موتور",label: "موتور"},
            },id:'',updateImage:''
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
//      **********Map Category to separate Category and sub category then add to Option drop down
        if (categories.Description!=='Network Error'){
            categories.map((each, index) => {
                CategoryOption.push({value: each.name, label: each.name});
                let SubCatCondition = each.sub_categories !== undefined ?
                    SubCategory(each.sub_categories)
                    :[{ value:"we have not sub category", label: "we have not sub category" }] ;
                Subs[each.name]=SubCatCondition;
            });
        }else {
            NotificationManager.error(
                "error",
                'Network Error',
                3000,
                null,
                null,
                "error"
            );
        }

        // ***********get params Id********
        const {match: {params}} = this.props;
        console.log(params);
        var initialData="";

          // ***********if update***********
        if (params.Id===':Id'){
            // ************************** set initial  *********************
            initialData={
                Name:'',
                Manufacture:'',
                Count: "",
                Price:'',
                percent:'',
                Category:{ },
                sub_category:{label:"",value:"" },
                isOff:{value: false ,label: "تخفیف ندارد"},
                Description:"" ,
                Attribute:""
             }

        }else {
            // **************************initial value for update*********************
            let Description = await ProductDetail(params.Id);
            let productDetail = Description['Description'];
            initialData = {
                Name: productDetail['Name'],
                UniqueName: productDetail['UniqueValue'],
                Manufacture: productDetail['Manufacture'],
                Count: productDetail['Count'],
                Price: productDetail['PrevPrice'],
                percent: productDetail['Off']['Percentage'],
                Category: {value: productDetail['Category'], label: productDetail['Category']},
                sub_category: {value: productDetail['SubCategory'], label: productDetail['SubCategory']},
                isOff: productDetail['Off']['Enable'] === false ? {value: false, label: "تخفیف ندارد"} : {
                    value: true,
                    label: "تخفیف دارد"
                },
                Images: productDetail['Images'][0],
                Description: productDetail['Description'],
                Attribute: productDetail['Attribute']
             };
            console.log('update-initial');
            console.log(productDetail);

            var catValue={value: productDetail['Category'], label: productDetail['Category']};
            var updateImage=productDetail['Images'][0].split('/')
         }
        this.setState({
            CategoryOption,Subs,initialData,catValue,ax1:params.Id===':Id'?ax: initialData['Images'],id:params.Id===':Id'?"":params.Id,updateImage:params.Id===':Id'?"":updateImage[4]
        })

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
// **********Handel open modal for get image*********
    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };

    // **********get image from modal and close it*********
    GetImgFile(file,Destination , label ,base64){
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

// **************Get Date************
    GetData(Data){
         if (Data!==null){
            let Date=`${Data.year}/${Data.month}/${Data.day}`;
             this.setState({
                Date
            });
        }
     }

// **************Change sub-category from change category ************
    onChange = (event,value) => {
        let {Subs}=this.state;
        let Options=Subs[value.value];
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
        };

// **************check its update or just add **********

        // **************update product **********
        if (this.state.id.length>2){
            var idax;
             let {  ax1File ,catValue} = this.state;
            let off=payload.percent.toString().length>1?payload.percent>1?payload.percent/100:payload.percent:0.0;


            let Data={
                    "Id": this.state.id,
                    "UniqueValue": this.state.initialData['UniqueName'],
                    "Name":payload.Name,
                    "Attribute": payload.Attribute,
                    "Manufacture": payload.Manufacture,
                    "Count": payload.Count.toString(),
                    "Price": payload.Price,
                    "Description":payload.Description,
                    "Category":catValue.value,
                    "SubCategory": payload.sub_category,
                    "Images": [
                        ax1File === ''?this.state.updateImage:await sendImg(ax1File, 'Public')
                    ],
                    "Off":off || 0.0,
                    "IsOffEnable": payload.isOff,
                };
                let Register = await UpdateProduct(JSON.stringify(Data));
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
        // **************add product **********
        } else {
             let {  ax1File, axError,catValue,catError} = this.state;
             // ****check validation form for category sub-category image**********
            let axValid = true;
            if (ax1File === '') {
                axValid = false;
                axError = "عکس محصول اجباری است "
            }else {
                axError = ""
            }

            if (catValue === undefined) {
                axValid = false;
                catError.cat = "دسته بندی اجباری است"
            }else {
                catError.cat = ""
            }
            if (payload.sub_category === '') {
                axValid = false;
                catError.sub = "زیر دسته اجباری است"
            }else {
                catError.sub = ""
            }
            this.setState({
                axError,catError
            });
            // **********send validate data*********
            if (axValid) {
                 this.setState({
                    showLoader:true
                });
                let idax = await sendImg(ax1File, 'Public');
                let off=payload.percent.toString().length>1?payload.percent>1?payload.percent/100:payload.percent:0.0;
                console.log("off");
                console.log(off);


                let Data={
                    "UniqueValue": payload.Name,
                    "Name":payload.Name,
                    "Attribute": payload.Attribute,
                    "Manufacture": payload.Manufacture,
                    "Count": payload.Count.toString(),
                    "Price": payload.Price,
                    "Description":payload.Description,
                    "Category":catValue.value,
                    "Images": [
                        idax.toString()
                    ],
                    "Off": off || 0.0,
                    "IsOffEnable": payload.isOff,
                    "SubCategory": payload.sub_category
                };

                let Register = await AddProduct(JSON.stringify(Data));

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
        }


    };
    render() {

        let{axError,ax1,CategoryOption,SubsOption,catError}=this.state;
        console.log('SubsOption')
        console.log(SubsOption)
         return (
            this.state.showLoader || Object.entries(CategoryOption).length===0?   // *******checking for submit form or get category Option is then loader start then loader close**********
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
                                                    {/*********show image and open modal ***********/}
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
                                                         {axError.length>1 && touched.Category ? (
                                                            <div className="invalid-feedback d-block">
                                                                {axError}
                                                            </div>
                                                        ) : null}
                                                    </FormGroup>
                                                </div>

                                                <div className="col-sm-12 col-md-9 d-flex flex-column justify-content-between">

                                                    <div className="w-100 row m-0 ">

                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormInput label='نام' name='Name' placeHolder='نام محصول را وارد کنید !' setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormInput label='تولید' name='Manufacture' placeHolder='کارخانه تولیدی را مشخص کنید !' setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormInput label='قیمت' name='Price' placeHolder='نام محصول را وارد کنید !' setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6 ">
                                                            <FormInput label='تعداد' name='Count' placeHolder='تعداد را مشخص کنید !' setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>
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
                                                                {catError['cat'].length>1 && touched.Category ? (
                                                                    <div className="invalid-feedback d-block">
                                                                        {catError['cat']}
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
                                                                        className={ SubsOption.length!==0?'':'pointer-none'}
                                                                        value={values.sub_category}
                                                                        options={SubsOption}
                                                                        onChange={setFieldValue}
                                                                        onBlur={setFieldTouched}
                                                                    />
                                                                    {catError['sub'].length>1 && touched.sub_category ? (
                                                                        <div className="invalid-feedback d-block">
                                                                            {catError['sub']}
                                                                        </div>
                                                                    ) : null}
                                                                </FormGroup>


                                                        </div>

                                                        <div className="col-sm-12  ">
                                                            <FormInput label='مشخصات' name='Attribute' placeHolder='مشخصات محصول را وارد کنید' setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>
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
                                                            // **********check is off is set then set the number*******
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

                    {/********Modal for get image**********/}
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
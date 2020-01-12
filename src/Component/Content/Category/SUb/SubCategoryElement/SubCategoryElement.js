import React, {Component} from 'react';
import {Card, CardBody, Collapse, Modal, ModalBody, ModalHeader, ModalFooter,Button} from "reactstrap";
import AddressInfo from "../../../../Support/Users/UserDetails/sub/Addresses/Address/AddressInfo";
import {getProductinSubCategogy,Add_Remove_SubCategory} from './../../../../functions/ServerConnection'
import {Colxx} from "../../../../../components/common/CustomBootstrap";
import CategoryEachItems from "../CategoryEachItems/CategoryEachItems";
import Loader from "../../../../HomePages/Sub/Loader/Loader";
import ax from './../../../../../assets/img/4th-1.jpg'

import SliderProductDetail from "../SliderProductDetail/SliderProductDetail";
import GlideComponent from "../../../../../components/carousel/GlideComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PreviewProduct from "../../../Product/sub/PreviewProduct/PreviewProduct";
import JustCropImg from "../../../../HomePages/Sub/CropImg/JustCropImg";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";
import {Power4, TweenMax} from "gsap/TweenMax";
import ContentCategoryUpdate from "../../Content-category-update";
import SubCategoryProductInfinityScroll from "../SubCategoryProductInfinityScroll/SubCategoryProductInfinityScroll";



const NoControlCarouselItem = ({   Image }) => {

    return (
        <div className="glide-item">
            <Card>
                <div className="position-relative vh25">
                    <p>arsenal</p>
                    {/*<img className="card-img-top img-self-fill " src={ax} alt={ax} />*/}
                    {/*Destination: null*/}
                    {/*DestinationId: null*/}
                    {/*Image: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e"*/}
                    {/*Position: 4*/}
                </div>
                <CardBody>
                    {/*<h6 className="mb-4">{Destination}</h6>*/}
                    {/*<footer>*/}
                        {/*<p className="text-muted text-small mb-0 font-weight-light">*/}
                            {/*DestinationId: {DestinationId}*/}
                        {/*</p>*/}
                        {/*<div className='d-flex'  >*/}
                            {/*<span className='  d-flex  '>*/}
                                {/*{Position}*/}
                                {/*Position:*/}
                            {/*</span>*/}


                        {/*</div>*/}

                    {/*</footer>*/}
                </CardBody>
            </Card>
        </div>
    );
};



class SubCategoryElement extends Component {
    constructor(props) {
        super(props);

        this.state={
            collapse: false,productSeparate:"",files: [
                {
                    id: 0,
                    img: ax
                },
                {
                    id: 1,
                    img: ax
                },


            ],DeleteModal:false,
        };
        this.toggle = this.toggle.bind(this);
        this.deleteToggle = this.deleteToggle.bind(this);
    }
    async componentDidMount() {
        const {name} = this.props;
    //
    let SubInfoInfo= await getProductinSubCategogy(name,1);
        const {Description: {Products}} = SubInfoInfo;



        let productSeparate=[]
        Products.map((each, index) => {
                let sub = {"تعداد": each['Count'],"تولید": each['Manufacture'],"دسته بندی": each['Category'] };
                let Main = {
                    "name": each['UniqueValue'],
                    "Attribute": each['Attribute'],
                    "Description": each['Description'],
                    "PrevPrice": each['PrevPrice'],
                    "CurrentPrice": each['CurrentPrice'],
                    "Images": each['Images'][0],
                    "ViewCount": each['ViewCount'] ,
                    "Off": each['Off'],
                    "id":each['_id']
                };
                let row={'Main':Main,'sub':sub};
                productSeparate.push(row)
            }
        );
        // console.log(productSeparate)
        this.setState({
            productSeparate
        })



    //  console.log(SubInfoInfo);
    //  console.log(Products);
    // //
    //     let SubCategory=CatInfo['sub_categories'];
    //     console.log(SubCategory);



    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    deleteToggle() {
        this.setState(state => ({ DeleteModal: !state.DeleteModal }));
    }

    async DeleteSubCategory() {
        let {name, catName} = this.props;
        let deleteSubCat = await Add_Remove_SubCategory('delete', catName, name);
        console.log(deleteSubCat);
        let {state,Description}= deleteSubCat ;
        if (state===200){
            NotificationManager.success(
                "congratulation",
                "your Sub-category deleted",
                3000,
                null,
                null,
                "success"
            );
            let id=this.props.name;
            console.log(id);
            // const $el = document.getElementById(`${id}`);
            // const duration = 2;
            // const from = { opacity: 0};
            // await TweenMax.to($el, duration, from);
            //  await setTimeout(() => {
            //     $el.remove();
            // }, 2000);
            //  await setTimeout(() => {
                this.props.UpdateSubCategory(id);
             // }, 3000);
             this.deleteToggle();

        } else {
            NotificationManager.error(
                "error",
                Description,
                3000,
                null,
                null,
                "error"
            );
            this.deleteToggle()

        }
    }

    render() {
        let{productSeparate}=this.state;
        // console.log(productSeparate);
        return (
            <div className='mt-3 w-100'   id={this.props.name} >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100 d-flex' >
                            <div className='d-flex justify-content-start align-items-center ' onClick={this.toggle}  >
                                {
                                    this.state.collapse?
                                        <h3 className='simple-icon-minus icon-glyph  mb0 ml-1 '/>
                                        :
                                        <h3 className='simple-icon-plus icon-glyph  mb0  ml-1'/>
                                }
                                <h3 className='mb0 '>{this.props.name}</h3>

                            </div>
                            <div className='mr-auto' onClick={this.deleteToggle}>
                                <h3 className='glyph-icon simple-icon-trash purpleColor  Scale-Delete mb0  ml-1'/>
                            </div>
                        </div>
                        <Collapse className='h-40vh w-100 hiddenScroll mt-3' isOpen={this.state.collapse}  >
                            {/*{*/}
                                {/*productSeparate.length>0?<SliderProductDetail  productSeparate={ productSeparate}/>:""*/}
                            {/*}*/}

                            <SubCategoryProductInfinityScroll name={this.props.name}/>
                        </Collapse>
                    </CardBody>

                </Card>

                <Modal
                    isOpen={this.state.DeleteModal}
                    size="lg"
                    toggle={this.deleteToggle}
                >
                    <ModalHeader toggle={this.deleteToggle}>
                    </ModalHeader>
                    <ModalBody>
آیا مطممئین هستید که می خواهید این زیر دسته را حذف کنید؟                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.DeleteSubCategory.bind(this)}>بله</Button>{' '}
                        <Button color="secondary" onClick={this.deleteToggle}>بی خیال</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SubCategoryElement;
import React, {Component} from 'react';
import {Card, CardBody, Collapse, Row} from "reactstrap";
import AddressInfo from "../../../../Support/Users/UserDetails/sub/Addresses/Address/AddressInfo";
import {getProductinSubCategogy} from './../../../../functions/ServerConnection'
import {Colxx} from "../../../../../components/common/CustomBootstrap";
import CategoryEachItems from "../CategoryEachItems/CategoryEachItems";
import Loader from "../../../../HomePages/Sub/Loader/Loader";
import ax from './../../../../../assets/img/4th-1.jpg'

import SliderProductDetail from "../SliderProductDetail/SliderProductDetail";
import GlideComponent from "../../../../../components/carousel/GlideComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PreviewProduct from "../../../Product/sub/PreviewProduct/PreviewProduct";


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

            ]
        };
        this.toggle = this.toggle.bind(this);
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
        console.log(productSeparate)
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
    render() {
        let{productSeparate}=this.state;
        console.log(productSeparate);
        return (
            <div className='mt-3 w-100' dir='rtl' >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100' onClick={this.toggle}>
                            <div className='d-flex justify-content-start align-items-center '  >
                                {
                                    this.state.collapse?
                                        <h3 className='simple-icon-minus icon-glyph  mb0 ml-1 '/>
                                        :
                                        <h3 className='simple-icon-plus icon-glyph  mb0  ml-1'/>
                                }
                                <h3 className='mb0 '>{this.props.name}</h3>
                            </div>
                        </div>
                        <Collapse isOpen={this.state.collapse}>
                            <SliderProductDetail    productSeparate={this.state.files}/>






                            {/*<div className='d-flex  w-100 mt-3 flex-wrap'  >*/}
                                {/*{productSeparate.length>1 ?*/}
                                    {/*productSeparate.map((todo, index) =>*/}
                                        {/*<PreviewProduct Main={todo.Main} sub={todo.sub} key={index} class={' col-sm-6 col-lg-6 '}/>*/}
                                    {/*) : ''*/}
                                {/*}*/}
                            {/*</div>*/}
                        </Collapse>
                    </CardBody>

                </Card>
            </div>
        );
    }
}

export default SubCategoryElement;
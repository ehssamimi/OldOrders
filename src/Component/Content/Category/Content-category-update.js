import React, {Component} from 'react';
import InfiniteCarousel from "react-leaf-carousel";
import Ax from './../../../assets/img/4th-1.jpg'
import SliderProductDetail from "./SUb/SliderProductDetail/SliderProductDetail";
import {getProductinSubCategogy} from "../../functions/ServerConnection";

class ContentCategoryUpdate extends Component {
    constructor(props) {
        super(props);
        this.state={
            productSeparate:''
        }
    }

    async componentDidMount() {
        // const {name} = this.props;
        let name='نوشیدنی';
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
        },()=>{
            console.log(this.state.productSeparate)
        })



        //  console.log(SubInfoInfo);
        //  console.log(Products);
        // //
        //     let SubCategory=CatInfo['sub_categories'];
        //     console.log(SubCategory);



    }

    render() {
        let{productSeparate}=this.state;
        // console.log(productSeparate)

        return (
            <div className='w-100'>
                {
                    productSeparate.length>0? <SliderProductDetail productSeparate={productSeparate}/>   :''
                }


            </div>
        );
    }
}

export default ContentCategoryUpdate;
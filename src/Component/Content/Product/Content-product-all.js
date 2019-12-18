import React, {Component} from 'react';
import PreviewProduct from "./sub/PreviewProduct/PreviewProduct";
import PreviewProductDetail from "./sub/PreviewProductDetail/PreviewProductDetail";
import {GetAllProduct} from './../../functions/ServerConnection'
import RowShowShow from "../../PresentOrders/RowShowShow";
class ContentProductAll extends Component {
    constructor(props) {
        super(props);
        this.state={
            productSeparate:[]
        }

    }

    async componentDidMount() {
        let Response = await GetAllProduct(1);
        let {Products} = Response;
        console.log(Products);
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
    render() {
        let {productSeparate}=this.state;
        console.log(productSeparate.length);
        return (

                <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                    {productSeparate.length>1 ?
                        productSeparate.map((todo, index) =>
                       <PreviewProduct Main={todo.Main} sub={todo.sub} class={' col-sm-6 col-lg-4  '}/>
                        ) : ''
                    }
                </div>


        );
    }
}

export default ContentProductAll;
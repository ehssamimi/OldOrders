import React, {Component} from 'react';
import PreviewProduct from "./sub/PreviewProduct/PreviewProduct";
import PreviewProductDetail from "./sub/PreviewProductDetail/PreviewProductDetail";
import {GetAllProduct} from './../../functions/ServerConnection'
import RowShowShow from "../../PresentOrders/RowShowShow";
import InfiniteScroll from 'react-infinite-scroller';
import Loader from "../../HomePages/Sub/Loader/Loader";

class ContentProductAll extends Component {
    constructor(props) {
        super(props);
        this.state={
            productSeparate:[],
            pageStart:1,
            hasMore:true,
            last_page:12
        }
    }

    // async componentDidMount() {
    //     let Response = await GetAllProduct(1);
    //     let {Products} = Response;
    // }

   async loadMore(){
       console.log("loadMore")

       let{pageStart,last_page}=this.state;

       let Response = await GetAllProduct(pageStart);
       let{Products,Page}=Response;
       // console.log(Products);
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
       this.setState(prevState=>({
           productSeparate:[ ...prevState.productSeparate , ...productSeparate ],
           hasMore:Page !== last_page,
           pageStart:Page+1
       }));
   }



    render() {
        let {productSeparate}=this.state;
        // console.log(productSeparate);
        // console.log(this.props);


        return (

            <InfiniteScroll
                className="row rtl m-0"
                pageStart={0}
                loadMore={this.loadMore.bind(this)}
                hasMore={this.state.hasMore}
                loader={<div className="loader " key={0}><Loader/></div>}
            >

                <div className='d-flex  w-100  flex-wrap'  >
                    {productSeparate.length>1 ?
                        productSeparate.map((todo, index) =>
                            <PreviewProduct Main={todo.Main} sub={todo.sub}  key={index} class={' col-sm-6 col-lg-3  '}/>
                        ) : ''
                    }
                </div>
                {/*{this.state.article.map((product, index)=><Iteam product={product} key={index}/>)}*/}
            </InfiniteScroll>





        );
    }
}

export default ContentProductAll;
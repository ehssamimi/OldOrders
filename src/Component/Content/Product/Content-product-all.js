import React, {Component} from 'react';
import PreviewProduct from "./sub/PreviewProduct/PreviewProduct";
 import {GetAllProduct} from './../../functions/ServerConnection'
 import InfiniteScroll from 'react-infinite-scroller';
import Loader from "../../HomePages/Sub/Loader/Loader";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";

class ContentProductAll extends Component {
    constructor(props) {
        super(props);
        this.state={
            productSeparate:[],
            pageStart:1,
            hasMore:true,
            last_page:500
        }
    }


// **********Load more function forinfinity scroll***********
   async loadMore(){
        let{pageStart,last_page}=this.state;
       let Response = await GetAllProduct(pageStart);
       console.log(Response);

       if (Response!=='error') {
           let{Products,Page}=Response;
           let productSeparate=[];
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
           });
           this.setState(prevState=>({
               productSeparate:[ ...prevState.productSeparate , ...productSeparate ],
               // hasMore:    Page !== last_page,
               pageStart:Page+1,
               hasMore:  Products.length !== 0
           }));
       }else {
           NotificationManager.error(
               "Network Error",
               Response,
               3000,
               null,
               null,
               "error"
           );
       }

   }

    render() {
        let {productSeparate}=this.state;

        return (

            <InfiniteScroll
                className="row rtl m-0"
                pageStart={0}
                loadMore={this.loadMore.bind(this)}
                hasMore={this.state.hasMore}
                loader={<div className="loader col-6 offset-3" key={0}><Loader/></div>}
            >

                <div className='d-flex  w-100  flex-wrap'  >


                    {productSeparate.length>0 && Array.isArray(productSeparate)  ?
                        productSeparate.map((todo, index) =>
                            <PreviewProduct Main={todo.Main} sub={todo.sub}  key={index} class={' col-sm-6 col-lg-3  '}/>
                        ) : ''
                    }
                </div>
             </InfiniteScroll>
        );
    }
}

export default ContentProductAll;

import React, {Component} from 'react';
import ChichiManInfoCard from "../ChichiMan-Info/Main-Chichi-Info/sub/ChichiManInfoCard/ChichiManInfoCard";
import ax from "../../../assets/img/4th-1.jpg";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../../HomePages/Sub/Loader/Loader";
import {GetAllProduct,ChichiManListSummery} from "../../functions/ServerConnection";

class ChichiManList extends Component {
    constructor(props) {
        super(props);
        this.state={
            listChichiMan: [],
            pageStart:1,
            hasMore:true,
            last_page:500
        }
    }
    async loadMore(){
        let{pageStart,last_page,listChichiMan}=this.state;
        let Response = await ChichiManListSummery(pageStart);
        // let Response2 = await ChichiManListSummery(pageStart);
        let {Description ,Code}=Response;
        let Page=1;

      if (Code===200) {
          this.setState(prevState=>({
              listChichiMan:[ ...prevState.listChichiMan , ...Description ],
              // hasMore:    Page !== last_page,
              pageStart:Page+1,
              hasMore:  Description.length !== 0
          }));
      }else {


      }


        // let productSeparate=[];
        // Products.map((each, index) => {
        //     let sub = {"تعداد": each['Count'],"تولید": each['Manufacture'],"دسته بندی": each['Category'] };
        //     let Main = {
        //         "name": each['UniqueValue'],
        //         "Attribute": each['Attribute'],
        //         "Description": each['Description'],
        //         "PrevPrice": each['PrevPrice'],
        //         "CurrentPrice": each['CurrentPrice'],
        //         "Images": each['Images'][0],
        //         "ViewCount": each['ViewCount'] ,
        //         "Off": each['Off'],
        //         "id":each['_id']
        //     };
        //     let row={'Main':Main,'sub':sub};
        //     productSeparate.push(row)
        // });
        // this.setState(prevState=>({
        //     productSeparate:[ ...prevState.productSeparate , ...productSeparate ],
        //     // hasMore:    Page !== last_page,
        //     pageStart:Page+1,
        //     hasMore:  Products.length !== 0
        // }));
    }

    render() {
        // let{listChichiMan}=this.state;
        // return (
        //     <div className='row m-0 w-100'>
        //         {
        //             listChichiMan.length>0?
        //                 listChichiMan.map((chichiMan ,index)=><ChichiManInfoCard id={index} key={index} chichiMan={chichiMan}  {...this.props } class='col-sm-6 col-md-4 col-lg-3'  />):""
        //         }
        //
        //     </div>
        // );

        let{listChichiMan}=this.state;
        console.log('listChichiMan');
        console.log(listChichiMan);
        return (

            <InfiniteScroll
                className="row rtl m-0"
                pageStart={0}
                loadMore={this.loadMore.bind(this)}
                hasMore={this.state.hasMore}
                loader={<div className="loader " key={0}><Loader/></div>}
            >
                <div className='row m-0 w-100'>
                    {
                        listChichiMan.length > 0 ?
                            listChichiMan.map((chichiMan, index) => <ChichiManInfoCard id={chichiMan['_id']} key={index} chichiMan={chichiMan}  {...this.props}
                                                                                       class='col-sm-6 col-md-4 col-lg-3'/>) : ""
                    }
                </div>
            </InfiniteScroll>
        );


    }
}

export default ChichiManList;
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
            listChichiMan: [{
                'name': "احسان صمیمی راد",
                'phoneNumber': "09112561701",
                'image': ax,
                'vehicle': "موتور برقی",
                'Plaque': '62 ب ایران 62'
            }, {
                'name': "سهند میرزایی",
                'phoneNumber': "09365265",
                'image':  '',
                'vehicle': "موتور برقی",
                'Plaque': '62 ب ایران 62'
            },
                {
                    'name': "احسان صمیمی راد",
                    'phoneNumber': "09112561701",
                    'image': ax,
                    'vehicle': "موتور برقی",
                    'Plaque': '62 ب ایران 62'
                },
            ],
            productSeparate:[],
            pageStart:1,
            hasMore:true,
            last_page:500
        }
    }
    async loadMore(){
        let{pageStart,last_page}=this.state;
        let Response = await ChichiManListSummery(pageStart);
        // let Response2 = await ChichiManListSummery(pageStart);
        console.log(Response);
        let{Products,Page}=Response;
        // if (Products.length===0){
        //     console.log('this is the end');
        //     this.setState({
        //         last_page:Page+1
        //     })
        // }
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

        let{listChichiMan,productSeparate}=this.state;
        console.log('productSeparate');
        console.log(productSeparate);
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
                            listChichiMan.map((chichiMan, index) => <ChichiManInfoCard id={index} key={index}
                                                                                       chichiMan={chichiMan}  {...this.props}
                                                                                       class='col-sm-6 col-md-4 col-lg-3'/>) : ""
                    }

                </div>
            </InfiniteScroll>
        );


    }
}

export default ChichiManList;
import React, {Component} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import RowShowShow from "../../../../PresentOrders/RowShowShow";
import CollapseRow from "../../../../PresentOrders/Common/CollapseRow";
import ShowModal from "../../../../PresentOrders/ShowModal";

class RowCollapseOrders extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,store:'',sub:[],Keys:'',
            orderInfo:{'header':"اطلاعات سفارش",'sub':{'شماره سفارش ':'IR32513','مبلغ':'132546846','ساعت':"12/30",'نوع پرداخت':'نقدی'}},
            subRow:{
                    store:{'header':"مسئول انبار",'sub':{'نام':'ehsan','نام خانوادگی':'صمیمی'}},
                    userInfo:{'header':"اطلاعات کابر",'sub':{'نام ':'احسان','نام خانوادگی':'صمیمی','شماره موبایل':"09112561701"}},
                    PayInfo:{'header':"اطلاعات پرداخت",'sub':{'درگاه ':'بانک ایران','کد رهگیری':'231354a6sdas',' کارت مبدا':"2006-3532-658-3568",'نوع پرداخت':'نقدی' }},
                    AmountPay:{'header':"تفکیک مبالغ",'sub':{'هزینه بسته':'1258791256','هزینه ارسال':'887925' }},
                    ReceiverInfo:{'header':"اطلاعات گیرنده",'sub':{'نام و نام خانوادگی ':'احسان صمیمی','شماره موبایل':'231354a6sdas','آدرس نقشه':"ساری میدان امام ",'متن آدرس':'ساری میدان امام ' }},
                    TimeProcess:{'header':"زمان مراحل قبل",'sub':{'زمان انجام پرداخت':'20:05','زمان ثبت شده':'21:18','جمع آوری در انبار':"21:45",' تایید پیک':"22",'رسیدن پیک':"22:30",'تحویل گیرنده':"22:45"}},
                    DurationProcess:{'header':"مدت زمان هر بخش",'sub':{'زمان انجام پرداخت':'70','زمان ثبت شده':'5','جمع آوری در انبار':"30",' تایید پیک':"15",'رسیدن پیک':'20','تحویل گیرنده':'15'}},
                }
            }
    }

    componentDidMount() {
        let {orderInfo} = this.state;
        let {sub} = orderInfo;
        let Keys;
        Keys=Object.keys(sub);
        this.setState({
           sub,Keys
        });

    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        let{subRow,orderInfo}=this.state;
        let{sub,Keys}=this.state;
        // console.log(Keys);
        {/*<h3>{orderInfo.header}:</h3>*/}
        return (
            <div className='mt-3 w-100' dir='rtl' >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100' onClick={this.toggle}>

                                    <div className='d-flex justify-content-start align-items-center '  >
                                        {
                                            this.state.collapse?
                                                <h3 className='simple-icon-minus icon-glyph  mb0 mt-2'/>
                                                :
                                                <h3 className='simple-icon-plus icon-glyph  mb0 mt-2'/>

                                        }
                                        <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                            {Keys ?
                                                Keys.map((todo, index) =>
                                                    <RowShowShow label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-4'}/>
                                                ) : ''
                                            }
                                        </div>
                                    </div>




                        </div>

                        <Collapse isOpen={this.state.collapse}>
                            <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                <div dir='rtl' className='w-100'>
                                    {/*<Card className='OrderList p-3'>*/}
                                        <div className=' justify-content-start flex-column '>

                                            <CollapseRow store={subRow.userInfo}/>

                                            <CollapseRow store={subRow.PayInfo}/>

                                            <CollapseRow store={subRow.AmountPay}/>

                                            <CollapseRow store={subRow.store}/>

                                            <CollapseRow store={subRow.ReceiverInfo}/>

                                            <CollapseRow store={subRow.TimeProcess}/>

                                            <CollapseRow store={subRow.DurationProcess}/>


                                            <div className='mt-2'>

                                                <div className='d-flex  justify-content-between '>
                                                    <ShowModal/>
                                                </div>
                                            </div>
                                        </div>
                                    {/*</Card>*/}

                                </div>
                            </div>
                        </Collapse>
                    </CardBody>

                </Card>
            </div>
        );
    }
}

export default RowCollapseOrders;
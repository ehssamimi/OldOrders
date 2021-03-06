import React, {Component} from 'react';
import { Card} from "reactstrap";
import CollapseRow from "../../Common/CollapseRow";
import ShowModal from "../../ShowModal";
import * as Const from './../../Const/Const'

class LeftChichiWaitingCustomer extends Component {
    constructor(props) {
        super(props);
        this.state={
            store:{'header':"مسئول انبار",'sub':{'نام':'ehsan','نام خانوادگی':'صمیمی'}},
            orderInfo:{'header':"اطلاعات سفارش",'sub':{'شماره سفارش ':'IR32513','مبلغ':'132546846','ساعت':"12/30",'نوع پرداخت':'نقدی'}},
            userInfo:{'header':"اطلاعات کابر",'sub':{'نام ':'احسان','نام خانوادگی':'صمیمی','شماره موبایل':"09112561701"}},
            PayInfo:{'header':"اطلاعات پرداخت",'sub':{'درگاه ':'بانک ایران','کد رهگیری':'231354a6sdas','کارت مبدا':"2006-3532-658-3568",'نوع پرداخت':'نقدی' }},
            AmountPay:{'header':"تفکیک مبالغ",'sub':{'هزینه بسته':'1258791256','هزینه ارسال':'887925' }},
            ReceiverInfo:{'header':"اطلاعات گیرنده",'sub':{'نام و نام خانوادگی ':'احسان صمیمی','شماره موبایل':'231354a6sdas','آدرس نقشه':"ساری میدان امام ",'متن آدرس':'ساری میدان امام ' }},
            TimeProcess:{'header':"زمان مراحل قبل",'sub':{'زمان انجام پرداخت':'20:05','زمان ثبت شده':'21:18','جمع آوری در انبار':"21:45",' تایید پیک':"22",'رسیدن پیک':"22:30"}},
            DurationProcess:{'header':"مدت زمان هر بخش",'sub':{'زمان انجام پرداخت':'70','زمان ثبت شده':'5','جمع آوری در انبار':"30",' تایید پیک':"15",'رسیدن پیک':"30"}},
            ChichiManPosition:{'header':"موقعیت مکانی لحظه ای پیک",'sub':{'ادرس':'ساری میدان ساعت'}},
            // Data:''
        }
    }
    // componentDidMount(){
    //     this.setState({
    //         Data:Const.Data
    //     })
    // }

    render() {
        let{orderInfo,userInfo,PayInfo,AmountPay,ReceiverInfo,TimeProcess,DurationProcess,store,ChichiManPosition}=this.state;
        return (
            <div dir='rtl'>
                <Card className='OrderList p-3'>
                    <div className=' justify-content-start flex-column '>
                        <CollapseRow store={orderInfo}/>
                        <br/>
                        <CollapseRow store={userInfo}/>
                        <br/>
                        <CollapseRow store={PayInfo}/>
                        <br/>
                        <CollapseRow store={AmountPay}/>
                        <br/>
                        <CollapseRow store={store}/>
                        <br/>
                        <CollapseRow store={ReceiverInfo}/>
                        <br/>
                        <CollapseRow store={TimeProcess}/>
                        <br/>
                        <CollapseRow store={DurationProcess}/>
                        <br/>
                        <CollapseRow store={ChichiManPosition}/>
                        <br/>
                        <div className='mt-2'>
                            <div className='d-flex  justify-content-between '>
                                <ShowModal/>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        );
    }
}

export default LeftChichiWaitingCustomer;
import React, {Component} from 'react';
import {formatNumber} from "../../../functions/Functions";
import ShowModal from "../../../ShowModal";
import { Card} from "reactstrap";
import CollapseRow from "../../../Common/CollapseRow";
// AmountPay:{'header':"تفکیک مبالغ",'sub':{'هزینه بسته':formatNumber(132546846),'هزینه ارسال':formatNumber(132546846) }},

class LeftMainCollective extends Component {
    constructor(props) {
        super(props);
        this.state={
            store:{'header':"مسئول انبار",'sub':{'نام':'ehsan','نام خانوادگی':'صمیمی'}},
            orderInfo:{'header':"اطلاعات سفارش",'sub':{'شماره سفارش ':'IR32513','مبلغ':'132546846','ساعت':"12/30",'نوع پرداخت':'نقدی'}},
            userInfo:{'header':"اطلاعات کابر",'sub':{'نام ':'احسان','نام خانوادگی':'صمیمی','شماره موبایل':"09112561701"}},
            PayInfo:{'header':"اطلاعات پرداخت",'sub':{'درگاه ':'بانک ایران','کد رهگیری':'231354a6sdas','کارت مبدا':"2006-3532-658-3568",'نوع پرداخت':'نقدی' }},
            AmountPay:{'header':"تفکیک مبالغ",'sub':{'هزینه بسته':formatNumber(132546846),'هزینه ارسال':formatNumber(132546846) }},
            ReceiverInfo:{'header':"اطلاعات گیرنده",'sub':{'نام و نام خانوادگی ':'احسان صمیمی','شماره موبایل':'231354a6sdas','آدرس نقشه':"ساری میدان امام ",'متن آدرس':'ساری میدان امام ' }},
            TimeProcess:{'header':"زمان مراحل قبل",'sub':{'زمان انجام پرداخت':'20:05','زمان ثبت شده':'21:18'}},
            DurationProcess:{'header':"مدت زمان هر بخش",'sub':{'زمان انجام پرداخت':'70','زمان ثبت شده':'5'}},
        }
    }

    render() {
        let{orderInfo,userInfo,PayInfo,AmountPay,ReceiverInfo,TimeProcess,DurationProcess,store}=this.state;
        return (
            <div dir='rtl'>
                <div className='OrderList p-3'>
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
                        <div className='mt-2'>
                            {/*<div className='d-flex justify-content-start'>*/}
                                {/*<h3>-اطلاعات سفارش :</h3>*/}
                            {/*</div>*/}
                            <div className='d-flex  justify-content-between '>
                                <ShowModal/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LeftMainCollective;
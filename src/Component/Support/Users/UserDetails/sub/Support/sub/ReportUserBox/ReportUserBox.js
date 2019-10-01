import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";
import RowShowShowColEdit from "../../../RowShowShowColEdit/RowShowShowColEdit";
import RowShowShowEditWithoutLabel from "../../../RowShowShowColEdit/RowShowShowEditWithoutLabel";

class ReportUserBox extends Component {
    render() {
        return (
            <div dir='rtl' className='mt-2'>
                <Card>
                        <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                            <RowShowShowColEdit col='col-4' label='عنوان مشکل' value='مشکل لاگین'/>
                            <RowShowShowColEdit col='col-4' label='تاریخ' value='25/8/98'/>
                            <RowShowShowColEdit col='col-4' label='شماره موبایل' value='21:30'/>
                        </div>
                        <div className='clearfix'></div>

                        <div className='d-flex col-12 mt-2'>

                            <span className='collapseValue gray spanWithOutBreak'>{'متن پیام'} <span
                                className='pl-2'>:</span></span>
                            <p className="DRTl  d-flex ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                                متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                                طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
                            </p>
                        </div>
                </Card>
            </div>
        );
    }
}

export default ReportUserBox;
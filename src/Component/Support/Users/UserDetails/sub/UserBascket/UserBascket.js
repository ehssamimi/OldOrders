import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";
import RowShowShowColEdit from "../RowShowShowColEdit/RowShowShowColEdit";
import {formatNumber} from "../../../../../functions/Functions";
import SelectComponentCategories from "../HistoryUserOrders/SingelSelectRow/SelectComponentCategories";
import ax from "../../../../../../assets/img/thumb-2.jpg";
import RowEachProduct from "./sub/RowEachProduct";

// let{id,ax,name,number,per,all}=this.props;

class UserBascket extends Component {
    render() {
        return (
            <div className='mt-3 w-100' dir='rtl' >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100' >
                            <div className='d-flex justify-content-start align-items-center '  >

                                <div className={['d-flex','collapseSpanHeight','align-items-end','mt-2' ].join(' ')} dir='rtl'>
                                    {/*<span className='collapseValue gray'>{label} <span className='pl-2'>:</span></span>*/}
                                    <h3 className=' collapseValue mb-1'>سبد خرید </h3>
                                </div>
                                <div className='col-10 mr-5 d-flex justify-content-end'>
                                    <RowShowShowColEdit  col='col-6' label='قیمت کل ' value={formatNumber(500000000000)}/>
                                    <RowShowShowColEdit col='col-6' label='تخفیف کل ' value={formatNumber(100000)}/>
                                </div>
                            </div>
                        </div>

                        {/*<Collapse isOpen={this.state.collapse}>*/}
                        <div className='d-flex  w-100  mt-3' style={{'flex-wrap': 'wrap'}}>
                            <div dir='rtl' className='w-100'>
                                {/*<Card className='OrderList p-3'>*/}
                                {/*<div className=' justify-content-start flex-column '>*/}

                                    {/**/}

                                {/*</div>*/}
                                <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                                <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                                <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                                <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                                {/*</Card>*/}

                            </div>
                        </div>
                        {/*</Collapse>*/}
                    </CardBody>

                </Card>
            </div>

        );
    }
}

export default UserBascket;
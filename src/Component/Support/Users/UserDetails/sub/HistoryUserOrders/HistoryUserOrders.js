import React, {Component} from 'react';
import {Card, CardBody, FormGroup, Label} from "reactstrap";
import RowShowShowColEdit from "../RowShowShowColEdit/RowShowShowColEdit";
import {formatNumber}  from './../../../../../functions/Functions'
import IntlMessages from "../../../../../../helpers/IntlMessages";
import {FormikReactSelect} from "../../../../../../containers/form-validations/FormikFields";
import CustomSelectInput from "../../../../../../components/common/CustomSelectInput";

import Select from "react-select";
import SingelSelectedEdit from "../../../../../OldOrders/SelectTime/Headers/sub/SingelSelectedEdit";
import SelectComponentCategories from "./SingelSelectRow/SelectComponentCategories";
import RowCollapseOrders from "../../../../../OldOrders/YesterDay/sub/RowCollapseOrders/RowCollapseOrders";
import CollapseRowOrdersHistory from "./CollapseRowOrdersHistory/CollapseRowOrdersHistory";
const selectData = [
    { label: "رخداد", value: "event" },
    { label: "پیام", value: "message" },
];



class HistoryUserOrders extends Component {
    changeMode(value){
        console.log(value);
        // console.log(Label);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedOption: ""
    //     };
    // }
    //
    // handleChange = selectedOption => {
    //     this.setState({ selectedOption }
    //     );
    // };
    render() {
        return (
            <div className='mt-3 w-100' dir='rtl' >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100' >
                            <div className='d-flex justify-content-start align-items-center '  >
                                {/*{*/}
                                {/*this.state.collapse?*/}
                                {/*<h3 className='simple-icon-minus icon-glyph  mb0 mt-2'/>*/}
                                {/*:*/}
                                {/*<h3 className='simple-icon-plus icon-glyph  mb0 mt-2'/>*/}

                                {/*}*/}
                                {/*<div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}} >*/}
                                {/*<RowShowShowColEdit col='col-4' label='شماره موبایل' value='09112561701' />*/}
                                {/*</div>*/}
                                {/*<span className='fS1vw'>کیف پول</span>*/}
                                <div className={['d-flex','collapseSpanHeight','align-items-end','mt-2' ].join(' ')} dir='rtl'>
                                    {/*<span className='collapseValue gray'>{label} <span className='pl-2'>:</span></span>*/}
                                    <h3 className=' collapseValue mb-1'>تاریخچه سفارش ها </h3>
                                </div>
                                <div className='col-10 mr-5 d-flex justify-content-end'>
                                    <RowShowShowColEdit className='justify-content-end' col='col-4' label='مجموع مبالغ سفارش ها' value={formatNumber(500000000000)}/>
                                    <RowShowShowColEdit className='justify-content-end' col='col-4' label='تعداد سفارش ها ' value='20'/>
                                    <div className="col-4 d-flex align-items-end">
                                        <span className='collapseValue gray d-flex col-4 paddingZero'>{'مرتب سازی'} <span className='pl-2'>:</span></span>
                                        <SelectComponentCategories changeMode={this.changeMode}/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*<Collapse isOpen={this.state.collapse}>*/}
                        <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                            <div dir='rtl' className='w-100'>
                                {/*<Card className='OrderList p-3'>*/}
                                {/*<RowCollapseOrders/>*/}
                                <CollapseRowOrdersHistory/>
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

export default HistoryUserOrders;
import React, {Component} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import RowShowShowColEdit from "../RowShowShowColEdit/RowShowShowColEdit";
import {formatNumber} from "../../../../../functions/Functions";
import SelectComponentCategories from "../HistoryUserOrders/SingelSelectRow/SelectComponentCategories";
import ReportUserBox from "./sub/ReportUserBox/ReportUserBox";
import UserVoiceRecord from "./sub/UserVoiceRecord/UserVoiceRecord";


class SupportUserMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapse: false,
            collapse2: false,
        };
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    toggle2() {
        this.setState(state => ({ collapse2: !state.collapse2 }));
    }
    render() {
        return (
            <div className='mt-3 w-100' dir='rtl' >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100' >
                            <div className='d-flex justify-content-start align-items-center '  >
                                <div className={['d-flex','collapseSpanHeight','align-items-end','mt-2' ].join(' ')} dir='rtl'>
                                    <h3 className=' collapseValue mb-1'>پشتیبانی</h3>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 w-100' onClick={this.toggle}>
                            <div className='d-flex justify-content-start align-items-center '  >
                                {
                                    this.state.collapse?
                                        <h3 className='simple-icon-minus icon-glyph  mb0 ml-1 '/>
                                        :
                                        <h3 className='simple-icon-plus icon-glyph  mb0  ml-1'/>

                                }

                                <h3 className='mb0 '>گزارش مشکل</h3>

                            </div>
                        </div>
                        <Collapse isOpen={this.state.collapse}>
                                <div dir='rtl' className='w-100'>
                                    <ReportUserBox/>
                                    <ReportUserBox/>
                                </div>
                        </Collapse>
                        <div className='mt-4 w-100' onClick={this.toggle2}>
                            <div className='d-flex justify-content-start align-items-center '  >
                                {
                                    this.state.collapse2?
                                        <h3 className='simple-icon-minus icon-glyph  mb0 ml-1 '/>
                                        :
                                        <h3 className='simple-icon-plus icon-glyph  mb0  ml-1'/>

                                }

                                <h3 className='mb0 '>تماس های ضبط شده</h3>

                            </div>
                        </div>
                        <Collapse isOpen={this.state.collapse2}>
                            <div dir='rtl' className='w-100'>
                              <UserVoiceRecord/>
                            </div>
                        </Collapse>
                    </CardBody>

                </Card>
            </div>


        );
    }
}

export default SupportUserMain;
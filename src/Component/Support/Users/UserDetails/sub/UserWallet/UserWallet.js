import React, {Component} from 'react';
import {Card, CardBody,Collapse} from "reactstrap";
import RowShowShowColEdit from "../RowShowShowColEdit/RowShowShowColEdit";
import {formatNumber} from './../../../../../functions/Functions'

class UserWallet extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
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
                                    <h3 className=' collapseValue mb-1'>کیف پول</h3>
                                </div>
                                <div className='col-10  d-flex'>
                                    <RowShowShowColEdit className='justify-content-end' col='col-6' label='میزان اعتبار' value={formatNumber(5000000000)}/>
                                    <RowShowShowColEdit className='justify-content-end'  col='col-6' label='میزان تکمیل اطلاعات' value='60 درصد'/>
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

                                <h3 className='mb0 '>شماره دوستان دعوت شده</h3>

                            </div>
                        </div>
                        <Collapse isOpen={this.state.collapse}>
                        <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                            <div dir='rtl' className='w-100'>
                                {/*<Card className='OrderList p-3'>*/}
                                <div className=' justify-content-start flex-column '>

                                    <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
                                        <RowShowShowColEdit col='col-3' label='شماره موبایل' value='09112561701'/>
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

export default UserWallet;
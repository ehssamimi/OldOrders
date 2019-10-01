import React, {Component} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import RowShowShow from "../../../../../PresentOrders/RowShowShow";
import CollapseRow from "../../../../../PresentOrders/Common/CollapseRow";
import ShowModal from "../../../../../PresentOrders/ShowModal";
import RowShowShowColEdit from "../RowShowShowColEdit/RowShowShowColEdit";

class BasicUserInfo extends Component {
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
                                <h2>اطلاعات اولیه</h2>

                            </div>
                        </div>
                        {/*<Collapse isOpen={this.state.collapse}>*/}
                            <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                <div dir='rtl' className='w-100'>
                                    {/*<Card className='OrderList p-3'>*/}
                                    <div className=' justify-content-start flex-column '>

                                        <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                            <RowShowShowColEdit col='col-4' label='شماره موبایل' value='09112561701'/>

                                            <RowShowShowColEdit col='col-4' label='نام' value='احسان'/>

                                            <RowShowShowColEdit col='col-4' label='نام خانوادگی' value='صمیمی راد'/>

                                            <RowShowShowColEdit col='col-4' label='جنسیت' value='مرد'/>

                                            <RowShowShowColEdit col='col-4' label='تاریخ تولد' value='1367/3/11'/>

                                            <RowShowShowColEdit col='col-4' label='ایمیل' value='ehssamimi@yahoo.com'/>
                                        </div>

                                    </div>
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

export default BasicUserInfo;
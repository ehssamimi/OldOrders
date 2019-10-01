import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";
import RowShowShowColEdit from "../../RowShowShowColEdit/RowShowShowColEdit";
import RowShowShowEditWithoutLabel from "../../RowShowShowColEdit/RowShowShowEditWithoutLabel";



class RowEachProduct extends Component {
    render() {
        // {id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'}
        let{id,ax,name,number,per,all}=this.props;
        return (

            <div className='col-12 d-flex paddingZero'>
                <div className="mb-3  card w-100 paddingZero">
                    <div className="d-flex flex-grow-1 min-width-zero ">
                        <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                            <div className='col-7 d-flex' style={{'flex-wrap': 'wrap'}}>
                                <RowShowShowEditWithoutLabel className='justify-content-center' col='col-3' value='1'/>

                                <p className="mb-0 text-primary col-3 w-xs-100 mt-2 mb-2 "><div className='axList d-flex  '>
                                    <img src={ax} className='w-100 h-100 br50   ' />
                                </div></p>
                                <RowShowShowEditWithoutLabel col='col-3' value='شیر یک لیتری میهن'/>
                                <RowShowShowColEdit col='col-3' label='تعداد' value='22'/>
                            </div>
                            <div className='col-5 d-flex' style={{'flex-wrap': 'wrap'}}>
                                <RowShowShowColEdit col='col-6' label='قیمت واحد' value='20000'/>
                                <RowShowShowColEdit col='col-6' label='تخفیف واحد' value='1000'/>
                                <RowShowShowColEdit col='col-6' label='قیمت کل' value='50000000'/>
                                <RowShowShowColEdit col='col-6' label='تخفیف کل ' value='50000'/>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        );
    }
}

export default RowEachProduct;
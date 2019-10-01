import React, {Component} from 'react';
import RowShowShowColEdit from "../../RowShowShowColEdit/RowShowShowColEdit";
import {Card, CardBody} from "reactstrap";

class AddressInfo extends Component {
    render() {
        return (
            <Card  className='mt-3'>
                <CardBody>

                <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                    <RowShowShowColEdit col='col-4' label='عنوان آدرس' value='خونه'/>

                    <RowShowShowColEdit col='col-4' label='نام' value=' احسان صمیمی راد'/>

                    <RowShowShowColEdit col='col-4' label='موبایل گیرنده' value='099112561701'/>

                    <RowShowShowColEdit col='col-12' label='آدرس' value='ساری ، میدان امام ، کوی پاسدار، کوچه سوم ، پلاک 116'/>

                    <RowShowShowColEdit col='col-12' label='آدرس از نقشه' value='ساری ، میدان امام ، کوی پاسدار، کوچه سوم ، پلاک 116'/>

                </div>
                </CardBody>
            </Card>
        );
    }
}

export default AddressInfo;
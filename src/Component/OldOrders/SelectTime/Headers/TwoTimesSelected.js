import React, {Component} from 'react';
import PersianClassCalender from "./sub/PersianClassCalender";
import {
    FormGroup,
    Label,
} from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";


class TwoTimesSelected extends Component {
    GetData(Data){
        // console.log(Data)
        if (Data!==null){
            let date=`${Data.year}/${Data.month}/${Data.day}`;
            console.log(date);
            this.setState({
                Date: date
            });

        }
        // console.log(date)
    }

    render() {
        return (
            <div className='d-flex'>
                <div className="col-sm-6 rowInput">
                    <FormGroup className=" has-float-label position-relative">
                        <Label>
                            <IntlMessages id="تا تاریخ" />
                        </Label>
                        <div >
                            <PersianClassCalender GetData={this.GetData.bind(this)}/>
                        </div>
                    </FormGroup>
                </div>
                <div className="col-sm-6 rowInput">
                    <FormGroup className=" has-float-label position-relative">
                        <Label>
                            <IntlMessages id="از تاریخ " />
                        </Label>
                        <div >
                            <PersianClassCalender GetData={this.GetData.bind(this)}/>
                        </div>
                    </FormGroup>
                </div>


            </div>
        );
    }
}

export default TwoTimesSelected;
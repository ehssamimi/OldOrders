import React, {Component} from 'react';
import LeftDeliverd from "../../../PresentOrders/Deliverded/Sub/LeftDeliverd";
import RowCollapseOrders from "./RowCollapseOrders/RowCollapseOrders";
import RowEachDayCollapse from "./RowEachDayCollapse";

class YesterDayAccept extends Component {
    render() {
        return (
                <div className='col-12 '>
                    {/*<LeftDeliverd/>*/}
                    {/*<RowCollapseOrders/>*/}
                    <RowEachDayCollapse Day='شنبه 30/6/98'/>


                </div>
        );
    }
}

export default YesterDayAccept;
import React, {Component} from 'react';
import OrderList from "../../../PresentOrders/SuccessPaid/OrderList";
import RowCollapseOrders from "./RowCollapseOrders/RowCollapseOrders";
import RowEachDayCollapse from "./RowEachDayCollapse";

class YesterDayFailed extends Component {
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

export default YesterDayFailed;
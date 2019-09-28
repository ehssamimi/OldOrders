import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import OrderList from "../SuccessPaid/OrderList";

class SabtOrders extends Component {
    render() {
        return (
            <div className='rightMenuList'>
                <LeftNav/>
                <div className='col-10 paddingZero'>
                    <OrderList recipe={false} Kind='collect'/>
                </div>
            </div>
        );
    }
}

export default SabtOrders;
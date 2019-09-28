import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import OrderList from "./OrderList";

class SuccessPaid extends Component {
    render() {
        return (
            //<div style={{marginTop:'120px'}}>
            <div className='rightMenuList paddingZero'>
                <LeftNav/>
                <div className='col-10 paddingZero'>
                    <OrderList recipe={false} Kind='insert'/>
                </div>
            </div>
        );
    }
}

export default SuccessPaid;
import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import LeftChichiWaitingCustomer from "./sub/LeftChichiWaitingCustomer";

class ChichiWaitingCustomer extends Component {
    render() {
        return (
            <div className='rightMenuList paddingZero'>
                <LeftNav/>
                <div className='col-10 paddingZero'>
                    <LeftChichiWaitingCustomer/>
                </div>
            </div>
        );
    }
}

export default ChichiWaitingCustomer;
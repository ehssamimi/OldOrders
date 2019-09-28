import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import LeftDeliverd from "./Sub/LeftDeliverd";

class Deliverd extends Component {
    render() {
        return (
            <div className='rightMenuList paddingZero'>
                <LeftNav/>
                <div className='col-10 paddingZero'>
                    <LeftDeliverd/>
                </div>
            </div>
        );
    }
}

export default Deliverd;
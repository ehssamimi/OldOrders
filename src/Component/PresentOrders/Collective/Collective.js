import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import OrderList from "../SuccessPaid/OrderList";
import MainDeliveried from "./MainDeliveried";
import MainCollective from "./Sub/MainCollective";

class Collective extends Component {
    render() {
        return (


        <div className='rightMenuList paddingZero'>
            <LeftNav/>
            <div className='col-10 paddingZero'>
                <MainCollective/>
            </div>

            {/*<div className='rightMenuList'>*/}
            {/*<LeftNav/>*/}
            {/*<div className='col-9'>*/}
            {/*/!*<MainDeliveried/>*!/*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>
        );
    }
}

export default Collective;
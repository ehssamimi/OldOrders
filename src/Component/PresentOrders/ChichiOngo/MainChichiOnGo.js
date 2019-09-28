import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import LeftMenuWaitingAccept from "../WaitingAcceptChichi/sub/LeftMenuWaitingAccept";

class MainChichiOnGo extends Component {
    render() {
        return (
            <div className='rightMenuList paddingZero'>
                <LeftNav/>
                <div className='col-10 paddingZero'>
                    <LeftMenuWaitingAccept/>
                </div>


            </div>
        );
    }
}

export default MainChichiOnGo;
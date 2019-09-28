import React, {Component} from 'react';
import { Card} from "reactstrap";
import LeftMenuWaitingAccept from "./sub/LeftMenuWaitingAccept";
import LeftNav from "../leftNav/LeftNav";

class MainWaitingAccept extends Component {
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

export default MainWaitingAccept;
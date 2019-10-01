import React, {Component} from 'react';
import BasicUserInfo from "./sub/BasicUserInfo/BasicUserInfo";
import Addresses from "./sub/Addresses/Addresses";
import UserWallet from "./sub/UserWallet/UserWallet";
import HistoryUserOrders from "./sub/HistoryUserOrders/HistoryUserOrders";
import UserBascket from "./sub/UserBascket/UserBascket";
import SupportUsers from "../SupportUsers";
import SupportUserMain from "./sub/Support/SupportUserMain";

class UserDetailsInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }

    }

    componentDidMount(){
        const { match: { params } } = this.props;
        this.setState({
            id:params.userId
        })
    }
    render() {
        return (
            <div>
                {/*<h2>ehsan samimi{this.state.id}</h2>*/}
                <BasicUserInfo/>
                <Addresses/>
                <UserBascket/>
                <UserWallet/>
                <SupportUserMain/>
                <HistoryUserOrders/>

            </div>
        );
    }
}

export default UserDetailsInfo;
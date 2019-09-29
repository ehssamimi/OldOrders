import React, {Component} from 'react';
import TopHeaderYesterDay from "./TopHeaderyesterday/TopHeaderYesterDay";
import YesterDayAccept from "./sub/YesterDayAccept";
import OrderList from "../../PresentOrders/SuccessPaid/OrderList";
import YesterDayFailed from "./sub/YesterDayFailed";

class YesterDay extends Component {
    constructor(props) {
        super(props);
        this.state={
            tab:1
        }
    }
    changeField(tab){
        this.setState({
            tab
        })
    }

    render() {
        return (
            <div>
                <TopHeaderYesterDay changeField={this.changeField.bind(this)}/>
                {
                    this.state.tab===1?<YesterDayAccept/>:<YesterDayFailed/>

                }
            </div>
        );
    }
}

export default YesterDay;
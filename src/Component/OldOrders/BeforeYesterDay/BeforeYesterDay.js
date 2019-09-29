import React, {Component} from 'react';
import TopHeaderYesterDay from "../YesterDay/TopHeaderyesterday/TopHeaderYesterDay";
import YesterDayAccept from "../YesterDay/sub/YesterDayAccept";
import YesterDayFailed from "../YesterDay/sub/YesterDayFailed";
import BeforeYesterDayAccept from "./Sub/BeforeYesterDayAccept";
import BeforeYesterDayFailed from "./Sub/BeforeYesterDayFailed";

class BeforeYesterDay extends Component {
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
                    this.state.tab===1?<BeforeYesterDayAccept/>:<BeforeYesterDayFailed/>

                }
            </div>
        );
    }
}

export default BeforeYesterDay;
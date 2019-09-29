import React, {Component} from 'react';
import TopHeaderYesterDay from "../YesterDay/TopHeaderyesterday/TopHeaderYesterDay";
import CurrentWeekAccept from "./Sub/CurrentWeekAccept";
// import CurrentWeekFailed from "./Sub/CurrentWeekFailed";

class CurrentWeek extends Component {
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

                {/*<TopHeaders4Tabs changeField={this.changeField.bind(this)}/>*/}
                {
                    // this.state.tab===1?<CurrentWeekAccept/>:<CurrentWeekFailed/>
                    <CurrentWeekAccept/>
                }
            </div>
        );
    }
}

export default CurrentWeek;
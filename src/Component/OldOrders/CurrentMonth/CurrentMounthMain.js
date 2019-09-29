import React, {Component} from 'react';
import CurrentWeekAccept from "../CurrentWeek/Sub/CurrentWeekAccept";
import CurrentWeekFailed from "../CurrentWeek/Sub/CurrentWeekFailed";
import TopHeaders4Tabs from "../CurrentWeek/TopHeader4Tabs/TopHeaders4Tabs";

class CurrentMounthMain extends Component {
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

                <TopHeaders4Tabs changeField={this.changeField.bind(this)}/>
                {
                    this.state.tab===1?<CurrentWeekAccept/>:<CurrentWeekFailed/>
                }
            </div>
        );
    }
}

export default CurrentMounthMain;
import React, {Component} from 'react';
import TopHeaders4Tabs from "../CurrentWeek/TopHeader4Tabs/TopHeaders4Tabs";
import CurrentWeekAccept from "../CurrentWeek/Sub/CurrentWeekAccept";
import CurrentWeekFailed from "../CurrentWeek/Sub/CurrentWeekFailed";

class PastMonthMain extends Component {
    render() {
        return (
            <div>

                <TopHeaders4Tabs />
                {
                    <CurrentWeekFailed/>
                }
            </div>
        );
    }
}

export default PastMonthMain;
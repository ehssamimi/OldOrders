import React, {Component} from 'react';
import RowEachDayCollapse from "../../YesterDay/sub/RowEachDayCollapse";

class CurrentWeekFailed extends Component {
    render() {
        return (
            <div className='col-12 '>
                {/*<LeftDeliverd/>*/}
                {/*<RowCollapseOrders/>*/}
                <RowEachDayCollapse Day='جمعه 29/6/98'/>
                <RowEachDayCollapse Day='شنبه 30/6/98'/>
                <RowEachDayCollapse Day='یکشنبه 31/6/98'/>
                <RowEachDayCollapse Day='دوشنبه 01/7/98'/>
                <RowEachDayCollapse Day='سه شنبه 02/7/98'/>
                <RowEachDayCollapse Day='چهارشنبه 03/7/98'/>
                <RowEachDayCollapse Day='پنج شنبه 04/7/98'/>
            </div>
        );
    }
}

export default CurrentWeekFailed;
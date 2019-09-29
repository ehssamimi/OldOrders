import React, {Component} from 'react';
import RowEachDayCollapse from "../../YesterDay/sub/RowEachDayCollapse";

class BeforeYesterDayAccept extends Component {
    render() {
        return (
            <div className='col-12 '>
                {/*<LeftDeliverd/>*/}
                {/*<RowCollapseOrders/>*/}
                <RowEachDayCollapse Day='جمعه 29/6/98'/>


            </div>
        );
    }
}

export default BeforeYesterDayAccept;
import React, {Component} from 'react';
import TwoTimesSelected from "./Headers/TwoTimesSelected";
import OneTimeSelection from "./Headers/OneTimeSelection";
import ThreeTabsTime from "./Headers/ThreeTabsTime";

class SelectTimeOrderMain extends Component {
    render() {
        return (
            <div>
                <TwoTimesSelected/>
                <OneTimeSelection/>
                <ThreeTabsTime/>
            </div>
        );
    }
}

export default SelectTimeOrderMain;
import React, {Component} from 'react';
import ChichiListeningRow from "./ChichiChichiListeningRow/ChichiListeningRow";

class ChichiListeningMain extends Component {
    render() {
        return (
            <div className=' w-100'>

                    <ChichiListeningRow/>

                <ChichiListeningRow/>
                <ChichiListeningRow/>
                <ChichiListeningRow/>
            </div>
        );
    }
}

export default ChichiListeningMain;
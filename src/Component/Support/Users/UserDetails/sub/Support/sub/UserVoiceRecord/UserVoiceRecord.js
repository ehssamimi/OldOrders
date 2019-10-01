import React, {Component} from 'react';
import GradientCard from "../../../../../../../../components/cards/GradientCard";
import GradientWithRadialProgressCard from "../../../../../../../../components/cards/GradientWithRadialProgressCard";
import GradiantVoiceCard from "./GradiantVoiceCard/GradiantVoiceCard";

class UserVoiceRecord extends Component {
    render() {
        return (
            <div className='col-12 d-flex'>
                {/*<GradientCard/>*/}
                {/*<GradientWithRadialProgressCard/>*/}
                <div className='col-4'>
                    <GradiantVoiceCard/>
                </div>
                <div className='col-4'>
                    <GradiantVoiceCard/>
                </div>
                <div className='col-4'>
                    <GradiantVoiceCard/>
                </div>
            </div>
        );
    }
}

export default UserVoiceRecord;
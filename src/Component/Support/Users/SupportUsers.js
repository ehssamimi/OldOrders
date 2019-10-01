import React, {Component} from 'react';
import UserInfoCard from "./UserInfoCard/UserInfoCard";

class SupportUsers extends Component {
    render() {
        return (
            <div className='d-flex w-100'>
                <div className='col-4'>
                    <UserInfoCard id={1}/>
                </div>
                <div className='col-4'>
                    <UserInfoCard id={2}/>
                </div>
                <div className='col-4'>
                    <UserInfoCard id={3}/>
                </div>
            </div>
        );
    }
}

export default SupportUsers;
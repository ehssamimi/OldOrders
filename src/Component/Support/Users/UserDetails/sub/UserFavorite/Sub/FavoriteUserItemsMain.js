import React, {Component} from 'react';
import FavoriteUserCard from "./FavoriteUserCard";

class FavoriteUserItemsMain extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='col-3'>
                    <FavoriteUserCard/>
                </div>
                <div className='col-3'>
                    <FavoriteUserCard/>
                </div>
                <div className='col-3'>
                    <FavoriteUserCard/>
                </div>
                <div className='col-3'>
                    <FavoriteUserCard/>
                </div>
            </div>
        );
    }
}

export default FavoriteUserItemsMain;
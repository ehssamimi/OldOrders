import React, {Component} from 'react';
import SliderOnePage from "../ShowPreviewHomePage/SliderOnePage/SliderOnePage";
import {detailImages} from "../../../../data/carouselItems";

class SliderAddHomePage extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='col-6' >
                    <SliderOnePage DetailImages={detailImages}/>
                </div>
                <div className='col-6' >
                    <h3>this is get slider</h3>
                </div>
            </div>
        );
    }
}

export default SliderAddHomePage;
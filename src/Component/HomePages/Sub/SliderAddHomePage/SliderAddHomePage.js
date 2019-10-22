import React, {Component} from 'react';
import SliderOnePage from "../ShowPreviewHomePage/SliderOnePage/SliderOnePage";
import {detailImages} from "../../../../data/carouselItems";
import MultiFiles from "./MultiFile/MultiFiles";
import FormAddSlider from "./FormAddSlider/FormAddSlider";

class SliderAddHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            files:[]
        }
    }
    handelMultiFiles(files){
        console.log(typeof (files));
        this.setState({
            files
        })

    }


    render() {
        const detailImages = [
            {
                id: "large1",
                img: "/assets/img/parkin.jpg"
            },
            {
                id: "large2",
                img: "/assets/img/napoleonshat.jpg"
            },
            {
                id: "large3",
                img: "/assets/img/marble-cake.jpg"
            },
        ];
        console.log( this.state.files);
        return (
            <div className='d-flex'>
                <div className='col-6' >
                    {
                        this.state.files.length>1?<SliderOnePage className='activeSliderPages' DetailImages={this.state.files }/>:<SliderOnePage DetailImages={detailImages }/>
                    }

                </div>
                <div className='col-6' >
                    <FormAddSlider />
                    {/*<div id='dragmulti'>*/}

                    {/*</div>*/}
                    {/*<MultiFiles MultiFile={this.handelMultiFiles.bind(this)}/>*/}
                </div>
            </div>
        );
    }
}

export default SliderAddHomePage;
import React, {Component} from 'react';
import PreviewMainSlider from "../SliderAddHomePage/PreviewSliderMAin/PreviewMainSlider";
import {allHeaderSlider, GetHeaderSliderDetail} from "../../../functions/ServerConnection";
import PreviewHeaderSlider from "./Preview/PreviewHeaderSlider";

class HeaderSliderMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            SlidersPrev:''
        }
    }
    async componentDidMount(){
        let Sliders=  await allHeaderSlider();
        console.log( Sliders);
        this.setState({
            SlidersPrev:Sliders
        })
    }

    async ClickEdit(name) {
        console.log(name)
        let Slider=await GetHeaderSliderDetail(name);
        console.log(Slider);
        let {Items}=Slider;
        console.log(Items);

        let i;let files=[];let Sliders=[];
        // for (i = 0 ; i < Items.length; i++) {
        //     let img = {id: Items[i].Position, img: Items[i].Image};
        //     let images={Position:i,Image:'',Destination:'',DestinationId:''};
        //     Sliders.push(images);
        //     files.push(img);
        // }
        // this.setState({
        //     files, Sliders:Sliders,headerPlaceHolder:Slider.Name,Edit:true
        // }, () => {
        //
        // })

    }


    render() {
        let{SlidersPrev}=this.state;
        return (
            <div className='d-flex '>
                <div className='col-6'>
                    get
                </div>
                <div className='col-6'>
                    {
                        SlidersPrev.length>0?
                            // AllBanners.map((cat ,index)=><PreViewBanner id={CategoriesList[index]._id} key={index} header={cat.Name} ax1={CategoriesList[index].Items[0].Image}   clickPreview={this.ClickEdit.bind(this)}/>  ):""
                            SlidersPrev.map((slider ,index)=><PreviewHeaderSlider id={slider._id} key={index} header={slider.Name}
                                                                                slider={slider} clickEdit={this.ClickEdit.bind(this)}/>  ):""
                        // AllBanners.map((cat ,index)=><PreViewBanner id={index} key={index}  ax1={ax}   clickPreview={this.ClickEdit.bind(this)} />  ):""
                    }
                </div>
            </div>
        );
    }
}

export default HeaderSliderMain;
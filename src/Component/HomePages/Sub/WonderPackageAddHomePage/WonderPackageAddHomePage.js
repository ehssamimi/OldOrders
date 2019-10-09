import React, {Component} from 'react';
import WonderPackageHomePage from "../ShowPreviewHomePage/WonderPackageHomePage/WonderPackageHomePage";
import ax from "../../../../assets/img/4th.jpg";
import CropImgCropper from "../CropImg/CropImgCropper";
import CategoriesHomePage from "../ShowPreviewHomePage/Categories/CategoriesHomePage";

class WonderPackageAddHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            ax1:'',
            ax2:'',
            ax3:'',
            ax4:'',
            ax5:'',
            ax1File:'',
            ax2File:'',
            ax3File:'',
            ax4File:'',
            ax5File:'',
            type:'1'
        }
    }
    GetImgType(type){
        // console.log(type)
        this.setState({
            type
        })
    }

    GetImgFile(file,Base64 , label){
        // console.log(file);
        // console.log(Base64);
        console.log(label);
        switch(label) {
            case 'عکس اول':
                this.setState({
                    ax1:Base64, ax1File:file
                });
                break;
            case 'عکس دوم':
                this.setState({
                    ax2:Base64, ax2File:file
                });
                break;
            case 'عکس سوم':
                this.setState({
                    ax3:Base64, ax3File:file
                });
                break;
            case 'عکس چهارم':
                this.setState({
                    ax4:Base64, ax4File:file
                });
                break;
            case 'عکس پنجم':
                this.setState({
                    ax5:Base64, ax5File:file
                });
                // code block
                break;
            default:
                console.log("cant know why? but your sucks")
        }

    }
    render() {
        let{ax1,ax2,ax3,ax4,ax5,type}=this.state;
        return (
            <div className='w-100 d-flex'>
                <div className='col-6'>
                    <WonderPackageHomePage header={'دسته بندی'} ax1={ax1||ax} ax2={ax2||ax} ax3={ax3||ax} ax4={ax4||ax} ax5={ax5||ax}  ClickImg={this.GetImgType.bind(this)}/>
                </div>
                <div className='col-6 d-flex flex-column'>
                    <div className='col-12 d-flex flex-column'>
                        {type==='1'?<CropImgCropper label='عکس اول' aspect={1.76/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                        {type==='2'?<CropImgCropper label='عکس دوم' aspect={1.08/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                        {type==='3'?<CropImgCropper label='عکس سوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                        {type==='4'? <CropImgCropper label='عکس چهارم' aspect={1.08/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                        {type==='5'? <CropImgCropper label='عکس پنجم' aspect={1.76/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                    </div>
                    {/*<CropImgCropper label='عکس اول' aspect={1.76/1} GetImgFile={this.GetImgFile.bind(this)}/>*/}
                    {/*<CropImgCropper label='عکس دوم' aspect={1.08/1} GetImgFile={this.GetImgFile.bind(this)}/>*/}
                    {/*<CropImgCropper label='عکس سوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>*/}
                    {/*<CropImgCropper label='عکس چهارم' aspect={1.08/1} GetImgFile={this.GetImgFile.bind(this)}/>*/}
                    {/*<CropImgCropper label='عکس پنجم' aspect={1.76/1} GetImgFile={this.GetImgFile.bind(this)}/>*/}
                </div>

            </div>
        );
    }
}

export default WonderPackageAddHomePage;
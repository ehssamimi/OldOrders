import React, {Component} from 'react';
import CropImgCropper from "../CropImg/CropImgCropper";
import CategoriesHomePage from "../../Sub/ShowPreviewHomePage/Categories/CategoriesHomePage";
import ax from "../../../../assets/img/4th.jpg";
import AutoSuggestEdit from "../AutoSuggestEdit/AutoSuggestEdit";
import cakes from "../../../../data/cakes";




class CategoriesAddHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            ax1:'',
            ax2:'',
            ax3:'',
            ax4:'',
            ax1File:'',
            ax2File:'',
            ax3File:'',
            ax4File:'',
            type:'1',value:''
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
            default:
                console.log("cant know why? but your sucks")
        }

    }




    render() {

        let{ax1,ax2,ax3,ax4,type}=this.state;
        return (
            <div className='w-100 d-flex'>
                <div className='col-6'>
                    <CategoriesHomePage header={'دسته بندی'} ax1={ax1||ax} ax2={ax2||ax} ax3={ax3||ax} ax4={ax4||ax} ClickImg={this.GetImgType.bind(this)}/>
                </div>
                <div className='col-6 d-flex flex-column'>
                    {type==='1'?<CropImgCropper label='عکس اول' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                    {type==='2'?<CropImgCropper label='عکس دوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                    {type==='3'?<CropImgCropper label='عکس سوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                    {type==='4'?<CropImgCropper label='عکس چهارم' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                </div>

            </div>
        );
    }
}

export default CategoriesAddHomePage;
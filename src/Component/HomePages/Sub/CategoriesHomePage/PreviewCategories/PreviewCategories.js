import React, {Component} from 'react';
import HeaderSectionHomePage from "../../ShowPreviewHomePage/HeaderSectionHomePage/HeaderSectionHomePage";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
class PreviewCategories extends Component {
    clickEdit(value){
        // console.log(value)
        this.props.clickPreview(value);
    }
    HoverDiv(){

    }
    render() {
        let{ax1,ax2,ax3,ax4}=this.props;
        return (
            <div id='1' className=' m-2' onClick={this.clickEdit.bind(this,this.props.header)} onMouseOver={this.HoverDiv.bind(this)}>
                <HeaderSectionHomePage header={this.props.header}/>


                <div className=' d-flex w-100 point-review position-relative'>
                    <div className='w-100 h-100   CategoriesHover d-flex justify-content-center align-items-center'>
                        <div className='col-6 h-100  d-flex justify-content-center align-items-center categoriesIconReview'><FaRegEdit /></div>
                        <div className='col-6 h-100  d-flex justify-content-center align-items-center categoriesIconReview'><MdDeleteForever/></div>
                    </div>
                    <div className='d-flex col-6 flex-column paddingZero'>
                        <div className='height25vh w-100  mt-1 mb-1'>
                            <img src={ax1} className='img-self-fill br02'/>
                        </div>
                        <div className='height20vh w-100  mt-1 mb-1'>
                            <img src={ax2} className='img-self-fill br02'/>
                        </div>
                    </div>
                    <div className='d-flex col-6 flex-column padding-top-Zero padding-bottom-Zero padding-right-Zero pl-2 '>
                        <div className='height20vh w-100 mt-1 mb-1'>
                            <img src={ax3} className='img-self-fill br02'/>
                        </div>
                        <div className='height25vh w-100 mt-1 mb-1'>
                            <img src={ax4} className='img-self-fill br02'/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default PreviewCategories;
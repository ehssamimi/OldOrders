import React, {Component} from 'react';
import {CardTitle} from "reactstrap";
 import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

class HeaderPreviewComponentHomePage extends Component {
    Edit(header) {
        this.props.handelEdit(header)
    }

    delete() {
        this.props.handelclickDelete()
    }
    render() {
        return (

            <div className='  mb-2 d-flex justify-content-end  h-4vh align-items-center   '>

                {/*<span className='mr-auto fS08vw gray d-flex align-items-center mt-2'><span className='simple-icon-arrow-left' > </span>مشاهده همه </span>*/}
                <div className='d-flex mr-auto  '>
                    <div className=' d-flex fs-13vw color-theme-1 m-2    BtnHeaderComponent ' onClick={this.Edit.bind(this, this.props.Name)}><FaRegEdit /></div>
                    <div className=' d-flex  fs-13vw  color-theme-1 m-2   BtnHeaderComponent ' onClick={this.delete.bind(this)}><MdDeleteForever/></div>
                </div>
                <span dir='rtl' className='ml-2 d-flex align-items-end fs-13vw'>
                                نام :  {this.props.Name}
                 </span>
                {/*<span className='fontSize '>{header}<span className='spanlineHeader' > |</span> </span>*/}
            </div>


            // <CardTitle className='d-flex h-4vh align-items-start w-100 '>
            //
            //     <div className='d-flex mr-auto  '>
            //         <div className=' d-flex fs-13vw color-theme-1 m-2 BtnHeaderComponent ' onClick={this.Edit.bind(this, this.props.Name)}><FaRegEdit /></div>
            //         <div className=' d-flex  fs-13vw  color-theme-1 m-2 BtnHeaderComponent ' onClick={this.delete.bind(this)}><MdDeleteForever/></div>
            //     </div>
            //
            //     <span dir='rtl' className='ml-2 d-flex align-items-end '>
            //                     نام :  {this.props.Name}
            //                 </span>



            // </CardTitle>
        );
    }
}

export default HeaderPreviewComponentHomePage;
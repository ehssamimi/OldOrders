import React, {Component} from 'react';
import HeaderSectionHomePage from "../../ShowPreviewHomePage/HeaderSectionHomePage/HeaderSectionHomePage";
import {DeletePackage, GetCategorieyDetail} from "../../../../functions/ServerConnection";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class PreviewPackages extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleteItem:false,MouseOver:false
        };
        this.toggleLarge=this.toggleLarge.bind(this)
    }

    clickEdit(value){
        // console.log(value)
        this.props.clickPreview(value,this.props.id);
    }

    async handelDelete() {
        console.log(this.props.id);
        let data= await DeletePackage(this.props.id);
        let id=this.props.header;
        if(data===200){
            NotificationManager.success(
                "congratulation",
                "your categories deleted",
                3000,
                null,
                null,
                "success"
            );
            console.log(data);
            const $el = document.getElementById(`${id}`);
            const duration = 2;
            const from = { opacity: 0};
            TweenMax.to($el, duration, from);
            setTimeout(() => {
                $el.remove();
            }, 2000)
        }
        this.toggleLarge()
    }
    handelclickDelete() {
        this.setState({
            deleteItem: true
        })
    }

    toggleLarge = () => {
        this.setState(prevState => ({
            deleteItem: !prevState.deleteItem
        }));
    };
    handelEnter(){
        this.setState({
            MouseOver:true
        })
    }
    handelLeave(){
        this.setState({
            MouseOver:false
        })
    }
    render() {
        let{ax1,ax2,ax3,ax4,ax5}=this.props;
        return (
            <div   className=' w-100 d-flex flex-column  '  onMouseOver={this.handelEnter.bind(this)} onMouseLeave={this.handelLeave.bind(this)} id={this.props.header} >
                <HeaderSectionHomePage header={this.props.header}/>
                <div className=' d-flex flex-column w-100 point-review position-relative h-100'>
                    {
                        this.state.MouseOver? <div className='w-100 h-100   d-flex justify-content-center align-items-center overly'>
                            <div className=' d-flex justify-content-center align-items-center categoriesIconReview m-2' onClick={this.clickEdit.bind(this,this.props.header)}><FaRegEdit /></div>
                            <div className=' d-flex justify-content-center align-items-center categoriesIconReview m-2' onClick={this.handelclickDelete.bind(this)}><MdDeleteForever/></div>
                        </div>:''
                    }
                    <div className=' vh15 d-flex '>
                        <div className='h-100 col-7  paddingZero '  >
                            <img src={ax1} className='img-self-fill br02' />
                        </div>
                        <div className='h-100 col-5 padding-top-Zero padding-bottom-Zero padding-right-Zero  pl-2 '  >
                            <img src={ax2} className='img-self-fill br02 '/>
                        </div>
                    </div>
                    <div className='d-flex vh15 mt-2'   >
                        <div className='h-100 col-12  paddingZero '>
                            <img src={ax3} className='img-self-fill br02'/>
                        </div>
                    </div>
                    <div className=' vh15 d-flex mt-2 ' >
                        <div className='h-100 col-5 paddingZero '  >
                            <img src={ax4} className='img-self-fill br02 '/>
                        </div>
                        <div className='h-100 col-7   padding-top-Zero padding-bottom-Zero padding-right-Zero  pl-2'   >
                            <img src={ax5} className='img-self-fill br02'/>
                        </div>
                    </div>
                </div>
                {/*<div className='d-flex flex-column'></div>*/}
                <Modal
                    isOpen={this.state.deleteItem}
                    size="lg"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}>
                        Delete Package {this.props.header}

                    </ModalHeader>
                    <ModalBody>
                        Are u sure?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handelDelete.bind(this)}>
                            Yes
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggleLarge}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }
}

export default PreviewPackages;
import React, {Component} from 'react';
import HeaderSectionHomePage from "../../ShowPreviewHomePage/HeaderSectionHomePage/HeaderSectionHomePage";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {DeleteBanner} from "../../../../functions/ServerConnection";

class PreViewBanner extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleteItem:false,MouseOver:false
        };
        this.handelEnter =this.handelEnter.bind(this);
        this.handelLeave =this.handelLeave.bind(this);
    }
    clickEdit(value){
        console.log(value);
        this.props.clickPreview(value,this.props.id);
    }

    async handelDelete() {
        console.log(this.props.id);
        let data= await DeleteBanner(this.props.id);
        let id=this.props.header;
        if(data===200){
            NotificationManager.success(
                "congratulation",
                "your Banner is deleted",
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
        let{ax}=this.props;
        return (
            <div   className=' w-100 d-flex flex-column  '  onMouseOver={this.handelEnter.bind(this)} onMouseLeave={this.handelLeave.bind(this)} id={this.props.header} >
                <HeaderSectionHomePage header={this.props.header}/>
                <div className=' d-flex flex-column w-100 point-review position-relative h-100'>
                    {
                        this.state.MouseOver? <div className='w-100 height30vh   d-flex justify-content-center align-items-center overly'>
                            {/*<div className=' d-flex justify-content-center align-items-center categoriesIconReview m-2' onClick={this.clickEdit.bind(this,this.props.header)}><FaRegEdit /></div>*/}
                            <div className=' d-flex justify-content-center align-items-center categoriesIconReview m-2' onClick={this.handelclickDelete.bind(this)}><MdDeleteForever/></div>
                        </div>:''
                    }
                    <div className=' vh15 d-flex '>
                        <div className='height30vh w-100  mt-1 mb-1 pointer   ' >
                            <img src={ax} className='img-self-fill br02'/>
                        </div>

                    </div>

                </div>
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

export default PreViewBanner;
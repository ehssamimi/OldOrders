import React, {Component} from 'react';
import {Button, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import NotificationManager from "../../../../../../components/common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {DeleteBanner, GetBanners} from "../../../../../functions/ServerConnection";
import {Colxx} from "../../../../../../components/common/CustomBootstrap";
import PreviewPackages from "../../../../Sub/WonderPackageAddHomePage/subPackage/PreviewPackages";
import PreViewBanner from "../../../../Sub/Banner/PreViewBanner/PreViewBanner";

class BannerHomePagePreview extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleteItem:false,MouseOver:false,Edit:false,bannersList:[]
        };
        this.handelEnter =this.handelEnter.bind(this);
        this.handelLeave =this.handelLeave.bind(this);
    }
    // clickEdit(value){
    //     console.log(value);
    //     this.props.clickPreview(value,this.props.id);
    // }
    ClickEdit(Name){
        console.log(Name);
        this.props.ChangeComponent(Name,'Banner',this.props.position);
        this.toggleEdit()
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
    toggleEdit = () => {
        this.setState(prevState => ({
            Edit: !prevState.Edit
        }));
    };
    async handelclickEdit() {
        this.setState({
            Edit: true
        });

        let bannersList = await GetBanners();
        console.log(bannersList);
        this.setState({
            bannersList
        });
        // console.log(CategoriesList[0].Items[0].Image);


    }
    ClickEdit(Name){
        console.log(Name);
        this.props.ChangeComponent(Name,'Banner',this.props.position);
        this.toggleEdit();
    }
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
        let {Data}=this.props.items;
        let {bannersList}=this.state;
        let {Type}=Data[0];

        return (
            <div   className=' w-100 d-flex flex-column  '  onMouseOver={this.handelEnter.bind(this)} onMouseLeave={this.handelLeave.bind(this)} id={this.props.header} >
                <CardTitle className='d-flex'>
                    <div className='mr-auto'>
                        <span className=' simple-icon-trash cursor-pointer' onClick={this.handelclickDelete.bind(this)}></span>
                        <span className='  iconsminds-file-edit cursor-pointer' onClick={this.handelclickEdit.bind(this)}></span>
                    </div>
                    {
                        `${this.props.items.Title}بنر `
                    }
                </CardTitle>
                <div className=' d-flex flex-column w-100 point-review position-relative h-100'>
                    <div className=' h-75 d-flex '>
                        <div className='height30vh w-100  mt-1 mb-1 pointer   ' >
                            <img src={Data[0].Image} className='img-self-fill br02'/>
                        </div>
                    </div>
                    <span>{Type.Name}</span>
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

                <Modal
                    isOpen={this.state.Edit}
                    size="lg"
                    toggle={this.toggleEdit}
                >
                    <ModalHeader toggle={this.toggleEdit}>
                        Change package {this.props.header}

                    </ModalHeader>
                    <ModalBody>
                        <div className='col-12 d-flex '>
                            <div className='col-6 d-flex flex-column justify-content-end'>
                                {
                                    bannersList.length>0?
                                        bannersList.map((cat ,index)=><PreViewBanner id={cat._id} key={index} header={cat.Name} ax ={cat.Image}   clickPreview={this.ClickEdit.bind(this)}/>  ):""
                                }
                            </div>
                            <div className='col-6'>

                            </div>

                        </div>
                    </ModalBody>


                </Modal>
            </div>

        );
    }
}

export default BannerHomePagePreview;
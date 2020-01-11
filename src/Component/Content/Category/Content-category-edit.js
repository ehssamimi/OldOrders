import React, {Component} from 'react';
import {FormGroup, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import ax1 from './../../../assets/img/4th-1.jpg'
import JustCropImg from "../../HomePages/Sub/CropImg/JustCropImg";
import {Field} from "formik";
import {sendImg} from "../../functions/ServerConnection";
import {AddCategory} from './../../functions/ServerConnection'
import Loader from "../../HomePages/Sub/Loader/Loader";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";



class ContentCategoryEdit extends Component {
    constructor(props) {
        super(props);
        this.state={modalLarge:false, Destination1: "", ax1File:"" ,ax1:ax1,error:{  ax:""},loader:false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };



    async handleSubmit(event) {
        event.preventDefault();
        var  validate=true;
        // error:{name :"", ax:""}

        let{ax1File}=this.state;
         console.log(ax1File);

        if (ax1File.length<1){
            validate = false;
            let {error} = this.state;
            error['ax'] = "عکس باید انتخاب شود  ";
            this.setState({
                error
            })
        }else {
            let {error} = this.state;
            error['ax'] = "";
            this.setState({
                error
            })
        }

        if (validate===true){
            console.log("true")
            // this.setState({
            //     loader:true
            // })
            // console.log("varidate")
            // let{ax1File}=this.state;
            // let idax = await sendImg(ax1File, 'Public');
            // let Data={
            //     "image": idax
            // };
            // console.log(JSON.stringify(Data));
            // let addCat=await AddCategory(JSON.stringify(Data))
            // this.setState({
            //     loader:false
            // });
            //
            // console.log(addCat)
            // let{state,Description}= addCat ;
            // if (state===200){
            //     NotificationManager.success(
            //         "congratulation",
            //         "your category add",
            //         3000,
            //         null,
            //         null,
            //         "success"
            //     );
            // } else {
            //     NotificationManager.error(
            //         "error",
            //         Description,
            //         3000,
            //         null,
            //         null,
            //         "error"
            //     );
            // }

        }


    }
    GetImgFile(file,Destination , label ,base64){
        // console.log(file);
        // console.log(Destination);
        // console.log(label);
        switch(label) {
            case 'عکس اول':
                this.setState({
                    Destination1:Destination, ax1File:file ,ax1:base64
                });
                break;
            default:
                console.log("cant know why? but your sucks")
        }
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    }
    render() {
        let{modalLarge,ax1,error,loader}=this.state;
        return (
            loader?<div className='d-flex col-6 justify-content-center h-25vh'>
                    <Loader/>
                </div>:
                <div  >
                    <form onSubmit={this.handleSubmit}>
                        <div className="d-flex flex-column align-items-center justify-content-center">

                            <div className="col-6">
                                <div className='d-flex col-12 flex-column paddingZero  '>
                                    <div className="col-12 p-0">
                                        <div className=' w-100    mb-1 pointer h-30vh'
                                             onClick={this.toggleLarge.bind(this, '1')}>
                                            <img src={ax1} className='img-self-fill br02'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary'>ارسال</button>
                            <div className='d-flex flex-column col-6'>

                                {
                                    error['ax'].length>1?<span className='alert alert-danger mt-3 col-12'>{error['ax']}</span>:""
                                }

                            </div>
                        </div>

                    </form>



                    <Modal
                        isOpen={this.state.modalLarge}
                        size="lg"
                        toggle={this.toggleLarge}
                    >
                        <ModalHeader toggle={this.toggleLarge}>
                        </ModalHeader>
                        <ModalBody>
                            <div className='col-12 d-flex flex-column'>
                                {
                                    <JustCropImg label='عکس اول' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}  />
                                }
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
        );
    }
}

export default ContentCategoryEdit;
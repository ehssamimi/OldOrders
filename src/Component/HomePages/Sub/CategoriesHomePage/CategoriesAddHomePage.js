import React, {Component} from 'react';
import CropImgCropper from "../CropImg/CropImgCropper";
import CategoriesHomePage from "../../Sub/ShowPreviewHomePage/Categories/CategoriesHomePage";
import ax from "../../../../assets/img/4th.jpg";
import axios from "axios";

import AutoSuggestEdit from "../AutoSuggestEdit/AutoSuggestEdit";
import cakes from "../../../../data/cakes";
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";
import * as Const from "../../../../constants/ServerConst";





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
            type:'1',value:'',
            modalLarge: false,
        }
    }

    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };

    GetImgType(type){
        // console.log(type)
        this.setState({
            type
        });
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));

    }

    GetImgFile(file,Base64 , label){
        console.log(file);
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

        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));



        let formData=new FormData();
        // formData.append("file",file );
        // formData.append("PermissionLevel",'Public');
        // formData.append("Name",'Public1');
       // let  data= {"Name": "adsfasfasgf"}
       //  let BODY={"Name": "adsfasfasgf"};
       //
       //  let headers = {
       //      'Token': Const.Token,
       //      'PhoneNumber': Const.ID,
       //      'Content-Type':'application/x-www-form-urlencoded'
       //  };
       //
       //  axios.post(`http://chichiapp.ir:30036/admin/category/add`,BODY, {headers: headers}).then(response => {
       //       console.log(response);
       //  }).catch((error,response) => {
       //      console.log(error)
       //      // console.log(response)
       //  });
        var data = new FormData();
        data.append("Name", "ehsan");

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://chichiapp.ir:30036/admin/category/add");
        xhr.setRequestHeader("id", "5d87e194549ae0267b5268cc");
        xhr.setRequestHeader("token", "6109bfa925d615dc888c94d1ba858bad960f3dcb95a69453bd6dd1ba8acc4c49");

        xhr.send(data);



    }





    render() {


        let{ax1,ax2,ax3,ax4,type}=this.state;
        return (
            <div className='w-100 d-flex'>
                <div className='col-6'>
                    <CategoriesHomePage header={'دسته بندی'} ax1={ax1||ax} ax2={ax2||ax} ax3={ax3||ax} ax4={ax4||ax} ClickImg={this.GetImgType.bind(this)}/>
                </div>

                {/*<div className='col-6 d-flex flex-column'>*/}
                    {/*{type==='1'?<CropImgCropper label='عکس اول' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>:''}*/}
                    {/*{type==='2'?<CropImgCropper label='عکس دوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}*/}
                    {/*{type==='3'?<CropImgCropper label='عکس سوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}*/}
                    {/*{type==='4'?<CropImgCropper label='عکس چهارم' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>:''}*/}
                {/*</div>*/}
                {/*<Button*/}
                    {/*className="mr-2 mb-2"*/}
                    {/*color="primary"*/}
                    {/*outline*/}
                    {/*onClick={this.toggleLarge}*/}
                {/*>*/}
                    {/*<IntlMessages id="modal.launch-large-modal" />*/}
                {/*</Button>*/}
                <Modal
                    isOpen={this.state.modalLarge}
                    size="lg"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}>

                    </ModalHeader>
                    <ModalBody>

                        <div className='col-12 d-flex flex-column'>

                            {type==='1'?<CropImgCropper label='عکس اول' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                            {type==='2'?<CropImgCropper label='عکس دوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                            {type==='3'?<CropImgCropper label='عکس سوم' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                            {type==='4'?<CropImgCropper label='عکس چهارم' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>:''}
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default CategoriesAddHomePage;
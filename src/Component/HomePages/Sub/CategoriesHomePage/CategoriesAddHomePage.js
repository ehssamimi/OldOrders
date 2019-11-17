import React, {Component} from 'react';
import CropImgCropper from "../CropImg/CropImgCropper";
import CategoriesHomePage from "../../Sub/ShowPreviewHomePage/Categories/CategoriesHomePage";
import ax from "../../../../assets/img/4th.jpg";
import {sendImg,GetCatNameFunction,UpdateCategories ,GetCategoriesAll ,GetCategorieyDetail} from './../../../../Component/functions/ServerConnection'


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
import PreviewCategories from "./PreviewCategories/PreviewCategories";
import NotificationManager from "../../../../components/common/react-notifications/NotificationManager";

class CategoriesAddHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            Destination1:'',
            Destination2:'',
            Destination3:'',
            Destination4:'',
            ax1:'',
            ax2:'',
            ax3:'',
            ax4:'',
            ax1File:'',
            ax2File:'',
            ax3File:'',
            ax4File:'',
            type:'1',value:'',
            idax1:'',idax2:'',
            idax3:'',idax4:'',
            modalLarge: false,
            CatName:'',
            CategoriesList:'',
            header:'',Edit:false,id:''
        } ;
        this.GetCategoriesName=this.GetCategoriesName.bind(this);

    }
    async componentDidMount(){
        let CategoriesList = await GetCategoriesAll();
        console.log(CategoriesList);
        this.setState({
            CategoriesList
        });
        // console.log(CategoriesList[0].Items[0].Image);
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
    handelEdit(){
        console.log('edit version')
    }
    GetCategoriesName(CatName){
        // console.log(CatName);
        this.setState({
            CatName
        });
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
            case 'عکس دوم':
                this.setState({
                    Destination2:Destination, ax2File:file ,ax2:base64
                });
                break;
            case 'عکس سوم':
                this.setState({
                    Destination3:Destination, ax3File:file ,ax3:base64
                });
                break;
            case 'عکس چهارم':
                this.setState({
                    Destination4:Destination, ax4File:file ,ax4:base64
                });
                break;
            default:
                console.log("cant know why? but your sucks")
        }

        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));


    }


    async ClickEdit(value ,id) {
        console.log(value);
        let data= await GetCategorieyDetail(value);
        console.log(data);
        let header=data.Name;
        let ax1=data.Items[0].Image;
        let ax2=data.Items[1].Image;
        let ax3=data.Items[2].Image;
        let ax4=data.Items[3].Image;
        this.setState({
            header,ax1,ax2,ax3,ax4,Edit:true,id
        })
    }
    async HandelSubmit(){

        let {ax1File, ax2File, ax3File, ax4File, CatName, Destination1, Destination2, Destination3, Destination4} = this.state;
        let catNameServer = await GetCatNameFunction(CatName);
        let idax1 = await sendImg(ax1File, 'Public');
        let idax2 = await sendImg(ax2File, 'Public');
        let idax3 = await sendImg(ax3File, 'Public');
        let idax4 = await sendImg(ax4File, 'Public');
        let updateCategories1 = await UpdateCategories(catNameServer, "0", idax1 , catNameServer);
        let updateCategories2 = await UpdateCategories(catNameServer, "1", idax2 , catNameServer);
        let updateCategories3 = await UpdateCategories(catNameServer, "2", idax3 , catNameServer);
        let updateCategories4 = await UpdateCategories(catNameServer, "3", idax4 , catNameServer);
        console.log(updateCategories1);
        console.log(updateCategories2);
        console.log(updateCategories3);
        console.log(updateCategories4);
    }
    async handelEdit(){

        let {ax1File, ax2File, ax3File, ax4File, CatName, Destination1, Destination2, Destination3, Destination4,id} = this.state;
        var catNameServer = id ;
         // if (CatName!==''){
         //     catNameServer = await GetCatNameFunction(CatName);
         //     console.log(catNameServer);
         //
         // }
        // console.log(id);
        // console.log(catNameServer);
        var submit=false;
        if (ax1File!==''){
            let idax1 = await sendImg(ax1File, 'Public');
            let updateCategories1 = await UpdateCategories(catNameServer, "0", idax1 , catNameServer);
            console.log(updateCategories1);
            if (updateCategories1===200){
                submit=true;
            }
        }

        if (ax2File!==''){
            let idax2 = await sendImg(ax2File, 'Public');
            let updateCategories2 = await UpdateCategories(catNameServer, "1", idax2 , catNameServer);
            // console.log(updateCategories2);
            if (updateCategories2===200){
                submit=true;
            }
        }
        if (ax3File!==''){
            let idax3 = await sendImg(ax3File, 'Public');
            let updateCategories3 = await UpdateCategories(catNameServer, "2", idax3 , catNameServer);
            // console.log(updateCategories3);
            if (updateCategories3===200){
                submit=true;
            }
        }
        if (ax4File!=='') {
            let idax4 = await sendImg(ax4File, 'Public');
            let updateCategories4 = await UpdateCategories(catNameServer, "3", idax4, catNameServer);
            console.log(updateCategories4);
            if (updateCategories4===200){
                submit=true;
            }
        }
          if (submit===true) {
            console.log(submit);
            await NotificationManager.success(
                "congratulation",
                "your categories edit",
                3000,
                null,
                null,
                "success"
            );
        }else {
            console.log(submit)
        }
    }

    render() {

        let{ax1,ax2,ax3,ax4,type,CategoriesList,header,Edit}=this.state;
        return (
            <div className='w-100 d-flex'>
                <div className='col-6'>
                    <CategoriesHomePage header={header||'دسته بندی'} ax1={ax1||ax} ax2={ax2||ax} ax3={ax3||ax} ax4={ax4||ax} ClickImg={this.GetImgType.bind(this)} GetCategoriesName={this.GetCategoriesName}/>
                    {Edit? <button className='btn btn-primary' onClick={this.handelEdit.bind(this)}>ویرایش</button>:<button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>ارسال</button>}
                    </div>

                <div className='col-4 offset-1 d-flex flex-column justify-content-end'>
                    {
                        CategoriesList.length>0?
                            CategoriesList.map((cat ,index)=><PreviewCategories id={CategoriesList[index]._id} key={index} header={cat.Name} ax1={CategoriesList[index].Items[0].Image} ax2={CategoriesList[index].Items[1].Image} ax3={CategoriesList[index].Items[2].Image} ax4={CategoriesList[index].Items[3].Image} clickPreview={this.ClickEdit.bind(this)}/>  ):""

                    }

                    {/*<PreviewCategories key={'key'} header={'name'} ax1={ax} ax2={ax} ax3={ax} ax4={ax} clickPreview={this.ClickEdit.bind(this)}/>*/}
                </div>
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
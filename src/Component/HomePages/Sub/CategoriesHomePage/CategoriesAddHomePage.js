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
            header:''
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


    async ClickEdit(value) {
        console.log(value);
        let data= await GetCategorieyDetail(value);
        console.log(data);
        let header=data.Name;
        let ax1=data.Items[0].Image;
        let ax2=data.Items[1].Image;
        let ax3=data.Items[2].Image;
        let ax4=data.Items[3].Image;
        this.setState({
            header,ax1,ax2,ax3,ax4
        })
    }
    async HandelSubmit(){

        let {ax1File, ax2File, ax3File, ax4File, CatName, Destination1, Destination2, Destination3, Destination4} = this.state;
        let catNameServer = await GetCatNameFunction(CatName);
        let idax1 = await sendImg(ax1File, 'Public');
        let idax2 = await sendImg(ax2File, 'Public');
        let idax3 = await sendImg(ax3File, 'Public');
        let idax4 = await sendImg(ax4File, 'Public');
        // let catNameServer = await GetCatNameFunction(CatName);
        // console.log(catNameServer);
        // let catNameServer='5db00a7f05af81b1723eb79d';
        // let idax1='5db00a7f05af81b1723eb79d';
        let updateCategories1 = await UpdateCategories(catNameServer, "0", idax1 , catNameServer);
        let updateCategories2 = await UpdateCategories(catNameServer, "1", idax2 , catNameServer);
        let updateCategories3 = await UpdateCategories(catNameServer, "2", idax3 , catNameServer);
        let updateCategories4 = await UpdateCategories(catNameServer, "3", idax4 , catNameServer);
        console.log(updateCategories1);
        console.log(updateCategories2);
        console.log(updateCategories3);
        console.log(updateCategories4);

        // await UpdateCategories(CatId, Position, Image, DestinationId)

        //

        // console.log(ax1File)
        // console.log(ax2File)
        // console.log(ax3File)
        // console.log(ax4File)
        //
        // console.log(Destination1)
        // console.log(Destination2)
        // console.log(Destination3)
        // console.log(Destination4)
        // console.log(CatName)

    }

    render() {


        let{ax1,ax2,ax3,ax4,type,CategoriesList,header}=this.state;
        return (
            <div className='w-100 d-flex'>
                <div className='col-6'>
                    <CategoriesHomePage header={header||'دسته بندی'} ax1={ax1||ax} ax2={ax2||ax} ax3={ax3||ax} ax4={ax4||ax} ClickImg={this.GetImgType.bind(this)} GetCategoriesName={this.GetCategoriesName}/>
                    <button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>submit</button>

                </div>

                <div className='col-4 d-flex flex-column justify-content-end'>
                    {
                        CategoriesList.length>0?
                            CategoriesList.map((cat ,index)=><PreviewCategories key={index} header={cat.Name} ax1={CategoriesList[index].Items[0].Image} ax2={CategoriesList[index].Items[1].Image} ax3={CategoriesList[index].Items[2].Image} ax4={CategoriesList[index].Items[3].Image} clickPreview={this.ClickEdit.bind(this)}/>  ):""
                    }
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
import React, {Component} from 'react';
import SliderOnePage from "../ShowPreviewHomePage/SliderOnePage/SliderOnePage";
import {detailImages} from "../../../../data/carouselItems";
import MultiFiles from "./MultiFile/MultiFiles";
import FormAddSlider from "./FormAddSlider/FormAddSlider";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import CropImgCropper from "../CropImg/CropImgCropper";
import {GetCatNameFunction, sendImg, UpdateCategories} from "../../../functions/ServerConnection";
 class SliderAddHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            files:[
                {
                    id: 0,
                    img: "/assets/img/parkin.jpg"
                },
                {
                    id: 1,
                    img: "/assets/img/napoleonshat.jpg"
                },
                // {
                //     id:2,
                //     img: "/assets/img/marble-cake.jpg"
                // },
                // {
                //     id:3,
                //     img: "/assets/img/marble-cake.jpg"
                // },
                // {
                //     id: "large4",
                //     img: "/assets/img/marble-cake.jpg"
                // },
            ],id:'', modalLarge:false,header:'',Edit:false,Sliders:[{Position:0,Image:'',Destination:''},{Position:1,Image:'',Destination:''}
            // ,{Position:2,Image:'',Destination:''}
            ]
        }
    }
    handelMultiFiles(files){
        console.log(typeof (files));
        this.setState({
            files
        })

    }
    GetSliderType(id){
        console.log(id);
        // let id=id++
        this.setState({
            id
        });

        // switch(type) {
        //     case 'عکس اول':
        //         this.setState({
        //            type:1
        //         });
        //         break;
        //     case 'عکس دوم':
        //         this.setState({
        //             type:2
        //         });
        //         break;
        //     case 'عکس سوم':
        //         this.setState({
        //             Destination3:Destination, ax3File:file ,ax3:base64
        //         });
        //         break;
        //     case 'عکس چهارم':
        //         this.setState({
        //             Destination4:Destination, ax4File:file ,ax4:base64
        //         });
        //         break;
        //     default:
        //         console.log("cant know why? but your sucks")
        // }

        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    }
    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };
    GetData(file, Destination, label, Base64, DestinationString){
         let NewLabel=label.slice(4,5);


        // let imgdetail={Position:NewLabel,Image:file,Destination:DestinationString};
        // this.state.Sliders.push(imgdetail);
        // console.log(this.state.files[NewLabel-1].img);
        // let img={id:NewLabel-1,img:Base64};
        // console.log(img);
        this.setState(state => {
            // const files = state.files.filter(item => item.id !== NewLabel-1);
            // let files = state.files ;

            let situation=state.files.filter(item => item.id === NewLabel-1);
            if (situation.length > 0) {
                let files = state.files;
                let Sliders = state.Sliders;
                files[NewLabel - 1].img = Base64;
                // Sliders[NewLabel - 1].Image = file;
                // Sliders[NewLabel - 1].Destination = DestinationString;
                // let id = files.length;


                Sliders[NewLabel - 1].Image=file;
                Sliders[NewLabel - 1].Destination=DestinationString;


                // let NewImg = {Position: id, Image: file, Destination: Destination};
                // Sliders.push(NewImg);
                return {
                    files, Sliders
                };
            } else {
                let files = state.files;
                let Sliders = state.Sliders;
                let id = files.length;
                let img = {id: id, img: Base64};
                // console.log('aaaaaaaaaaaa')
                let NewImg = {Position: id, Image: file, Destination: DestinationString};
                files.push(img);
                // Sliders[NewLabel - 1].Image = file;
                // Sliders[NewLabel - 1].Destination = DestinationString;
                Sliders.push(NewImg);
                return {
                    files, Sliders
                };

            }

        });
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));

    }
    GetCategoriesName(header){
        console.log(header);
        this.setState({
            header
        })
    }
     AddExtraSlider( ){
         let id = this.state.files.length;
         // console.log(id);
         // let id=id++
         this.setState({
             id
         });
         this.setState(prevState => ({
             modalLarge: !prevState.modalLarge
         }));
     }

     async HandelSubmit(){
        console.log(this.state.Sliders)

         // let {ax1File, ax2File, ax3File, ax4File, CatName, Destination1, Destination2, Destination3, Destination4} = this.state;
         // let catNameServer = await GetCatNameFunction(CatName);
         // let idax1 = await sendImg(ax1File, 'Public');
         // let idax2 = await sendImg(ax2File, 'Public');
         // let idax3 = await sendImg(ax3File, 'Public');
         // let idax4 = await sendImg(ax4File, 'Public');
         // let updateCategories1 = await UpdateCategories(catNameServer, "0", idax1 , catNameServer);
         // let updateCategories2 = await UpdateCategories(catNameServer, "1", idax2 , catNameServer);
         // let updateCategories3 = await UpdateCategories(catNameServer, "2", idax3 , catNameServer);
         // let updateCategories4 = await UpdateCategories(catNameServer, "3", idax4 , catNameServer);
         // console.log(updateCategories1);
         // console.log(updateCategories2);
         // console.log(updateCategories3);
         // console.log(updateCategories4);
     }
     handelEdit(){

     }
    render() {


         console.log( this.state.files);
        return (
            <div className='d-flex'>
                <div className='col-6' >



                            <SliderOnePage DetailImages={this.state.files} GetSliderType={this.GetSliderType.bind(this)}
                                           GetCategoriesName={this.GetCategoriesName.bind(this)} header={'انتخاب نام'}/>
                    <button onClick={this.AddExtraSlider.bind(this)}>add extra slider</button>
                    {this.state.Edit? <button className='btn btn-primary' onClick={this.handelEdit.bind(this)}>ویرایش</button>:<button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>ارسال</button>}

                </div>


                {/*<div className='col-6' >*/}
                {/*<div className='align-items-center'></div>*/}
                {/*<div id='dragmulti'>*/}

                {/*</div>*/}
                {/*<MultiFiles MultiFile={this.handelMultiFiles.bind(this)}/>*/}
            {/*</div>*/}

                <Modal
                    isOpen={this.state.modalLarge}
                    size="lg"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}>
                    </ModalHeader>
                    <ModalBody>
                        <div className='col-12 d-flex flex-column'>
                            <FormAddSlider header={`عکس(${this.state.id+1 })`} GetData={this.GetData.bind(this)}/>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default SliderAddHomePage;
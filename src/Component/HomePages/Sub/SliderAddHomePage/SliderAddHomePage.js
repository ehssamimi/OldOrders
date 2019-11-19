import React, {Component} from 'react';
import SliderOnePage from "../ShowPreviewHomePage/SliderOnePage/SliderOnePage";
import {detailImages} from "../../../../data/carouselItems";
import MultiFiles from "./MultiFile/MultiFiles";
import { FaPlusCircle } from "react-icons/fa";
import FormAddSlider from "./FormAddSlider/FormAddSlider";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import CropImgCropper from "../CropImg/CropImgCropper";
import {AddSlider, sendImg, UpdateSliders,allMainSlider,GetSliderDetail} from "../../../functions/ServerConnection";
import PreViewBanner from "../Banner/PreViewBanner/PreViewBanner";
import PreviewMainSlider from "./PreviewSliderMAin/PreviewMainSlider";
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
            ],id:'', modalLarge:false,header:'',Edit:false,Sliders:[{Position:0,Image:'',Destination:'',DestinationId:''},{Position:1,Image:'',Destination:'',DestinationId:''}
            // ,{Position:2,Image:'',Destination:''}

            ],SlidersPrev:[],headerPlaceHolder:''
        }
    }
    async componentDidMount(){
      let Sliders=  await allMainSlider();
      console.log( Sliders);
      this.setState({
          SlidersPrev:Sliders
      })

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
                let NewImg = {Position: id, Image: file, Destination: DestinationString,DestinationId:Destination};
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
         let {Sliders,header}=this.state;
         let i;
         let SliderId = await AddSlider(header);
         console.log('SliderID',SliderId);
         console.log(SliderId);
         for (i = 0 ; i < Sliders.length; i++) {
             let idax1 = await sendImg(Sliders[i].Image, 'Public');
             let updateCategories1 = await UpdateSliders(header, Sliders[i].Position, idax1 ,Sliders[i].Destination, idax1);
             console.log(updateCategories1);
         }
         console.log(header)

     }
     async handelEdit(){
        console.log(this.state.Sliders)
         let{Sliders,headerPlaceHolder}=this.state;
         let i;
         for (i = 0 ; i < Sliders.length; i++) {
             // console.log(Items[i])
             if (Sliders[i].Image!==''){
                 let idax1 = await sendImg(Sliders[i].Image, 'Public');
                 let updateCategories1 = await UpdateSliders(headerPlaceHolder, i, idax1 ,Sliders[i].Destination, idax1);
                 console.log(updateCategories1);
             }

         }

     }

     async ClickEdit(name) {
         console.log(name)
         let Slider=await GetSliderDetail(name);
         console.log(Slider);
         let {Items}=Slider;
         console.log(Items);

         let i;let files=[];let Sliders=[];
         for (i = 0 ; i < Items.length; i++) {
             // console.log(Items[i])
             let img = {id: Items[i].Position, img: Items[i].Image};
             let images={Position:i,Image:'',Destination:'',DestinationId:''};
             Sliders.push(images);
             // console.log(img);
             files.push(img);
         }
         this.setState({
             files, Sliders:Sliders,headerPlaceHolder:Slider.Name,Edit:true
         }, () => {
             // console.log(this.state.files)
             // console.log(this.state.Sliders)
         })


         // files.push(img);
         // Sliders[NewLabel - 1].Image = file;
         // Sliders[NewLabel - 1].Destination = DestinationString;
         // Sliders.push(NewImg);
     }
    render() {


         // console.log( this.state.files);
         let{SlidersPrev,headerPlaceHolder}=this.state;
        return (
            <div className='d-flex'>
                <div className='col-6' >
                            <SliderOnePage DetailImages={this.state.files} GetSliderType={this.GetSliderType.bind(this)}
                                           GetCategoriesName={this.GetCategoriesName.bind(this)} header={headerPlaceHolder||'انتخاب نام'} Edit={this.state.Edit}/>

                    <div className='d-flex w-100 align-items-center h-7vh '>
                        {this.state.Edit? <button className='btn btn-primary ' onClick={this.handelEdit.bind(this)}>ویرایش</button>:<button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>ارسال</button>}

                        <span className='fs-24vw color-theme-2 ml-auto btn d-flex align-items-center pr-0'  onClick={this.AddExtraSlider.bind(this)}><FaPlusCircle/></span>
                    </div>

                    {/*<button onClick={this.AddExtraSlider.bind(this)}>add extra slider</button>*/}
                    {/*{this.state.Edit? <button className='btn btn-primary' onClick={this.handelEdit.bind(this)}>ویرایش</button>:<button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>ارسال</button>}*/}

                </div>

                <div className='col-6' >
                    {
                        SlidersPrev.length>0?
                            // AllBanners.map((cat ,index)=><PreViewBanner id={CategoriesList[index]._id} key={index} header={cat.Name} ax1={CategoriesList[index].Items[0].Image}   clickPreview={this.ClickEdit.bind(this)}/>  ):""
                            SlidersPrev.map((slider ,index)=><PreviewMainSlider id={slider._id} key={index} header={slider.Name}
                                                                                slider={slider} clickEdit={this.ClickEdit.bind(this)}/>  ):""
                        // AllBanners.map((cat ,index)=><PreViewBanner id={index} key={index}  ax1={ax}   clickPreview={this.ClickEdit.bind(this)} />  ):""
                    }
                </div>

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
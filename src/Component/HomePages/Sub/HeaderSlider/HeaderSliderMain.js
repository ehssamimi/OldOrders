import React, {Component} from 'react';
import { FaPlusCircle } from "react-icons/fa";
import {

    AddSlider,
    allHeaderSlider,
    GetHeaderSliderDetail,
    sendImg, UpdateSliders,AddHeaderSlider,UpdateHeaderSliders
} from "../../../functions/ServerConnection";
import PreviewHeaderSlider from "./Preview/PreviewHeaderSlider";
import SliderOnePage from "../ShowPreviewHomePage/SliderOnePage/SliderOnePage";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import FormAddSlider from "../SliderAddHomePage/FormAddSlider/FormAddSlider";
import AddHeadersSlider from "./Add/AddHeadersSlider";
import NewHeaderSlider from "./Add/NewHeaderSlider";

class HeaderSliderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SlidersPrev: '', modalLarge:false, headerPlaceHolder:'',header:'', files: [
                {
                    id: 0,
                    img: "/assets/img/parkin.jpg"
                },
                {
                    id: 1,
                    img: "/assets/img/napoleonshat.jpg"
                },
                {
                    id: 2,
                    img: "/assets/img/marble-cake.jpg"
                },
                {
                    id: 3,
                    img: "/assets/img/marble-cake.jpg"
                }
            ],Sliders:[{Position:0,Image:'',Destination:'',DestinationId:''},{Position:1,Image:'',Destination:'',DestinationId:''}
            ,{Position:2,Image:'',Destination:''}
        ] ,id: '',
        }
    }
    async componentDidMount(){
        let Sliders=  await allHeaderSlider();
        console.log( Sliders);
        this.setState({
            SlidersPrev:Sliders
        })
    }
    GetSliderType(id){
        console.log(id);
        this.setState({
            id
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
    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };
    GetData(file, Destination, label, Base64, DestinationString){
        console.log('DestinationString');
        console.log(DestinationString);


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
        let Number=Sliders.length;
        console.log(header);
        console.log(Number);
        let SliderId = await AddHeaderSlider(header,Number);
        console.log('SliderID',SliderId);
        console.log(SliderId);
        for (i = 0 ; i < Sliders.length; i++) {
            let idax1 = await sendImg(Sliders[i].Image, 'Public');
            let updateCategories1 = await UpdateHeaderSliders(header, Sliders[i].Position, idax1 ,Sliders[i].Destination, idax1);
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
                let updateCategories1 = await UpdateHeaderSliders(headerPlaceHolder, i, idax1 ,Sliders[i].Destination, idax1);
                console.log(updateCategories1);
            }

        }

    }

    async ClickEdit(name) {
        console.log(name);
        let Slider=await GetHeaderSliderDetail(name);
        console.log(Slider);
        let {Items}=Slider;
        console.log(Items);

        let i;let files=[];let Sliders=[];
        for (i = 0 ; i < Items.length; i++) {
            let img = {id: Items[i].Position, img: Items[i].Image};
            let images={Position:i,Image:'',Destination:'',DestinationId:''};
            Sliders.push(images);
            files.push(img);
        }
        this.setState({
            files, Sliders:Sliders,headerPlaceHolder:Slider.Name,Edit:true
        }, () => {

        })

    }


    render() {
        let{SlidersPrev,headerPlaceHolder,files}=this.state;
        // console.log('files');
        // console.log(files);
        return (
            <div className='d-flex '>
                <div className='col-6'>
                    <NewHeaderSlider/>

                    {/*<AddHeadersSlider DetailImages={files} GetSliderType={this.GetSliderType.bind(this)}*/}
                                   {/*GetCategoriesName={this.GetCategoriesName.bind(this)} header={headerPlaceHolder||'انتخاب نام'} Edit={this.state.Edit}/>*/}

                    {/*<button onClick={this.AddExtraSlider.bind(this)}>add extra slider</button>*/}
                    <div className='d-flex w-100 align-items-center h-7vh '>
                        {this.state.Edit? <button className='btn btn-primary ' onClick={this.handelEdit.bind(this)}>ویرایش</button>:<button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>ارسال</button>}

                        <span className='fs-24vw color-theme-2 ml-auto btn d-flex align-items-center pr-0'  onClick={this.AddExtraSlider.bind(this)}><FaPlusCircle/></span>
                    </div>

                </div>
                <div className='col-6'>
                    {
                        SlidersPrev.length > 0 ?
                            SlidersPrev.map((slider, index) => <PreviewHeaderSlider id={slider._id} key={index}
                                                                                    header={slider.Name}
                                                                                    slider={slider}
                                                                                    clickEdit={this.ClickEdit.bind(this)}/>) : ""
                    }
                </div>
                <Modal
                    isOpen={this.state.modalLarge}
                    size="lg"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}  >
                        <span className=''>  انتخاب عکس</span>

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

export default HeaderSliderMain;
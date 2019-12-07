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
import ax from './../../../../assets/img/4th.jpg'
import Loader from "../Loader/Loader";
import PreviewMainSlider from "../SliderAddHomePage/PreviewSliderMAin/PreviewMainSlider";
import {Link} from "react-scroll/modules";
import NotificationManager from "../../../../components/common/react-notifications/NotificationManager";

class HeaderSliderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SlidersPrev: '', modalLarge:false, headerPlaceHolder:'',header:'', files: [
                {
                    id: 0,
                    img: ax
                },
                {
                    id: 1,
                    img: ax
                },

            ],Sliders:[{Position:0,Image:'',Destination:'',DestinationId:''},{Position:1,Image:'',Destination:'',DestinationId:''}
            // ,{Position:2,Image:'',Destination:''}
        ] ,id: '',error:{header:"",atLeast:""},showLoader:false,EditName:''
        }
    }
    async componentDidMount(){
        let Sliders=  await allHeaderSlider();

        // console.log( Sliders);
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
        // let Number=Sliders.length;
        let Number=0;
        for (i = 0 ; i < Sliders.length; i++) {
            if (Sliders[i].Destination.length>1) {
                Number+=1
            }
        }
        // console.log(header);
        // console.log('Number');
        // console.log(Number);
        // console.log(Sliders);
        var validateSlider=true;
        if (header.length<1){
            validateSlider = false;
            let {error} = this.state;
            error['header'] = "header is not here";
            this.setState({
                error
            })
        }else {
            let {error} = this.state;
            error['header'] = "";
            this.setState({
                error
            })
        }
            if (Number<2) {
                validateSlider=false;
                        let {error} = this.state;
                        error['atLeast'] = "at last 2 component";
                        return(
                        this.setState({
                            error
                        }))
            }else {
                let {error} = this.state;
                        error['atLeast'] = "";
                        this.setState({
                            error
                        })
            }

        if (validateSlider){
            this.setState(prevState => ({
                showLoader:!prevState.showLoader,
            }));
            let Submit=true;
            let SliderId = await AddHeaderSlider(header,Number);
            if (SliderId ==='error') {
                NotificationManager.error(
                    "error",
                    "your Slider don't accept",
                    3000,
                    null,
                    null,
                    "error"
                );
                this.setState(prevState => ({
                    showLoader:!prevState.showLoader,
                }));
                Submit=false;
            }
            console.log('SliderID',SliderId);
            console.log(SliderId);
            for (i = 0 ; i < Sliders.length; i++) {
                if (Sliders[i].Destination.length>1) {

                    let idax1 = await sendImg(Sliders[i].Image, 'Public');
                    let updateCategories1 = await UpdateHeaderSliders(header, Sliders[i].Position, idax1, Sliders[i].Destination, idax1);
                    if (idax1==='error' || updateCategories1!==200) {
                        NotificationManager.error(
                            "error",
                            "your Slider don't accept",
                            3000,
                            null,
                            null,
                            "error"
                        );
                        this.setState(prevState => ({
                            showLoader:false
                        }));
                        Submit=false;
                    }
                    console.log(updateCategories1);
                }
            }
            if(Submit===true){
             let SlidersPrev=await allHeaderSlider();
                NotificationManager.success(

                    "congratulation",
                    "your Slider add",
                    3000,
                    null,
                    null,
                    "success"
                );
                this.setState(prevState => ({
                    showLoader:false,SlidersPrev
                }));
            }
            console.log(header)
        }



    }
    async handelEdit(){
        console.log(this.state.Sliders);
        this.setState(prevState => ({
            showLoader:!prevState.showLoader,
        }));
        let Submit=true;
        let{Sliders,headerPlaceHolder}=this.state;
        let i;
        for (i = 0 ; i < Sliders.length; i++) {
            // console.log(Items[i])
            if (Sliders[i].Image!==''){
                let idax1 = await sendImg(Sliders[i].Image, 'Public');
                let updateCategories1 = await UpdateHeaderSliders(headerPlaceHolder, i, idax1 ,Sliders[i].Destination, idax1);
                if (idax1==='error' || updateCategories1!==200) {
                    NotificationManager.error(
                        "error",
                        "your Slider don't accept",
                        3000,
                        null,
                        null,
                        "error"
                    );
                    this.setState(prevState => ({
                        showLoader:false
                    }));
                    Submit=false;
                }
                console.log(updateCategories1);
            }

        }

        if(Submit===true){
            let SlidersPrev=await allHeaderSlider();
            NotificationManager.success(

                "congratulation",
                "your Slider edit",
                3000,
                null,
                null,
                "success"
            );
            this.setState(prevState => ({
                showLoader:false,SlidersPrev
            }));
        }
    }

    async ClickEdit(name) {
        console.log(name);
        this.setState(prevState => ({
            showLoader:!prevState.showLoader,
            EditName:name
        }));
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

        });
        this.setState(prevState => ({
            showLoader:!prevState.showLoader
        }));
        let goTop=document.getElementById('goTop');
        goTop.click();

    }


    render() {
        let{SlidersPrev,headerPlaceHolder,files}=this.state;
        // console.log('files');
        // console.log(files);
        return (
            <div className='d-flex '>
                <div className='col-6'>
                    {
                        this.state.showLoader?
                            <Loader/>
                            :      <NewHeaderSlider DetailImages={files} GetSliderType={this.GetSliderType.bind(this)}
                                                    GetCategoriesName={this.GetCategoriesName.bind(this)}
                                                    header={headerPlaceHolder || 'انتخاب نام'} Edit={this.state.Edit} />
                    }



                    {/*<AddHeadersSlider DetailImages={files} GetSliderType={this.GetSliderType.bind(this)}*/}
                                   {/*GetCategoriesName={this.GetCategoriesName.bind(this)} header={headerPlaceHolder||'انتخاب نام'} Edit={this.state.Edit}/>*/}

                    {/*<button onClick={this.AddExtraSlider.bind(this)}>add extra slider</button>*/}


                    <div className='d-flex w-100 align-items-center h-7vh '>
                        {this.state.Edit? <button className='btn btn-primary ' onClick={this.handelEdit.bind(this)}>ویرایش</button>:<button className='btn btn-primary' onClick={this.HandelSubmit.bind(this)}>ارسال</button>}

                        {this.state.Edit? "": <span className='fs-24vw color-theme-2 ml-auto btn d-flex align-items-center pr-0'  onClick={this.AddExtraSlider.bind(this)}><FaPlusCircle/></span>}
                    </div>
                    <div className='d-flex flex-column'>
                        {
                            this.state.error['header'].length>1?<span className='alert alert-danger mt-3'>{this.state.error['header']}</span>:""
                        }
                        {
                            this.state.error['atLeast'].length>1?<span className='alert alert-danger mt-3'>{this.state.error['atLeast']}</span>:""
                        }
                    </div>


                </div>
                <div className='col-6'>
                    {
                        SlidersPrev.length > 0 ?
                            SlidersPrev.map((slider, index) => <PreviewHeaderSlider id={slider._id} key={index}
                                                                                    header={slider.Name}
                                                                                    slider={slider}
                                                                                    clickEdit={this.ClickEdit.bind(this)}
                                                                                    showLoader={this.state.showLoader}
                                                                                    EditName={this.state.EditName}

                            />) :     <Loader/>
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
                <Link name="first" activeClass="active" className="first" to="addSlider" spy={true} smooth={true} duration={900} offset={-130}>
                    <button className='d-none' id='goTop'>go top</button>
                </Link>

            </div>
        );
    }
}

export default HeaderSliderMain;
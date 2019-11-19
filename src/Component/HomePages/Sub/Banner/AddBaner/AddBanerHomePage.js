import React, {Component} from 'react';
import CropImgCropper from "../../CropImg/CropImgCropper";
import Destination from "../../Destination/Destination";
import {addBaner, sendImg, UpdateCategories} from "../../../../functions/ServerConnection";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";
import {FormGroup, Input, InputGroup, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import ax from './../../../../../assets/img/2574.jpg'
import IntlMessages from "../../../../../helpers/IntlMessages";

class AddBanerHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            ax:ax ,axFile:'',name:'',Destination:'',DestinationString:'',modalLarge:false
        };
        this.handelChangeName = this.handelChangeName.bind(this);
        this.handelSend = this.handelSend.bind(this);
        this.handelEdit = this.handelEdit.bind(this);
    }
    async  handelSend(){
      let {axFile, name, DestinationString} = this.state;
      let img = await sendImg(axFile, 'Public');
      let Destination = img;
      let data = await addBaner(name, img, DestinationString, Destination);
      console.log(data);
    }
    async handelEdit(){
        let {axFile, name, DestinationString} = this.props;

        let {ax1File, ax2File, ax3File, ax4File, CatName, Destination1, Destination2, Destination3, Destination4,id} = this.state;
        var catNameServer = id ;
        var submit=false;
        if (ax1File!==''){
            let idax1 = await sendImg(ax1File, 'Public');
            let updateCategories1 = await UpdateCategories(catNameServer, "0", idax1 , catNameServer);
            console.log(updateCategories1);
            if (updateCategories1===200){
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


    static getDerivedStateFromProps(props, state) {
        console.log(props.name);
        console.log(state.name);
        if (props.name !== state.name) {
            return {
                name: props.name,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }

    GetDestinationString(DestinationString){
        this.setState({
            DestinationString
        })
    }
    handelChangeName(e){
        // console.log('a')
        let name=e.target.value;

        this.setState({
            name
        },()=>{
            // this.props.GetCategoriesName(this.state.name)
        })

    }
    OnClickImg(){
        this.setState({
            modalLarge:true
        })
    }
    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };
    GetImgFile(file,Destination , label , Base64){
        // console.log(Destination);
        // console.log(file);
        // console.log(Base64);
        // console.log(label);
        console.log(Destination);
        this.setState({
            ax:Base64, axFile:file,Destination:Destination.length>1?Destination:''
        });
        this.toggleLarge()
    }
    render() {
        let{header ,Edit ,ax ,name}=this.props;
        // console.log("name"+name);

        // let{ax}=this.state;
        console.log("name"+this.state.name);

        return (
            <div>

                <div className="col-sm-12">

                    <FormGroup className="form-group  position-relative has-float-label w-100">
                        <div className='d-flex justify-content-end'>
                            <Label>
                                <IntlMessages id={"اسم"} />
                            </Label>
                        </div>
                        {/*<input type="text" id="name" onChange={this.handelChangeName.bind(this)} placeholder={ 'انتخاب نام'} className="mb-3 w-100 react-select__value-container "  value={this.state.name } />*/}

                        <InputGroup className="mb-3">
                            {/*<input type="text" id="name" onChange={this.handelChangeName.bind(this)} placeholder={}/>*/}
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                // value={this.state.name}
                                onChange={this.handelChangeName.bind(this)}
                                label={this.state.name ||'انتخاب نام'}
                            />
                        </InputGroup>

                    </FormGroup>
                </div>

                    {/*<span className='d-flex justify-content-start mb-2 ' dir='rtl'>*/}
                    {/*<input type='text' name="name" id="name" onChange={this.handelChangeName.bind(this)}*/}
                           {/*className='border-0 fS1vw backgroundDefault col-12' placeholder={header || 'Name'}/>*/}
                {/*</span>*/}
                <Destination GetDestinationString={this.GetDestinationString.bind(this)} Destination={this.props.Destination}/>
                <div className='d-flex col-12 flex-column paddingZero   '>
                    <div className='height30vh w-100  mt-1 mb-1 pointer   ' onClick={this.OnClickImg.bind(this)}>
                        <img src={ax} className='img-self-fill br02'/>
                    </div>
                </div>
                {Edit? <button className='btn btn-primary' onClick={this.handelEdit}>ویرایش</button>:<button className='btn btn-primary' onClick={this.handelSend}>ارسال</button>}
                <Modal
                    isOpen={this.state.modalLarge}
                    size="lg"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}>
                    </ModalHeader>
                    <ModalBody>
                        <div className='col-12 d-flex flex-column'>
                            <CropImgCropper label='عکس بنر' aspect={3 / 1} GetImgFile={this.GetImgFile.bind(this)}/>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddBanerHomePage;
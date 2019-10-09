import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
// import ax from './../../img/2.jpg'
import {base64StringtoFile,extractImageFileExtensionFromBase64} from './../../../../Component/functions/Functions'
import {CustomInput, FormGroup, InputGroup, Label} from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";
import ImgComponent from "../../../ChichiMan/ChiChi Man Sign In/Sub/ImgComponent";
import AutoSuggestEdit from "../AutoSuggestEdit/AutoSuggestEdit";
import cakes from "../../../../data/cakes";

const cropper = React.createRef(null);

class CropImgCropper extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                src: '',
                cropResult: null,
                type:'',name:''
            };
        this.onChangeImage = this.onChangeImage.bind(this);
        this.cropImage = this.cropImage.bind(this);
    }

    onChangeImage(e)
    {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({
                src: reader.result ,
                type:files[0].type,
                name:files[0].name,
            });
        };
        reader.readAsDataURL(files[0]);
    }

    cropImage()
    {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        // ********set the preview ccrop img*********
        this.setState({
            cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        },()=>{

            // console.log(this.cropper.getCroppedCanvas());
            let file= base64StringtoFile(this.state.cropResult,this.state.name,this.state.type);
            // ***this is file to set server*********
            console.log(file);
            this.props.GetImgFile(file,this.state.cropResult,this.props.label)
            // extractImageFileExtensionFromBase64(this.cropper.getCroppedCanvas())
        });
    }
    handelChange(e, value){
        this.setState({value:value});

        //
        // if (value.length>0) {
        //     let headers = {
        //         'Id': `${Const.ID}`,
        //         'Token': `${Const.Token}`
        //     };
        //     axios.get(`${Const.URL}admin/gameitem/search/${value}`,{headers:headers}).then(responsive=>
        //     {
        //         const {Description} = responsive.data;
        //         // console.log(`https://resource.themaddays.com/admin/gameitem/search/${value}`);
        //
        //         let index;let Device=[];
        //         let Data=JSON.parse(Description);
        //
        //         for (index in Data){
        //             Device.push({title:Data[index].Name ,id:Data[index]._id,Tag:Data[index].Tag,ChanceType:Data[index].ChanceType,Key:Data[index].Key})
        //         }
        //
        //         let dict = {};
        //         for (index in Data){
        //             let id =Data[index].Key;
        //             let Value =Data[index]._id;
        //             dict[id] = Value;
        //             // dict[Value] = id;
        //         }
        //
        //         let DATA=[];
        //         Device.map(item => {
        //             // DATA.push({name: item.title})
        //             DATA.push({name: item.Key})
        //         });
        //         this.setState({
        //             Device,
        //             DATA,dict,originalData:Data
        //         })
        //
        //     }).catch(error=>{console.log(error)});
        // }

    }


    render(){
        let{label,aspect}=this.props;
        const rightData = cakes.map(item => {
            return {name: item.title}
        });
        return(
            <div>
                <div className='col-12'>
                    <AutoSuggestEdit
                        placeholder={"type item name"}
                        data={rightData}
                        onChange={value => this.handelChange(this, value)
                        }
                    />
                </div>
                <div className="col-sm-12">

                    <FormGroup className="form-group  position-relative ">
                        <div className='d-flex justify-content-end'>
                            <Label>
                                <IntlMessages id={label} />
                            </Label>
                        </div>
                        <InputGroup className="mb-3">
                            <CustomInput
                                type="file"
                                id="uploadImage"
                                name="uploadImage"
                                onChange={this.onChangeImage}
                                label={this.state.name ||'انتخاب عکس'}
                            />
                            {/*<InputGroupAddon addonType="append">Upload</InputGroupAddon>*/}
                        </InputGroup>

                    </FormGroup>
                </div>

                {/*<input type="file" id="uploadImage" name="uploadImage" onChange={this.onChangeImage} />*/}

                <Cropper
                    style={{ height: 400, width: '100%' }}
                    aspectRatio={aspect}
                    preview=".img-preview"
                    guides={false}
                    src={this.state.src}
                    ref={cropper => { this.cropper = cropper; }}
                />
                <button onClick={this.cropImage} style={{ float: 'right' }}>
                    crop img
                </button>
                {/*<img src={this.state.cropResult} alt="img"/>*/}
                {/*<img src='' id='uploadPreview' alt='aa'/>*/}
            </div>

        );
    }
}

export default CropImgCropper;
import React, {Component} from 'react';
import CropImgCropper from "../CropImg/CropImgCropper";

class AddBanerHomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            ax:'',axFile:''
        }
    }


    GetImgFile(file,Base64 , label){
        // console.log(file);
        // console.log(Base64);
        // console.log(label);
        this.setState({
            ax:Base64, axFile:file
        });

    }

    render() {
        return (
            <div>
                <CropImgCropper label='عکس بنر' aspect={3/1} GetImgFile={this.GetImgFile.bind(this)}/>
            </div>
        );
    }
}

export default AddBanerHomePage;
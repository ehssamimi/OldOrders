import React, {Component} from 'react';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    InputGroup,
    InputGroupAddon,
    Input,
    InputGroupText,
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    CustomInput,
} from "reactstrap";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../../helpers/IntlMessages";

import { Colxx, Separator } from "../../../../components/common/CustomBootstrap";

class ImgComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            src:null,
            ImgName:''
        }
    }

    onSelectFile = e => {
        let file=e.target.files;
        let DATA=file[0];
        let{Type}=this.props;
        // console.log(DATA);
        this.props.GetData(Type,DATA);
        if (file && file.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                this.setState({ src: reader.result,ImgName:file[0].name })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    render() {
        let{src,ImgName}=this.state;
        // console.log(src);
        console.log(ImgName);
        return (
            <div className='w-100'>
                <InputGroup className="mb-3">
                    <CustomInput
                        type="file"
                        id="exampleCustomFileBrowser2"
                        name="customFile"
                        onChange={this.onSelectFile.bind(this)}
                         label={ImgName}

                    />
                    {/*<InputGroupAddon addonType="append">Upload</InputGroupAddon>*/}
                </InputGroup>
                {src && (
                    <div className='height40vh w-100'>
                        <img  alt="img" className='img-self-fill' src={src} />
                    </div>
                )}
            </div>
        );
    }
}

export default ImgComponent;
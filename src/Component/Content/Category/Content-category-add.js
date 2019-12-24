import React, {Component} from 'react';
import {FormGroup} from "reactstrap";
import ax1 from './../../../assets/img/4th-1.jpg'

class ContentCategoryAdd extends Component {
    constructor(props) {
        super(props);
        this.setState({
            
        })
    }

    toggleLarge = () => {
        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));
    };
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
            default:
                console.log("cant know why? but your sucks")
        }

        this.setState(prevState => ({
            modalLarge: !prevState.modalLarge
        }));


    }
    render() {
        return (
            <div className="d-flex ">
                <div className="col-3">
                    <div className='d-flex col-12 flex-column paddingZero  '>
                        <div className="col-12">
                            <div className=' w-100  mt-1 mb-1 pointer h-30vh'
                                 onClick={this.toggleLarge.bind(this, '1')}>
                                <img src={ax1} className='img-self-fill br02'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>


                </div>


            </div>
        );
    }
}

export default ContentCategoryAdd;
import React, {Component} from 'react';
import {GetAllHomePages} from './../../../../Component/functions/ServerConnection'
import Task from "../Add/task";
import AllPreviewHomePages from "./Sub";

class PreviewAllMainMobile extends Component {
    constructor(props) {
        super(props);
        this.state={
            Data:[]
        }
    }

    async componentDidMount(){
       let Data= await GetAllHomePages();
       console.log(Data);
       this.setState({
           Data
       });
    }
    render() {
        let {Data}=this.state;
        return (
            <div className='w-100 d-flex flex-wrap'>
                {
                    Data.length>0?Data.map((item, index) => <AllPreviewHomePages key={item.id} item={item} index={index}/>):''
                }
            </div>
        );
    }
}

export default PreviewAllMainMobile;
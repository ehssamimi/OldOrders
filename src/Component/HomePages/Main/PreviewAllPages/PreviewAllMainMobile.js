import React, {Component} from 'react';
import {GetAllHomePages} from './../../../../Component/functions/ServerConnection'
import Task from "../Add/task";
import AllPreviewHomePages from "./Sub";
import MoveRowIndex from "../Edit/NewEdit";


class PreviewAllMainMobile extends Component {
    constructor(props) {
        super(props);
        this.state={
            Data:[]
        }
    }

    async componentDidMount(){
       let Data= await GetAllHomePages();
       // console.log(Data);
       // console.log(Data[0]);
       this.setState({
           Data
       },()=>{
           // console.log(this.state.Data)
       });
    }
    render() {
        let {Data}=this.state;
        // console.log(Data)
        return (

                <div className='w-100 d-flex  active-Coluumn '>
                    {
                        Data.length>0?Data.map((item, index) => <MoveRowIndex key={item._id} id={item._id} item={item} Name={item.Name} index={index}/>):''
                        //  {/*<MoveRowIndex key={Data._id} item={Data} Name={Data.Name} index={1}/>*/}
                    }
                </div>


        );
    }
}

export default PreviewAllMainMobile;
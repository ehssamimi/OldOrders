import React, {Component} from 'react';
// import {ContextMenuTrigger} from "react-contextmenu";
// import { Card, CustomInput, Badge } from "reactstrap";
// import { NavLink } from "react-router-dom";
// import classnames from "classnames";
// import { Colxx } from "./../../../components/common/CustomBootstrap";
import loader from './../img/loader.gif'
import RowLeftNav from "./RowLeftNav";

const product = [{id: 1, title: 'IR123453613', category: 'category', date: 'date', status: 'status'}, {
    id: 2,
    title: 'IR123453613asihf',
    category: 'دسته بندی',
    date: 'date',
    status: 'status'
}, {id: 3, title: 'IR123453619814598', category: 'category', date: 'date', status: 'status'}

];

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state={
            Rowid:''
        }
    }

    GetClick(id){
        // console.log('id');
        // console.log(id)
        this.setState({
            Rowid:id
        })
    }
    render() {
        let{Rowid}=this.state;
        return (
           <div className='col-2 float-right  '>
               <div  className='d-flex align-items-center height10vh topnavborder justify-content-center' dir='rtl'>
                   <h5 className=' fontSize'>شماره سفارش ها </h5>
               </div>
               {product?product.map((todo ,index)=><div className=" mt-3" key={index}><RowLeftNav key={index} product={todo} index={index} click={this.GetClick.bind(this)} active={todo['id']===Rowid} ids={todo['id']} /></div> ):
                   <div className='d-flex' ><img src={loader} alt={loader} className='loader'/></div>
               }

           </div>
        );
    }
}

export default LeftNav;
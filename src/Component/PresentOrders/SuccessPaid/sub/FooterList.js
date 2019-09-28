import React, {Component} from 'react';
import { Card, CustomInput, Badge } from "reactstrap";


class FooterList extends Component {

    render() {
        let{Kind}=this.props;
        return (
            <div className='footerList d-flex align-items-center flex-fill' style={{height: '9vh'}}>

                    <h5 dir='rtl' className='ml-5'>جمع کل: <span>1231546</span></h5>
                {
                    Kind==='insert'?<button className="default  btn btn-primary ml-auto mr-4"><span>اعلام جمع آوری</span></button>:''
                }
                {
                    Kind==='collect'?<button className="default  btn btn-info ml-auto mr-4" onClick={()=>this.props.Action(true)}><span>تحویل به پیک</span></button>:''
                }



            </div>
        );
    }
}

export default FooterList;
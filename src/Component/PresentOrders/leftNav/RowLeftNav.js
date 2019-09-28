import React, {Component} from 'react';

import {ContextMenuTrigger} from "react-contextmenu";
import { Card, CustomInput, Badge,Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { Colxx } from "../../../components/common/CustomBootstrap";
// const product={id:1,title:'title',category:'category',date:'date',status:'status'};

class RowLeftNav extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     active:false
        // }
    }

    onCheckItem(e,id){
        // this.setState(prevState => ({
        //     active:!prevState.active
        // }));
        this.props.click(id)
    }
    render() {
        let{product,active,ids}=this.props;
        console.log(active);
        console.log(ids);

        return (
            <div className='100 '  onClick={event => this.onCheckItem(event, product.id)} dir='rtl'>
                {
                    active?
                        <Card

                            className={classnames("d-flex flex-row", {
                                active: active
                            })}
                        >
                            <div className=" d-flex flex-grow-1 ">
                                <div className="card-body align-self-center d-flex flex-column flex-row justify-content-between  align-items-center w-sm-100">
                                    {/*<div className="w-40 w-sm-100">*/}
                                        {/*<Button outline color="secondary" className="mb-2 w-100">*/}
                                            {/*print*/}
                                        {/*</Button>{" "}*/}
                                    {/*</div>*/}
                                    <NavLink to={`?p=${product.id}`} className="w-sm-100" dir='rtl'>
                                        <p className="fS1vw mb-1 truncate float-right ListOrderFont ">
                                            {product.title}
                                        </p>
                                    </NavLink>
                                </div>
                            </div>
                        </Card>
                        :
                        <div className=" d-flex flex-grow-1 min-width-zero">
                            <div className="card-body align-self-center d-flex flex-column flex-row justify-content-between  align-items-center w-sm-100">
                                {/*<div className="w-40 w-sm-100">*/}
                                    {/*<Button outline color="primary" className="mb-2 w-100">*/}
                                        {/*print*/}
                                    {/*</Button>{" "}*/}

                                {/*</div>*/}
                                <NavLink to={`?p=${product.id}`} className=" w-sm-100 " >
                                    <p className="fS1vw mb-1 truncate float-right">
                                        {product.title}
                                    </p>
                                </NavLink>

                            </div>
                        </div>

                }


                {/*</ContextMenuTrigger>*/}
            </div>
        );
    }
}

export default RowLeftNav;
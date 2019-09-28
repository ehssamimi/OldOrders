import React, {Component} from 'react';
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    Row,
    Card,
    CardBody,
    CardTitle,
    Nav,
    NavItem,
    TabContent,
    TabPane
} from "reactstrap";

import IntlMessages from "../../src/helpers/IntlMessages";
import { Colxx, Separator } from "../../src/components/common/CustomBootstrap";
import {NavLink} from "react-router-dom";
import classnames from "classnames";


class TopHeder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checkedCheckboxes: [],
            checkedCheckboxes: 1,
        };
    }
    componentDidMount(){
        // console.log(window.location.href)
        console.log(this.props)
    }
    checkButtonCheck = i => {
        // const index = this.state.checkedCheckboxes.indexOf(i);
        // if (index === -1) {
        //     this.state.checkedCheckboxes.push(i);
        // } else {
        //     this.state.checkedCheckboxes.splice(index, 1);
        // }
        this.setState({ checkedCheckboxes: i });
    };
    render() {
        console.log(this.state.checkedCheckboxes);
        return (


                                            <div className="align-items-center " dir='rtl'>


                                                <NavLink
                                                    to="/orders/success"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(1)}
                                                        // active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                                                        active={this.state.checkedCheckboxes === 1}
                                                    >
                                                        <IntlMessages id="پرداخت موفق"/>
                                                    </Button>
                                                </NavLink>
                                                <NavLink
                                                    to="/orders/sabt"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(2)}
                                                        active={this.state.checkedCheckboxes === 2}

                                                        // active={this.state.checkedCheckboxes.indexOf(3) !== -1}
                                                    >
                                                        <IntlMessages id="ثبت شده ها"/>
                                                    </Button>
                                                </NavLink>
                                                <NavLink
                                                    to="/orders/collect"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(3)}
                                                        // active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                                                        active={this.state.checkedCheckboxes === 3}
                                                    >
                                                        <IntlMessages id="جمع آوری در انبار"/>
                                                    </Button>
                                                </NavLink>
                                                <NavLink
                                                    to="/orders/waiting-accept-chichi"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(4)}
                                                        active={this.state.checkedCheckboxes === 4}

                                                        // active={this.state.checkedCheckboxes.indexOf(3) !== -1}
                                                    >
                                                        <IntlMessages id="منتظر تایید پیک"/>
                                                    </Button>
                                                </NavLink>
                                                <NavLink
                                                    to="/orders/chichi-on-go"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(5)}
                                                        active={this.state.checkedCheckboxes === 5}

                                                    >
                                                        <IntlMessages id="پیک در حال حرکت"/>
                                                    </Button>
                                                </NavLink>
                                                <NavLink
                                                    to="/orders/chichi-waiting-customer"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(6)}
                                                        active={this.state.checkedCheckboxes === 6}

                                                    >
                                                        <IntlMessages id="پیک منتظر گیرنده"/>
                                                    </Button>
                                                </NavLink>
                                                <NavLink
                                                    to="/orders/delivered"
                                                >
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        className="mb-2 ml-2"
                                                        onClick={() => this.checkButtonCheck(7)}
                                                        active={this.state.checkedCheckboxes === 7}

                                                    >
                                                        <IntlMessages id="مرسوله تحویل داده شد"/>
                                                    </Button>
                                                </NavLink>


                                            </div>


        );
    }
}

export default TopHeder;
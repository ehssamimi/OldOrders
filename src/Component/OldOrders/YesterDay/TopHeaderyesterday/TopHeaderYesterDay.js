import React, {Component} from 'react';
import IntlMessages from "../../../../../src/helpers/IntlMessages";
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

class TopHeaderYesterDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checkedCheckboxes: [],
            checkedCheckboxes: 1,
        };
    }
    componentDidMount(){
        console.log(this.props)
    }
    checkButtonCheck = i => {
        this.setState({ checkedCheckboxes: i });
        this.props.changeField(i)
    };
    render() {
        return (

                <div className=" w-100  d-flex justify-content-center" dir='rtl'>
                    <Button
                        outline
                        color="primary"
                        className="mb-2 ml-2"
                        onClick={() => this.checkButtonCheck(1)}
                        // active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                        active={this.state.checkedCheckboxes === 1}
                    >
                        <IntlMessages id="موفق"/>
                    </Button>

                    <Button
                        outline
                        color="primary"
                        className="mb-2 ml-2"
                        onClick={() => this.checkButtonCheck(2)}
                        // active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                        active={this.state.checkedCheckboxes === 2}
                    >
                        <IntlMessages id="ناموفق"/>
                    </Button>

                </div>
        );
    }
}

export default TopHeaderYesterDay;
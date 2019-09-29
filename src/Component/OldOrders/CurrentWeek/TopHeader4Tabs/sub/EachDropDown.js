import React, {Component} from 'react';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import IntlMessages from "../../../../../helpers/IntlMessages";

class EachDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedCheckboxes: 1,
            dropdownBasicOpen: props.isOpen,
            header:props.header
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            dropdownBasicOpen:props.isOpen,
            header:props.header
        })
    }
    toggleBasic = () => {
        this.setState(prevState => ({
            dropdownBasicOpen: !prevState.dropdownBasicOpen
        }));
        this.props.HeadersCheckBox(this.props.label)
    };
    checkButtonCheck = i => {
        this.setState(prevState => ({
            dropdownBasicOpen: !prevState.dropdownBasicOpen
        }));
        this.setState({ checkedCheckboxes: i });
        this.props.GetPropertise(this.state.header,i );
        let header='';
        if (i === 1) {
            header=this.props.header+' / موفق';
            this.setState(prevState => ({
                header
            }))
        } else {
            header=this.props.header+' /  ناموفق';
            this.setState(prevState => ({
                header
            }))
        }
    };
    render() {
        return (
            <div className='w-100'>
                <Dropdown
                    isOpen={this.state.dropdownBasicOpen}
                    className="mb-5 w-100"
                >

                    <DropdownToggle caret color="secondary" outline  onClick={this.toggleBasic}
                    >
                        <IntlMessages id={this.state.header} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <div className='w-100 d-flex justify-content-center'>
                            <Button
                                outline
                                color="primary"
                                className="col-9 "
                                onClick={() => this.checkButtonCheck(1)}
                                active={this.state.checkedCheckboxes === 1}
                            >
                                <IntlMessages id="موفق "/>
                            </Button>
                        </div>


                        <DropdownItem divider />

                        <div className='w-100 d-flex justify-content-center'>
                            <Button
                                outline
                                color="primary"
                                className="col-9 "
                                onClick={() => this.checkButtonCheck(2)}
                                active={this.state.checkedCheckboxes === 2}
                            >
                                <IntlMessages id="نا موفق"/>
                            </Button>
                        </div>

                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default EachDropDown;
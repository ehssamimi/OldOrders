import React, {Component} from 'react';
import { Row } from "reactstrap";
import Select from "react-select";
import IntlMessages from "../../../../../../../helpers/IntlMessages";
import CustomSelectInput from "../../../../../../../components/common/CustomSelectInput";
import { Colxx } from "../../../../../../../components/common/CustomBootstrap";
const selectData = [
    { label: "جدیدترین ها ", value: "new" },
    { label: "قدیمی ترین ها ", value: "old" },
    { label: "گران ترین ها  ", value: "expensive" },
    { label: "ارزان ترین ها  ", value: "cheap" },
];

class SelectComponentCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption }
        );
        this.props.changeMode(selectedOption.value)
    };
    render() {
        return (
            <div className='col-7 paddingZero'>
                <Row>
                    {/*<Colxx xxs="12" md="6" className="mb-5">*/}

                    <div className='col-sm-12 form-group paddingZero mb-0'>
                        <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select fS08vw"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={selectData}
                        />
                    </div>

                    {/*</Colxx>*/}
                </Row>
            </div>
        );
    }
}

export default SelectComponentCategories;
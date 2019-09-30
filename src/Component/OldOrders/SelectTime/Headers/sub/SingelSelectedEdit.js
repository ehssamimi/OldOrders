import React, {Component} from 'react';
import IntlMessages from "../../../../../helpers/IntlMessages";
import CustomSelectInput from "../../../../../components/common/CustomSelectInput";
import Select from "react-select";

class SingelSelectedEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption }
        );
        this.props.GetDataSelected(selectedOption.value,this.props.label)
    };
    render() {
        return (
            <div className='w-100 form-group has-float-label'>
                <label>
                    <IntlMessages id={this.props.title} />
                </label>
                <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="form-field-name"
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.props.selectData}
                />
            </div>
        );
    }
}

export default SingelSelectedEdit;
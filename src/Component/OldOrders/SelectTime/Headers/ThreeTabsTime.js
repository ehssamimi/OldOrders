import React, {Component} from 'react';
// import { Row } from "reactstrap";
// import Select from "react-select";
// import IntlMessages from "../../../../helpers/IntlMessages";
// import CustomSelectInput from "../../../../components/common/CustomSelectInput";
// import { Colxx } from "../../../../components/common/CustomBootstrap";
import SingelSelectedEdit from "./sub/SingelSelectedEdit";
const selectData = [
    { label: "1398", value: "1398" },
    { label: "1399", value: "1399" },
    { label: "1400", value: "1400" },
];
const Month = [
    { label: "فروردین", value: "farvardin" },
    { label: "اردیبهشت", value: "ordibehesht" },
    { label: "خرداد", value: "khordad" },
];
const Week = [
    { label: "هفته اول", value: "هفته اول" },
    { label: "هفته دوم", value: "هفته دوم" },
    { label: "هفته سوم", value: "هفته سوم" },
];
class ThreeTabsTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption }
        );
        // this.props.changeMode(selectedOption.value)
    };
    GetDataSelected(value,Label){
        console.log(value);
        console.log(Label);
    }
    render() {
        return (
            <div dir='rtl' className='w-100 d-flex'>
                {/*<Row>*/}
                    {/*<Colxx xxs="12" md="6" className="mb-5">*/}
                    {/*<div className=' form-group has-float-label'>*/}


                        {/*<label>*/}
                            {/*<IntlMessages id="سال" />*/}
                        {/*</label>*/}
                        {/*<Select*/}
                            {/*components={{ Input: CustomSelectInput }}*/}
                            {/*className="react-select"*/}
                            {/*classNamePrefix="react-select"*/}
                            {/*name="form-field-name"*/}
                            {/*value={this.state.selectedOption}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*options={selectData}*/}
                        {/*/>*/}
                    {/*</div>*/}

                    {/*</Colxx>*/}
                    <div className='col-4'>
                        <SingelSelectedEdit selectData={selectData} GetDataSelected={this.GetDataSelected.bind(this)} label='year' title='سال'/>
                    </div>
                    <div className='col-4'>
                        <SingelSelectedEdit selectData={Month} GetDataSelected={this.GetDataSelected.bind(this)} label='month' title='ماه'/>
                    </div>
                    <div className='col-4'>
                        <SingelSelectedEdit selectData={Week} GetDataSelected={this.GetDataSelected.bind(this)} label='Week' title='هفته'/>
                    </div>
                {/*</Row>*/}
            </div>
        );
    }
}

export default ThreeTabsTime;
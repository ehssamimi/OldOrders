import React, {Component} from 'react';
import AutoSuggestEdit from "../../AutoSuggestEdit/AutoSuggestEdit";
import cakes from "../../../../../data/cakes";
import {CustomInput, FormGroup, InputGroup, Label} from "reactstrap";
import IntlMessages from "../../../../../helpers/IntlMessages";

// import { Row } from "reactstrap";
import Select from "react-select";
import { Colxx } from "../../../../../components/common/CustomBootstrap";
// import IntlMessages from "../../helpers/IntlMessages";
import CustomSelectInput from "../../../../../components/common/CustomSelectInput";
import CropImgCropper from "../../CropImg/CropImgCropper";

const selectData = [
    { label: "Cake", value: "cake", key: 0 },
    { label: "Cupcake", value: "cupcake", key: 1 },
    { label: "Dessert", value: "dessert", key: 2 }
];
const rightData = cakes.map(item => {
    return {name: item.title}
});
class FormAddSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };


    handelChange(e, value){
        this.setState({value:value});

        //
        // if (value.length>0) {
        //     let headers = {
        //         'Id': `${Const.ID}`,
        //         'Token': `${Const.Token}`
        //     };
        //     axios.get(`${Const.URL}admin/gameitem/search/${value}`,{headers:headers}).then(responsive=>
        //     {
        //         const {Description} = responsive.data;
        //         // console.log(`https://resource.themaddays.com/admin/gameitem/search/${value}`);
        //
        //         let index;let Device=[];
        //         let Data=JSON.parse(Description);
        //
        //         for (index in Data){
        //             Device.push({title:Data[index].Name ,id:Data[index]._id,Tag:Data[index].Tag,ChanceType:Data[index].ChanceType,Key:Data[index].Key})
        //         }
        //
        //         let dict = {};
        //         for (index in Data){
        //             let id =Data[index].Key;
        //             let Value =Data[index]._id;
        //             dict[id] = Value;
        //             // dict[Value] = id;
        //         }
        //
        //         let DATA=[];
        //         Device.map(item => {
        //             // DATA.push({name: item.title})
        //             DATA.push({name: item.Key})
        //         });
        //         this.setState({
        //             Device,
        //             DATA,dict,originalData:Data
        //         })
        //
        //     }).catch(error=>{console.log(error)});
        // }

    }

    render() {

        return (
            <div className='col-12'>


                <FormGroup className="form-group  position-relative has-float-label w-100 ">
                    <label>
                        <IntlMessages id="select" />
                    </label>
                    <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={selectData}
                    />
                </FormGroup>
                {/*<FormGroup className="form-group  position-relative has-float-label w-100 ">*/}
                        {/*<Label>*/}
                            {/*<IntlMessages id={'نوع محصول'} />*/}
                        {/*</Label>*/}

                        {/*<AutoSuggestEdit*/}
                            {/*placeholder={"type item name"}*/}
                            {/*data={rightData}*/}
                            {/*onChange={value => this.handelChange(this, value)*/}
                            {/*}*/}
                        {/*/>*/}
                {/*</FormGroup>*/}
                <CropImgCropper label='عکس اول' aspect={3/2} GetImgFile={this.GetImgFile.bind(this)}/>



            </div>
        );
    }
}

export default FormAddSlider;
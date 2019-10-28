import React, {Component} from 'react';
import { Row } from "reactstrap";
import Select from "react-select";
import IntlMessages from "../../../../helpers/IntlMessages";
import CustomSelectInput from "../../../../components/common/CustomSelectInput";
import { Colxx } from "../../../../components/common/CustomBootstrap";
import * as Const from "../../../../constants/ServerConst";
import {GetCategoriesAll, GetDestination} from './../../../../Component/functions/ServerConnection'



// const selectData = [
//     { label: "Cake", value: "cake", key: 0 },
//     { label: "Cupcake", value: "cupcake", key: 1 },
//     { label: "Dessert", value: "dessert", key: 2 }
// ];
class Destination extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedOption: "",selectData:[]
        };
    }
    // async componentDidMount(){
    //   await console.log( ) ;
    // }
    async componentDidMount(){
        let Destination = await GetDestination();
        let selectData = [];
        for (let i = 0; i < Destination.ValidDestination.length; i++) {
            // console.log(Destination.ValidDestination[i]);
            let row = {label: Destination.ValidDestination[i], value: Destination.ValidDestination[i], key: i};
            selectData.push(row);
        }
        this.setState({
            selectData
        })

        // console.log(Destination);
        // this.setState({
        //     CategoriesList
        // });
        // console.log(CategoriesList[0].Items[0].Image);
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption },()=>{
            this.props.GetDestinationString(selectedOption.value)
        });
    };


    render() {
        let{selectData}=this.state;

        return (

                <Colxx xxs="12"   className="mb-5 form-group  position-relative has-float-label">
                    <label>
                        <IntlMessages id="Destination" />
                    </label>
                    <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select w-100"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={selectData}
                    />
                </Colxx>

        );
    }
}

export default Destination;
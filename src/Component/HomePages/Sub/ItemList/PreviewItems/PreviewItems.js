import React, {Component} from 'react';
import {GetItemList,GetItemDetail} from "../../../../functions/ServerConnection";
import SliderItems from "./SliderItems/SliderItems";

class PreviewItems extends Component {
    constructor(props) {
        super(props);
this.state={
    items:null
}
    }

    async componentDidMount(){
        let Name='arsenal';

        let Destination = await GetItemDetail(Name);
        console.log(Destination)
        this.setState({
            items:Destination
        })
        // CurrentPrice: 900
        // Images: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e"
        // Name: "برنج ایسوس↵"
        // Off: {Enable: true, Percentage: 0.1}
        // PrevPrice: 1000
        // _id: "5d907a3a007049cfe08e3f8a"
        // __proto__: Object


        // let selectData = [];
        // for (let i = 0; i < Destination.length; i++) {
        //     let row = {label: Destination[i], value: Destination[i], key: i};
        //     selectData.push(row);
        // }
        // this.setState({
        //     selectData
        // })
    }
    render() {
        let{items}=this.state;
        return (
            <div>{
                items?<SliderItems items={items}/>:''
            }
                {/*<SliderItems/>*/}
            </div>
        );
    }
}

export default PreviewItems;
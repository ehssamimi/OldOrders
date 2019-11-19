import React, {Component} from 'react';
import AddItemList from "./AddItems/AddItemList";
import {addItemList, GetAllItemList, GetItemDetail} from "../../../functions/ServerConnection";
import PreviewItems from "./PreviewItems/PreviewItems";
import HomePagePreview from "../../Main/Edit/HomePagePreview";
import PreviewPackages from "../WonderPackageAddHomePage/subPackage/PreviewPackages";


class MainItems extends Component {
    constructor(props) {
        super(props);
        this.state={
            itemLists:[]
        };


    }
    async componentDidMount(){
        let itemLists = await GetAllItemList( );
        console.log(itemLists);
        this.setState({
            itemLists
        })
    }

    async GetItemsValue(payload) {
        console.log(payload.Title);
        console.log(payload.QueryKey);
        let value = await addItemList(payload.Title, payload.QueryKey);
        console.log(value)
    }
    async  ClickEdit(Name){
       let  Value = await GetItemDetail(Name);
        console.log(Value);
    }


    render() {
        let {itemLists}=this.state;
        return (
            <div className='d-flex'>
                <div className='col-6'>
                    <AddItemList GetItemsValue={this.GetItemsValue.bind(this)} />
                </div>
                <div className='col-6'>
                    {
                        itemLists.length>0?
                            itemLists.map((cat ,index)=><PreviewItems Title={cat.Title} key={index} {...this.props } clickPreview={this.ClickEdit.bind(this)} />):""
                    }
                 </div>
            </div>
        );
    }
}

export default MainItems;
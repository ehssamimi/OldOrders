import React, {Component} from 'react';
import AddItemList from "./AddItems/AddItemList";
import {addItemList} from "../../../functions/ServerConnection";
import PreviewItems from "./PreviewItems/PreviewItems";


class MainItems extends Component {
    constructor(props) {
        super(props);

    }

    async GetItemsValue(payload) {
        console.log(payload.Title);
        console.log(payload.QueryKey);
        let value = await addItemList(payload.Title, payload.QueryKey);
        console.log(value)
    }


    render() {
        return (
            <div className='d-flex'>
                <div className='col-6'>
                    <AddItemList GetItemsValue={this.GetItemsValue.bind(this)}/>
                </div>
                <div className='col-6'>
                    <PreviewItems/>

                </div>
            </div>
        );
    }
}

export default MainItems;
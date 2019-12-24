import React, {Component} from 'react';
import CategoryEachItems from "./SUb/CategoryEachItems/CategoryEachItems";
import { Colxx } from "../../../components/common/CustomBootstrap";
import {
    Row,
} from "reactstrap";
import {getAllCategoriesList} from './../../functions/ServerConnection'
import Loader from "../../HomePages/Sub/Loader/Loader";

class ContentCategoryAll extends Component {
    constructor(props) {
        super(props);
        this.state={
            CatList:[]
        }
    }

    async componentDidMount(){
        let CatList= await getAllCategoriesList();
        this.setState({
            CatList
        });
        console.log(CatList)
    }
    render() {
        let {CatList}=this.state;
        return (
                    <Row>
                        {CatList.length > 0 ?
                            CatList.map((itemData,key) => <Colxx xxs="12" md="6" lg="4" key={key}>
                                <CategoryEachItems data={itemData}/>
                            </Colxx>) :<Loader/>
                        }
                    </Row>
         );
    }
}

export default ContentCategoryAll;
import React, {Component} from 'react';
import { Card} from "reactstrap";
import RowShowShow from "../RowShowShow";
import {formatNumber} from './../functions/Functions'
import ShowModal from "../ShowModal";
import Main12 from "../CollectOrders/Main1-2";
// import HeaderList from "./sub/headerList";
// import FooterList from "./sub/FooterList";
// import MainOrderList from "./sub/MainOrderList";
// import ChchiMan from "../SabtOrders/sub/ChchiMan";




class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state={
            chichiMan:''
        }
    }

    GetPackageToChichiMan(chichiMan){
        this.setState({
            chichiMan
        })
    }
    render() {
        return (
            <div dir='rtl'>
                <Card className='OrderList p-3' >
                    {/*<HeaderList  recipe={true}/>*/}
                    {/*{this.state.chichiMan?  <ChchiMan/>:*/}
                        {/*<MainOrderList/>*/}
                    {/*}*/}
                    {/*<FooterList Kind={this.props.Kind} Action={this.GetPackageToChichiMan.bind(this) }/>*/}
                    <Main12/>


                </Card>
            </div>

        );
    }
}

export default OrderList;
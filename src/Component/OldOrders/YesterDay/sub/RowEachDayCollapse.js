import React, {Component} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import RowShowShow from "../../../PresentOrders/RowShowShow";
import RowCollapseOrders from "./RowCollapseOrders/RowCollapseOrders";

class RowEachDayCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true,store:'',sub:[],Keys:''};
    }

    // componentDidMount() {
    //     let {store} = this.props;
    //     let {sub} = store;
    //     let Keys;
    //     Keys=Object.keys(sub);
    //     this.setState({
    //         store, sub,Keys
    //     });
    //
    // }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        let{store,sub,Keys}=this.state;
        // console.log(Keys);
        return (
            <div className='mt-5 w-100'>
                {/*<Card>*/}
                {/*<CardBody>*/}

                        <div className=' align-items-center d-flex ' onClick={this.toggle} >
                            {
                                this.state.collapse?
                                    <h3 className='simple-icon-arrow-up icon-glyph ml-2 mb0'></h3>:
                                    <h3 className='simple-icon-arrow-down icon-glyph ml-2 mb0'> </h3>
                            }
                            <span className='fontFamily pl-2 Fs1vw'>لیست سفارش</span>
                            <span className='d-flex ml-auto ' dir='rtl'>
                                <h3 className=''>{this.props.Day}:</h3>
                            </span>

                        </div>
                <hr/>

                        <Collapse isOpen={this.state.collapse}>
                            <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                <RowCollapseOrders/>
                                <RowCollapseOrders/>
                                <RowCollapseOrders/>
                            </div>
                        </Collapse>
                    {/*</CardBody>*/}

                {/*</Card>*/}

            </div>
        );
    }
}

export default RowEachDayCollapse;
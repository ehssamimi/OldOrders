import React, {Component} from 'react';
import {Collapse} from "reactstrap";
import RowShowShow from "../../../../../../PresentOrders/RowShowShow";
import {formatNumber} from './../../../../../../functions/Functions'
import RowEachProduct from "../../UserBascket/sub/RowEachProduct";
import ax from "../../../../../../../assets/img/thumb-2.jpg";

class SingleUserOrder extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,store:'',sub:[],Keys:''};
    }

    componentDidMount() {
        // let {store} = this.props;
        // let {sub} = store;
        // let Keys;
        // Keys=Object.keys(sub);
        // this.setState({
        //     store, sub,Keys
        // });

    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        let{store,sub,Keys}=this.state;
        // console.log(Keys);
        return (
            <div className='mt-5 col-12'>
                {/*<Card>*/}
                {/*<CardBody>*/}
                <div className='d-flex justify-content-start align-items-center ' onClick={this.toggle} >
                    {
                        this.state.collapse?
                            <h3 className='simple-icon-minus icon-glyph ml-2'/>
                            :
                            <h3 className='simple-icon-plus icon-glyph ml-2'/>

                    }
                    <h3 className='purpleColor'>{'جزئیات سفارش'}:</h3>
                </div>
                <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                    <RowShowShow label={'مبلغ کل پرداختی'} value={formatNumber(230000000)} />
                    <RowShowShow label={'تخفیف کل'} value={formatNumber(50000)} />
                    <RowShowShow label={'نوع پرداخت'} value={'نقدی'} />
                    <RowShowShow label={'کد رهگیری بانک'} value={'3215-564-534'} />
                    <RowShowShow label={'هزینه سبد'} value={formatNumber(2315464)} />
                    <RowShowShow label={'هزینه ارسال'} value={formatNumber(20000)} />

                    {/*{Keys ?*/}
                    {/*Keys.map((todo, index) =>*/}
                    {/*<RowShowShow label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-4'}/>*/}
                    {/*) : ''*/}
                    {/*}*/}
                </div>

                <Collapse isOpen={this.state.collapse} className='mt-3'>
                    <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                    <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                    <RowEachProduct id={'1'} ax={ax} name={'name'} number={25} per={5} all={250000}/>
                    {/*<div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>*/}
                                           {/**/}
                        {/*/!*{Keys ?*!/*/}
                        {/*/!*Keys.map((todo, index) =>*!/*/}
                            {/*/!*<RowShowShow label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-4'}/>*!/*/}
                        {/*/!*) : ''*!/*/}
                    {/*/!*}*!/*/}
                    {/*</div>*/}
                </Collapse>
                {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default SingleUserOrder;
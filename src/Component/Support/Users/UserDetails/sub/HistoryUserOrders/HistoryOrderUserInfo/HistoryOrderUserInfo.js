import React, {Component} from 'react';
import {Collapse} from "reactstrap";
import RowShowShow from "../../../../../../PresentOrders/RowShowShow";
import {formatNumber} from './../../../../../../functions/Functions'
import RowEachProduct from "../../UserBascket/sub/RowEachProduct";
import ax from "../../../../../../../assets/img/thumb-2.jpg";
import RowShowShowColEdit from "../../RowShowShowColEdit/RowShowShowColEdit";
import ShowShowline from "../../Support/sub/ReportUserBox/ShowShowLine/ShowShowline";

class HistoryOrderUserInfo extends Component {
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
                    <h3 className='purpleColor'>{'اطلاعات گیرنده'}:</h3>
                </div>


                <Collapse isOpen={this.state.collapse} className='mt-3'>
                    <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>

                        <RowShowShowColEdit label={'عنوان آدرس'} value={'خونه'} col='col-4'/>
                        <RowShowShowColEdit label={'نام و نام خانوادگی'} value={'احسان صمیمی راد'} col='col-4' />
                        <RowShowShowColEdit label={'شماره موبایل گیرنده'} value={'09112567101'} col='col-4'/>
                        <ShowShowline label={'آدرس'} value={'ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116ساری میدان امام کوی پاسدار کوچه سوم پاسدار ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116116'} col='col-12'/>
                        <ShowShowline label={'آدرس از نقشه'} value={'ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116ساری میدان امام کوی پاسدار کوچه سوم پاسدار ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116116'} col='col-12'/>
                        {/*<RowShowShowColEdit />*/}
                        {/*<RowShowShowColEdit label={'آدرس از نقشه'} value={'ساری میدان امام کوی پاسدار کوچه سوم پاسدار 116'} col='col-12' />*/}


                        {/*{Keys ?*/}
                        {/*Keys.map((todo, index) =>*/}
                        {/*<RowShowShow label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-4'}/>*/}
                        {/*) : ''*/}
                        {/*}*/}
                    </div>
                </Collapse>
                {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default HistoryOrderUserInfo;
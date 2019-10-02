import React, {Component} from 'react';
import {Collapse} from "reactstrap";
import ShowShowline from "../Support/sub/ReportUserBox/ShowShowLine/ShowShowline";
import img from './../../../../../../assets/img/Emoji/enable/1.svg';

class VoteChichiInUserHistory extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,store:'',sub:[],Keys:'',Vote:{}};

    }

    componentDidMount() {
        // let {store} = this.props;
        // let {sub} = store;
        // let Keys;
        // Keys=Object.keys(sub);
        // this.setState({
        //     store, sub,Keys
        // });
        let Vote={'header':"نظرسنجی",'sub':{'نظر کلی':'sad','نقاط ضعف':'نداریم','نقاط قوت':"برخورد مناسب پیک ، تسریع دریافت ، بسته بندی مناسببرخورد مناسب پیک ، تسریع دریافت ، بسته بندی مناسب "}};
   this.setState({
       Vote
   })

    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        // let{store,sub,Keys}=this.state;
        let{Vote}=this.state;
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
                    <h3 className='purpleColor'>{Vote.header}:</h3>
                </div>

                <Collapse isOpen={this.state.collapse}>
                    <div className=''>
                        <div className='align-items-center w-100 h-100 d-flex'  dir='rtl' style={{'flex-wrap': 'wrap'}}>

                                    {/*<div className='col-3 d-flex h-100 align-items-center height10vh'>*/}
                                            {/*<span className='collapseValue gray spanWithOutBreak '>{'نظر کلی'} <span*/}
                                                {/*className='pl-2'>:</span></span>*/}
                                        {/*<div className='h-100 d-flex align-items-center'>*/}
                                            {/*<img src={img}/>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                            <ShowShowline label={'نظر کلی'} value={'bad'}   className='d-flex align-items-center height10vh ' col={'col-3'}/>



                            <ShowShowline label={'نقاط قوت'} value={'برخورد مناسب پیک ، تسریع دریافت ، بسته بندی مناسببرخورد منا بسته بندی مناسب'}   className='d-flex align-items-center height10vh ' />
                                    <ShowShowline label={'نقاط ضعف'} value={'برخورد مناسب پیک ، تسریع دریافت ، بسته بندی مناسبب '}    className='d-flex align-items-center height10vh mr-2' />
                                {/*</div>*/}

                            </div>
                        <div className='clearfix'></div>

                            {/*<ShowShowline label={todo} value={sub[todo]} key={index} col={'col-4'} className='fS1vw'/>*/}
                            {/*<ShowShowline label={todo} value={sub[todo]} key={index} col={'col-4'} className='fS1vw'/>*/}

                            {/*<ShowShowline label={todo} value={sub[todo]} key={index} col={'col-4'} className='fS1vw'/>*/}

                        {/*</div>*/}
                    </div>

                </Collapse>
                <div className='clearfix'></div>

                {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default VoteChichiInUserHistory;
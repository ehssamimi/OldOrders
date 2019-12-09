import React, {Component} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";

import ShowShowline from "../../../Support/Users/UserDetails/sub/Support/sub/ReportUserBox/ShowShowLine/ShowShowline";
import ShowLineUserReport from "./ShowLineUserReport/ShowLineUserReport";


class CardUserBugReport extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true ,store:'',sub:[],Keys:''};
    }

    componentDidMount() {
        let {store} = this.props;
        let {sub} = store;
        let Keys;
        Keys=Object.keys(sub);
        this.setState({
            store, sub,Keys
        });
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.collapse){
    //         if (props.collapse !== state.collapse) {
    //             return {
    //                 collapse: props.collapse,
    //             };
    //         }
    //         // Return null if the state hasn't changed
    //         return null
    //     }
    //
    // }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        let{store,sub,Keys}=this.state;
        // console.log(Keys);
        return (
            <div className='mt-5 col-12  ' dir='rtl'>
                {/*<Card>*/}
                {/*<CardBody>*/}
                <div className='d-flex justify-content-start align-items-center ' onClick={this.toggle} >
                    {
                        this.state.collapse?
                            <h3 className='simple-icon-minus icon-glyph ml-2'/>
                            :
                            <h3 className='simple-icon-plus icon-glyph ml-2'/>
                    }
                    <div className='d-flex col-12   flex-wrap  justify-content-start  p-0'  >

                                <ShowLineUserReport  value={store.sub} className='fS1vw purpleColor'/>

                    </div>
                    {/*<h3 className='purpleColor'>{store.header}:</h3>*/}
                </div>

                <Collapse isOpen={this.state.collapse} >
                    <div className='d-flex w-100 mt-2'>
                        <div className='d-flex  col-12 flex-wrap   '  >
                            <ShowShowline label={"متن گزارش"} value={store.header}  col={ 'col-12'  } className='fS1vw'/>
                            {/*{Keys ?*/}
                                {/*Keys.map((todo, index) =>*/}
                                    {/*<ShowShowline label={todo} value={sub[todo]} key={index} col={ todo==='متن گزارش'?'col-12':'col-4' } className='fS1vw'/>*/}
                                {/*) : ''*/}
                            {/*}*/}
                        </div>
                        {/*<div className='col-12 h-20vh d-flex flex-column align-items-center justify-content-center'>*/}


                        {/*</div>*/}
                    </div>

                </Collapse>
                {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default CardUserBugReport;
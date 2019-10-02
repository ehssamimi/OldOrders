import React, {Component} from 'react';
import {Collapse} from "reactstrap";
import FavoriteUserItemsMain from "../UserFavorite/Sub/FavoriteUserItemsMain";
import ChichiListeningMain from "./Sub/ChichiListeningMain";

class Chichilistening extends Component {
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
                    <h3 className='purpleColor'>{'چی چی میشنوه '}:</h3>
                </div>

                <Collapse isOpen={this.state.collapse}>
<ChichiListeningMain/>

                </Collapse>

                {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default Chichilistening;
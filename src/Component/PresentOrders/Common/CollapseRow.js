import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import RowShowShow from "../RowShowShow";
import ShowShowline from "../../Support/Users/UserDetails/sub/Support/sub/ReportUserBox/ShowShowLine/ShowShowline";

class CollapseRow extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false,store:'',sub:[],Keys:''};
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
                            <h3 className='purpleColor'>{store.header}:</h3>
                        </div>

                        <Collapse isOpen={this.state.collapse}>
                            <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                {Keys ?
                                    Keys.map((todo, index) =>
                                        <ShowShowline label={todo} value={sub[todo]} key={index} col={'col-4'} className='fS1vw'/>
                                    ) : ''
                                }
                            </div>
                        </Collapse>
                    {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default CollapseRow;
import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import RowShowShow from "../RowShowShow";

class CollapseRow extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true,store:'',sub:[],Keys:''};
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
            <div className='mt-2 w-100'>
                <Card>
                    <CardBody>
                        <div className='d-flex justify-content-start align-items-center ' onClick={this.toggle} >
                            {
                                this.state.collapse?
                                    <h3 className='simple-icon-minus icon-glyph ml-2'/>
                                    :
                                    <h3 className='simple-icon-plus icon-glyph ml-2'/>

                            }
                            <h3>{store.header}:</h3></div>
                        <Collapse isOpen={this.state.collapse}>
                            <div className='d-flex  w-100 ' style={{'flex-wrap': 'wrap'}}>
                                {Keys ?
                                    Keys.map((todo, index) =>
                                        <RowShowShow label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-4'}/>
                                    ) : ''
                                }
                            </div>
                        </Collapse>
                    </CardBody>

                </Card>

            </div>
        );
    }
}

export default CollapseRow;
import React, {Component} from 'react';
import {Card, CardBody, Collapse} from "reactstrap";
import AddressInfo from "../../../../Support/Users/UserDetails/sub/Addresses/Address/AddressInfo";

class SubCategoryElement extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapse: false
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        // let {orderInfo} = this.state;
        // let {sub} = orderInfo;
        // let Keys;
        // Keys=Object.keys(sub);
        // this.setState({
        //     sub,Keys
        // });

    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
        return (
            <div className='mt-3 w-100' dir='rtl' >
                <Card>
                    <CardBody>
                        <div className='mt-2 w-100' onClick={this.toggle}>
                            <div className='d-flex justify-content-start align-items-center '  >
                                {
                                    this.state.collapse?
                                        <h3 className='simple-icon-minus icon-glyph  mb0 ml-1 '/>
                                        :
                                        <h3 className='simple-icon-plus icon-glyph  mb0  ml-1'/>

                                }

                                <h3 className='mb0 '>آدرس ها</h3>

                            </div>
                        </div>
                        <Collapse isOpen={this.state.collapse}>
                            <div className='d-flex  w-100 mt-3 ' style={{'flex-wrap': 'wrap'}}>
                                <div dir='rtl' className='w-100'>
                                    {/*<Card className='OrderList p-3'>*/}
                                    <div className=' justify-content-start flex-column '>
                                        <p>a</p>
                                        <p>a</p>
                                        <p>a</p>
                                    </div>
                                    {/*</Card>*/}

                                </div>
                            </div>
                        </Collapse>
                    </CardBody>

                </Card>
            </div>
        );
    }
}

export default SubCategoryElement;
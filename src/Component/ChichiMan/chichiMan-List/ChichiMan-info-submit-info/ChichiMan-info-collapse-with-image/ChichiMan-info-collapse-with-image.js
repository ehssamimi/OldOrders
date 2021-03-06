import React, {Component} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
 import ShowShowline from "../../../../Support/Users/UserDetails/sub/Support/sub/ReportUserBox/ShowShowLine/ShowShowline";
import { FaUserEdit } from "react-icons/fa";
import {NavLink} from "react-router-dom";

class
ChichiManInfoCollapseWithImage extends Component {
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
        let{image,className,label}=this.props;


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
                    <h3 className={this.props.color||"purpleColor"}>{store.header}:</h3>
                    <NavLink to={`/chichi-man/sign-in/${this.props.id}/${this.props.step}`}>
                    <div  className=' mr-auto h3-style'>
                        <FaUserEdit/>
                    </div>
                    </NavLink>
                    {/*<h3 className='simple-icon-plus icon-glyph ml-auto'/>*/}

                </div>

                <Collapse isOpen={this.state.collapse}>
                    <div>
                        <div className='d-flex  w-100 flex-wrap '  >
                            {Keys ?
                                Keys.map((todo, index) =>
                                    <ShowShowline label={todo} value={sub[todo]} key={index} col={ todo==='آدرس'?'col-12':this.props.col||'col-4'} className='fS1vw'/>
                                ) : ''
                            }
                        </div>
                        <div className='d-flex mt-2  '>
                            {image.length>0 ?
                                image.map((todo, index) =>
                                    <div key={index} className={['h-30vh','d-flex','flex-column', 'mt-2' ,'align-items-center' , className || ''].join(' ')}>
                                        <label htmlFor={index}><ShowShowline label={'عکس'} value={label[index] }  col={ 'col-12'} className='fS1vw'/>
                                            </label>
                                        <img src={todo} alt={todo} className='img-self-fill'/>
                                    </div>
                                ) : ''
                            }
                        </div>
                    </div>

                </Collapse>
                {/*</CardBody>*/}

                {/*</Card>*/}
                <hr/>
            </div>
        );
    }
}

export default ChichiManInfoCollapseWithImage;
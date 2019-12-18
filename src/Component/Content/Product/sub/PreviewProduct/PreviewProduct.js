import React, {Component} from 'react';
import ax from "./../../../../../assets/img/Arsenal_FC.png";
import {Card, CardBody} from 'reactstrap'
import RowShowShow from "../../../../PresentOrders/RowShowShow";
import RowShowShowColEdit from "../../../../Support/Users/UserDetails/sub/RowShowShowColEdit/RowShowShowColEdit";
import ThumbnailLetters from "../../../../../components/cards/ThumbnailLetters";
import {NavLink} from "react-router-dom";

class PreviewProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            sub:{},Main:{},Keys:[],
        }
    }

    componentDidMount(){
        let{sub,Main}=this.props;
        let Keys;
        Keys=Object.keys(sub);
        this.setState({
            sub,Keys,Main
        });
    }
    render() {
        let{sub,Keys,Main}=this.state;
        let {Off}=Main
        // Enable: true, Percentage: 0.1
        if (Off!==undefined) {
            console.log(Off['Enable']);
            console.log(Off['Percentage']);
        }else {
            console.log("hasent off")
        }


        return (
            <div className={['   h-40vh align-items-center  mt-1', this.props.class.length>1?this.props.class:"" ].join(' ')}>
                <NavLink to={`/content/product/each/info/${Main['id']}`} className="d-flex">
                     <Card className='d-flex flex-column h-100 align-items-center br-product w-100'>
                        <div className="h-20vh d-flex align-items-end  ">

                            <div className="bg-circle-product d-flex justify-content-center align-items-center position-relative">
                                <div className="ax-Product-circle">
                                    <img src={Main['Images']} alt={ax} className="img-self-fill"/>
                                </div>
                                {
                                    Off !== undefined ?
                                        Off['Enable'] ?
                                            <span
                                                className="badge2 badge-outline-success2 mb-1 mr-1 badge2-pill bg-off-Product  ">{Off['Percentage']*100} %</span>
                                            :
                                            ""
                                        : ""
                                }
                            </div>

                        </div>
                        <div className="h-20vh d-flex align-items-center justify-content-center flex-column w-100">
                            <p className="fs-13vw color-gray">{Main['name']}</p>
                            <div className=' w-100 '>
                                {
                                    Off !== undefined ?
                                        Off['Enable'] ?
                                            <div className='d-flex col-8 offset-2 '>
                                            <span className="fs-08vw color-gray lineOverText text-muted  "
                                                  dir='rtl'>{Main['PrevPrice']} تومن </span>
                                                <span className="fs-08vw color-gray   ml-auto"
                                                      dir='rtl'>{Main['CurrentPrice']} تومن </span>
                                            </div> :
                                            <div className='d-flex justify-content-center '>
                                                <p className="fs-08vw color-gray" dir='rtl'>{Main['CurrentPrice']} تومن </p>
                                            </div>

                                        : ""
                                }


                            </div>
                            <div className='d-flex  w-100 flex-wrap justify-content-center' dir='rtl'>
                                {Keys ?
                                    Keys.map((todo, index) =>
                                        <RowShowShowColEdit label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-6'} className='p-0 d-flex justify-content-center' />
                                    ) : ''
                                }


                            </div>
                        </div>


                    </Card>

                 </NavLink>




            </div>
        );
    }
}

export default PreviewProduct;
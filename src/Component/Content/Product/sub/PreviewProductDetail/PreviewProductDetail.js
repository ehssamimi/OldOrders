import React, {Component} from 'react';
import ax from "../../../../../assets/img/Arsenal_FC.png";
import {Card} from "reactstrap";
import {GetProductDetail}from './../../../../functions/ServerConnection'

class PreviewProductDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            id:''
        }
    }

      componentDidMount() {
        // console.log(this.props);
        // const {match: {params}} = this.props;
        // this.setState({
        //     id: params.Id
        // });

        // let product = await GetProductDetail(this.state.id);
        // console.log(product);
    }

    render() {
        return (
            <Card className='w-100 flex-row   h-40vh  m-0  br-product '>

                <div className='col-8 d-flex flex-column align-items-center justify-content-center'>
                    <p className="fs-13vw color-gray">شیر یک لیتری پر چرب میهن</p>
                    <div className=' w-100 '>
                        {/*<div className='d-flex justify-content-center '>*/}
                        {/*<p  className="fs-08vw color-gray" dir='rtl'>4500 تومن </p>*/}
                        {/*</div>*/}

                        <div className="d-flex col-10 offset-1 text-justify" dir='rtl'>
                            <p>این توضیحات برای این است که توضیحاتی برای این  یسبتنم یسنال منیسابحخقث یسبنت ی سیبتل سکیت سکلمتل سلتل سمتل سکمتل سلتقخل سکت</p>
                        </div>
                        <div className="d-flex col-10 offset-1 text-justify" dir='rtl'>
                            <p>شیر پر چرب  و کم اندازه </p>
                        </div>
                        <div className='d-flex col-10 offset-1 '>
                            <span  className="fs-08vw color-gray lineOverText text-muted  " dir='rtl'>4500 تومن </span>
                            <span  className="fs-08vw color-gray   ml-auto" dir='rtl'>4500 تومن </span>
                        </div>
                    </div>
                </div>

                <div className='col-4 p-0 position-relative'>
                    <div className="quarter-circle-top-right">

                    </div>

                    <div className="product-div-img-detail">
                        <img src={ax} alt="ax" className="img-self-fill"/>
                    </div>

                </div>

            </Card>
        );
    }
}

export default PreviewProductDetail;
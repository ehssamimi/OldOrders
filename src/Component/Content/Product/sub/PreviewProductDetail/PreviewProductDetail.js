import React, {Component} from 'react';
import ax from "../../../../../assets/img/Arsenal_FC.png";
import {Card} from "reactstrap";
import {GetProductDetail}from './../../../../functions/ServerConnection'
import RowShowShowColEdit from "../../../../Support/Users/UserDetails/sub/RowShowShowColEdit/RowShowShowColEdit";
import Loader from "../../../../HomePages/Sub/Loader/Loader";

class PreviewProductDetail extends Component {
    constructor(props) {
        super(props);
         this.state={
            id:'',productSeparate:[],sub:"",Keys:''
        }
    }

      async componentDidMount() {
         const {match: {params}} = this.props;
        let each=await GetProductDetail(params.Id);
        console.log(each);
          let productSeparate=[];

          let Main = {
              "Description": each['Description'],
              "Attribute": each['Attribute'],
              "name": each['Name'],
              "Images": each['Images'][0],
              "Off": each['Off'],
              "id": each['_id'],
          };
          let sub = {
              "قیمت قبلی": each['PrevPrice'],
              "قیمت جدید": each['CurrentPrice'],
              "مشاهده": each['ViewCount'],
              "تعداد": each['Count'],
              "تولید": each['Manufacture'],
              "دسته بندی": each['Category'],
          };
              let row={'Main':Main,'sub':sub};
              console.log(row);

              productSeparate.push(row);

          let Keys;
          Keys=Object.keys(sub);
          this.setState({
               Keys
          });
          this.setState({
              productSeparate
          })
          // _id: "5d907a3a007049cfe08e3f88"
          // UniqueValue: "برنج ارزون↵"
          // Name: "برنج ارزون↵"
          // Count: 19
          // SalesCount: null
          // ViewCount: 0
          // Create_at: "2019-09-29 14:02:38.988889"
          // Updated_at: "2019-09-29 14:02:38.988906"
          // Attribute: "۱۰ گرم"
          // Manufacture: "ارزون↵"
          // PrevPrice: 1000
          // CurrentPrice: 2572
          // Description: "description1"
          // Category: "گروه ۲"
          // Images: ["http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e"]
          // Off: {Enable: true, Percentage: 0.1}


        // let product = await GetProductDetail(this.state.id);
        // console.log(product);
    }

    render() {
        let { productSeparate} = this.state;
        if (productSeparate.length > 0) {
            var {Main, sub} = productSeparate[0];
            var {Keys} = this.state;
            var {Off} =  Main;
            console.log(Keys);
            // console.log(Off);
        }


// console.log(productSeparate);
// console.log(productSeparate.length);
        return (


            productSeparate.length>0?

            <Card className='w-100 flex-row     m-0  br-product ' style={{height:"auto",minHeight:"40vh"}}>

                {
                    Off !== undefined ?
                        Off['Enable'] ?
                            <div className='w-100 '>
                                <div className='triangle   '>
                                </div>
                                <span className='persentSale'>{ Off['Percentage']*100  }%</span>
                            </div>
                            :
                            ""
                        : ""
                }


                <div className='col-8 d-flex flex-column align-items-center justify-content-center'>
                    <p className="fs-13vw color-gray">{Main['name']}</p>
                    <div className='d-flex  w-100 flex-wrap justify-content-center' dir='rtl'>
                        {Keys ?
                            Keys.map((todo, index) =>
                                <RowShowShowColEdit label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-6'} className='p-0 d-flex justify-content-center' />
                            ) : ''
                        }
                    </div>



                    <div className=' w-100  '>

                        {/*<div className='d-flex justify-content-center '>*/}
                        {/*<p  className="fs-08vw color-gray" dir='rtl'>4500 تومن </p>*/}
                        {/*</div>*/}
                        <div className="  col-10 offset-1 text-center" dir='rtl'>
                            <p>{Main['Attribute']}</p>
                        </div>
                        <div className="  col-10 offset-1 text-center" dir='rtl'>
                            <p>{Main['Description']} </p>
                         </div>
                    </div>
                </div>

                <div className='col-4 p-0 position-relative'>
                    <div className="quarter-circle-top-right">

                    </div>

                    <div className="product-div-img-detail">
                        <img src={Main['Images']} alt="ax" className="img-self-fill"/>
                        {/*<div className=' w-100 '>*/}
                            {/*{*/}
                                {/*Off !== undefined ?*/}
                                    {/*Off['Enable'] ?*/}
                                        {/*<span*/}
                                            {/*className="badge2 badge-outline-success2 mb-1 mr-1 badge2-pill bg-off-Product2 fs-08vw  ">{Off['Percentage']*100} %</span>*/}
                                        {/*:*/}
                                        {/*""*/}
                                    {/*: ""*/}
                            {/*}*/}


                        {/*</div>*/}
                    </div>

                </div>

            </Card>
                :<Loader/>
        );
    }
}

export default PreviewProductDetail;
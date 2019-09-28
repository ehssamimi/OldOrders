import React, {Component} from 'react';
import RowLeftNav from "../../leftNav/RowLeftNav";
import loader from "../../img/loader.gif";
import chocolate from "../../img/tanaqolat/kisspng-chocolate-bar-clip-art-chocolate-5ab4c5acf0cff2.8319236815217965249864.jpg";
import chips from "../../img/tanaqolat/potato-chips-png-vector-clipart-png-m-1434276763-for-clipart-potato.jpg";
import RowMainList from "./RowMainList/RowMainList";
const product=[{id: 1,  ax:chocolate ,name: 'chocolate', number: 3, per: '200', all: '600'},{id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'},
    {id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'},{id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'},
    {id: 1,  ax:chocolate ,name: 'chocolate', number: 3, per: '200', all: '600'}];

class MainOrderList extends Component {
    render() {
        return (
            <div className='  mainlistOrder w-100 float-right '>
                <div className="mb-3 table-heading   position-relative  ">
                    <div className="d-flex flex-grow-1 min-width-zero position-fixed  fixedBarMainList " style={{width:'71vw'}}>
                        <div className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center col-11  " dir='rtl' >
                            {/*<p className="list-item-heading mb-0 truncate w-40 w-xs-100"></p>*/}
                            <p className="mb-0 text-primary w-20 w-xs-100 text-right"><span>ایدی</span></p>
                            <p className="mb-0 text-primary w-20 w-xs-100 text-right "><span>عکس</span></p>
                            <p className="mb-0 text-primary w-20 w-xs-100 text-right"><span>نام محصول</span></p>
                            <p className="mb-0 text-primary w-20 w-xs-100 text-right"><span>تعداد</span></p>
                            <p className="mb-0 text-primary w-20 w-xs-100 text-right"><span>قیمت واحد</span></p>
                            <p className="mb-0 text-primary w-20 w-xs-100 text-right "><span>قیمت کل</span></p>

                        </div>
                    </div>

                </div>

                <div className='w-100 mt3vw'>
                    {product?product.map((todo ,index)=><div className=" mt-3" key={index}><RowMainList {...todo}/></div> ):
                    <div className='d-flex' ><img src={loader} alt={loader} className='loader'/></div>
                }

                </div>




            </div>
        );
    }
}

export default MainOrderList;
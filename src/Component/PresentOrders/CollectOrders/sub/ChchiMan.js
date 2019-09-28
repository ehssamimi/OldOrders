import React, {Component} from 'react';
import ax from './../../img/tanaqolat/10120018-beer-battered-onion-rings.png'

class ChchiMan extends Component {
    render() {
        return (
            <div className='  mainlistOrder w-100 float-right '>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <div className='axChichiMan'>
                        <img src={ax} alt={ax} className='w-100 h-100'/>
                    </div>
                    <h5 className='mt-2'>نام و نام حانوادگی</h5>
                    <h5 className='mt-2'>09112561701</h5>
                    <h5 className='mt-2'>ماشین سواری</h5>
                    <h5 className='mt-2'>62-162-9358</h5>
                    <button className="default  btn btn-info   align-items-center" >تحویل پیک داده شد</button>
                </div>


            </div>
        );
    }
}

export default ChchiMan;
import React, {Component} from 'react';
import chips from "../../../img/tanaqolat/potato-chips-png-vector-clipart-png-m-1434276763-for-clipart-potato.jpg";

class RowMainList extends Component {
    render() {
        // {id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'}
        let{id,ax,name,number,per,all}=this.props;
        return (
            <div className='col-12 d-flex'>
                <div className="mb-3 table-heading card w-100 paddingZero">
                    <div className="d-flex flex-grow-1 min-width-zero ">
                        <div className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center card-body paddingZero" dir='rtl'>

                            {/*<p className="list-item-heading mb-0 truncate w-40 w-xs-100"></p>*/}
                            <p className="mb-0  w-20 w-xs-100 text-center  "><span>{id}</span></p>
                            <p className="mb-0 text-primary w-20 w-xs-100  "><div className='axList d-flex justify-content-center mr-5'>
                                <img src={ax} className='w-100 h-100 br05   ' />
                            </div></p>
                            <p className="mb-0  w-20 w-xs-100 text-center pl-3"><span>{name}</span></p>
                            <p className="mb-0  w-20 w-xs-100 text-center pl-5"><span>{number}</span></p>
                            <p className="mb-0  w-20 w-xs-100 text-right pr-5 "><span>{per}</span></p>
                            <p className="mb-0  w-20 w-xs-100 text-right pr-3"><span>{all}</span></p>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RowMainList;
import React, {Component} from 'react';
import ax from './../../../assets/img/4th-1.jpg'

class ChichiManOrdersChichiMan extends Component {
    render() {
        return (
            <div className='  w-100 d-flex  '>
                <div className='w-20 text-center flex-column '>
                    <div className='w-100 text-center'>
                        {
                            this.props.type==='chichiman'?
                                <span className='col-8'>در صف</span>:
                                <span className='col-8'>ثبت سفارش</span>
                        }
                    </div>
                    <div className='w-100'>
                        <img src={ax} alt="ax" className='img-self-fill'/>
                    </div>
                    <div className="dashboard-logs w-100" dir='rtl'>
                        <div className="scrollbar-container ps ps--active-y">
                            <table className="table table-sm table-borderless">
                                <tbody>
                                <tr>
                                    <td><span className="log-indicator align-middle border-theme-1"></span></td>
                                    <td><span className="font-weight-medium">ir 2023526</span></td>
                                    <td><span className="font-weight-medium">سهند میرزایی</span></td>
                                    <td className="text-right"><span className="text-muted">00:20</span></td>
                                </tr>
                                <tr>
                                    <td><span className="log-indicator align-middle border-theme-1"></span></td>
                                    <td><span className="font-weight-medium">ir 2023526</span></td>
                                    <td className="text-right"><span className="text-muted">سهند میرزایی</span></td>
                                    <td className="text-right"><span className="text-muted">سهند میرزایی</span></td>
                                </tr>


                                </tbody>
                            </table>

                        </div>
                    </div>


                </div>


            </div>
        );
    }
}

export default ChichiManOrdersChichiMan;
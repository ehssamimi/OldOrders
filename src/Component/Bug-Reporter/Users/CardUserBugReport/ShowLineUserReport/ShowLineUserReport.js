import React, {Component} from 'react';

class ShowLineUserReport extends Component {
    render() {
        let{value,className}=this.props;
        console.log(value)
        return (
            <div className={['d-flex','p-1','col-12',' justify-content-between','align-items-center', className || ''].join(' ')}
                 dir='rtl'>
                <div className='d-flex justify-content-start '>
                                        <span className='collapseValue gray spanWithOutBreak'>عنوان<span
                                            className='pl-2'>:</span>
                            </span>
                    <span className="DRTl  d-flex  ">{value["عنوان"]}</span>
                </div>
                    <div className='d-flex   col-4 justify-content-between'>
                        <span className="DRTl  d-flex justify-content-end ">{value["نام و نام خانوادگی"]}</span>
                        <span className="DRTl  d-flex justify-content-end ">{value["شماره موبایل"]}</span>
                    </div>
            </div>
        );
    }
}

export default ShowLineUserReport;
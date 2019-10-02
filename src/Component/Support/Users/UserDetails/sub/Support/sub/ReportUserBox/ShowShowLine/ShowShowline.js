import React, {Component} from 'react';

class ShowShowline extends Component {
    render() {
        let{label,value,col,className}=this.props;
        return (
            <div className={['d-flex', 'mt-2', col, className || ''].join(' ')}
                 dir='rtl'>
                            <span className='collapseValue gray spanWithOutBreak'>{label} <span
                                className='pl-2'>:</span></span>
                <span className="DRTl  d-flex mt-2">{value}
                </span>
            </div>
        );
    }
}

export default ShowShowline;
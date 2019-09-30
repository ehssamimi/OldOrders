import React, {Component} from 'react';

class RowShowShow extends Component {
    render() {
        let{label,value,col}=this.props;
        return (
            <div className='d-flex col-3  collapseSpanHeight align-items-end' dir='rtl'>
                <span className='collapseValue gray'>{label} <span className='pl-2'>:</span></span>
                <span className=' collapseValue'>{value}</span>
            </div>
        );
    }
}

export default RowShowShow;

{/*<div className='d-flex col-4  collapseSpanHeight align-items-end' dir='rtl'>*/}

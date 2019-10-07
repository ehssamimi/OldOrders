import React, {Component} from 'react';

import HeaderSectionHomePage from "../HeaderSectionHomePage/HeaderSectionHomePage";

class CategoriesHomePage extends Component {
    render() {
        let{ax1,ax2,ax3,ax4}=this.props;
        return (
            <div>
                    <HeaderSectionHomePage header={this.props.header}/>

                <div className=' d-flex w-100'>
                    <div className='d-flex col-6 flex-column paddingZero  '>
                        <div className='height25vh w-100  mt-1 mb-1'>
                            <img src={ax1} className='img-self-fill br02'/>
                        </div>
                        <div className='height20vh w-100  mt-1 mb-1'>
                            <img src={ax2} className='img-self-fill br02'/>
                        </div>
                    </div>
                    <div className='d-flex col-6 flex-column padding-top-Zero padding-bottom-Zero padding-right-Zero pl-2 '>
                        <div className='height20vh w-100 mt-1 mb-1 '>
                            <img src={ax3} className='img-self-fill br02'/>
                        </div>
                        <div className='height25vh w-100 mt-1 mb-1'>
                            <img src={ax4} className='img-self-fill br02'/>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default CategoriesHomePage;
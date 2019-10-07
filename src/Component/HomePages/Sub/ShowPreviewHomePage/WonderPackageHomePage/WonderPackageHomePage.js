import React, {Component} from 'react';
import HeaderSectionHomePage from "../HeaderSectionHomePage/HeaderSectionHomePage";

class WonderPackageHomePage extends Component {
    render() {
        let{ax1,ax2,ax3,ax4,ax5}=this.props;
        return (
            <div>
                <HeaderSectionHomePage header={this.props.header}/>

                <div className=' d-flex w-100 flex-column'>
                    <div className=' height20vh d-flex '>
                        <div className='h-100 col-7  paddingZero '>
                            <img src={ax1} className='img-self-fill br02'/>
                        </div>
                        <div className='h-100 col-5 padding-top-Zero padding-bottom-Zero padding-right-Zero  pl-2 '>
                                <img src={ax2} className='img-self-fill br02 '/>
                        </div>
                    </div>
                    <div className='d-flex height20vh mt-2'>
                        <div className='h-100 col-12  paddingZero '>
                            <img src={ax3} className='img-self-fill br02'/>
                        </div>
                    </div>
                    <div className=' height20vh d-flex mt-2 '>
                        <div className='h-100 col-5 paddingZero '>
                            <img src={ax4} className='img-self-fill br02 '/>
                        </div>
                        <div className='h-100 col-7   padding-top-Zero padding-bottom-Zero padding-right-Zero  pl-2'>
                            <img src={ax5} className='img-self-fill br02'/>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default WonderPackageHomePage;
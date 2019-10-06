import React, {Component} from 'react';
import HeaderSectionHomePage from "../HeaderSectionHomePage/HeaderSectionHomePage";
import ax1 from "../../../../../assets/img/4th.jpg";

class WonderPackageHomePage extends Component {
    render() {
        return (
            <div>
                <HeaderSectionHomePage header={this.props.header}/>

                <div className=' d-flex w-100 flex-column'>
                    <div className=' height20vh d-flex '>
                        <div className='h-100 col-7  paddingZero '>
                            <img src={ax1} className='img-self-fill br02'/>
                        </div>
                        <div className='h-100 col-5 padding-top-Zero padding-bottom-Zero padding-right-Zero  pl-2 '>
                                <img src={ax1} className='img-self-fill br02 '/>
                        </div>
                    </div>
                    <div className='d-flex height20vh mt-2'>
                        <div className='h-100 col-12  paddingZero '>
                            <img src={ax1} className='img-self-fill br02'/>
                        </div>
                    </div>
                    <div className=' height20vh d-flex mt-2 '>
                        <div className='h-100 col-5 paddingZero '>
                            <img src={ax1} className='img-self-fill br02 '/>
                        </div>
                        <div className='h-100 col-7   padding-top-Zero padding-bottom-Zero padding-right-Zero  pl-2'>
                            <img src={ax1} className='img-self-fill br02'/>
                        </div>

                    </div>
                    {/*<div className='d-flex col-6 flex-column paddingZero  '>*/}
                        {/*<div className='height30vh w-100 m-1'>*/}
                            {/*<img src={ax1} className='img-self-fill br02'/>*/}
                        {/*</div>*/}
                        {/*<div className='height25vh w-100 m-1'>*/}
                            {/*<img src={ax2} className='img-self-fill br02'/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className='d-flex col-6 flex-column padding-top-Zero padding-bottom-Zero padding-right-Zero'>*/}
                        {/*<div className='height25vh w-100 mt-1 mb-1 '>*/}
                            {/*<img src={ax3} className='img-self-fill br02'/>*/}
                        {/*</div>*/}
                        {/*<div className='height30vh w-100 mt-1 mb-1'>*/}
                            {/*<img src={ax4} className='img-self-fill br02'/>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                </div>
            </div>
        );
    }
}

export default WonderPackageHomePage;
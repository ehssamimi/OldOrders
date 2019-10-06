import React, {Component} from 'react';
import CategoriesHomePage from "./Sub/ShowPreviewHomePage/Categories/CategoriesHomePage";
import HeaderAppHomePage from "./Sub/ShowPreviewHomePage/HeaderAppHomePage/HeaderAppHomePage";
import WonderPackageHomePage from "./Sub/ShowPreviewHomePage/WonderPackageHomePage/WonderPackageHomePage";
import appheader from './../../assets/img/app-header.svg';
import statusHomePage from './../../assets/img/statusHomePage.jpg';
// import statusHomePage from './../../assets/img/simpleProduct.svg';
import RowShowShowColEdit from "../Support/Users/UserDetails/sub/RowShowShowColEdit/RowShowShowColEdit";
import SliderOnePage from "./Sub/ShowPreviewHomePage/SliderOnePage/SliderOnePage";
import ShowItemsHomePages from "./Sub/ShowPreviewHomePage/ShowItemsHomePages/ShowItemsHomePages";
import SliderTwoPages from "./Sub/SliderTwoPages/SliderTwoPages";


class HomePages extends Component {
    render() {
        return (
            <div>
                <div className='col-5'>
                    <HeaderAppHomePage ax={appheader} className='height5vh'/>
                    <HeaderAppHomePage ax={statusHomePage} className='height15vh'/>
                    <SliderOnePage/>
                    <ShowItemsHomePages header={'برترین ها'}/>
                    <CategoriesHomePage header={'دسته بندی'}/>
                    <ShowItemsHomePages header={'لبنیات'}/>
                    <WonderPackageHomePage header={'پکیج های شگفت انگیز'}/>
                    <SliderTwoPages/>
                </div>
            </div>
        );
    }
}

export default HomePages;
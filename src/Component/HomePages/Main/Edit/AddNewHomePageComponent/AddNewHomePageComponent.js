import React, {Component} from 'react';
import {ModalBody} from "reactstrap";
import PreviewCategories from "../../../Sub/CategoriesHomePage/PreviewCategories/PreviewCategories";
import {allPackage, GetAllItemList, GetBanners, GetCategoriesAll,allMainSlider,allHeaderSlider,
    GetPackageDetail,GetSliderDetail,GetBannersDetail,GetItemDetail,GetCategorieyDetail,GetHeaderSliderDetail
} from "../../../../functions/ServerConnection";
import PreviewItems from "../../../Sub/ItemList/PreviewItems/PreviewItems";
import PreviewPackages from "../../../Sub/WonderPackageAddHomePage/subPackage/PreviewPackages";
import PreviewHeaderSlider from "../../../Sub/HeaderSlider/Preview/PreviewHeaderSlider";
import PreViewBanner from "../../../Sub/Banner/PreViewBanner/PreViewBanner";
import PreviewMainSlider from "../../../Sub/SliderAddHomePage/PreviewSliderMAin/PreviewMainSlider";
var classNames = require('classnames');

class AddNewHomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            listComponent:['ItemList','Category','Package','Slider','Banner','HeaderSlider'],active:'',name:'',ItemsList:[]
        }
    }

  async  handelClick(name) {
        this.setState({
            name,active:name,ItemsList:[]
        });
        var ItemsList='';
        switch (name) {
            case 'ItemList':
                 ItemsList = await GetAllItemList();
                console.log(ItemsList);
                this.setState({
                    ItemsList
                });
                break;
            case 'Category':
                  ItemsList = await GetCategoriesAll();
                console.log(ItemsList);
                this.setState({
                    ItemsList
                });
                break;
            case 'Package':
                ItemsList = await allPackage();
                console.log(ItemsList);
                this.setState({
                    ItemsList
                });
                break;
            case 'Slider':
                ItemsList = await allMainSlider();
                console.log(ItemsList);
                this.setState({
                    ItemsList
                });
                break;
            case 'Banner':
                ItemsList = await GetBanners();
                console.log(ItemsList);
                this.setState({
                    ItemsList
                });
                break;
            case 'HeaderSlider':
                ItemsList = await allHeaderSlider();
                // console.log('headerSlider');
                console.log(ItemsList);
                this.setState({
                    ItemsList
                });
                break;
        }
    }
  async  ClickEdit(Name){
        // console.log(Name);
        let {name}=this.state;
        var Value='';
        switch (name) {
            case 'ItemList':
                Value = await GetItemDetail(Name);
                break;
            case 'Category':
                Value = await GetCategorieyDetail(Name);
                break;
            case 'Package':
                Value = await GetPackageDetail(Name);
                break;
            case 'Slider':
                Value = await GetSliderDetail(Name);
                break;
            case 'Banner':
                Value = await GetBannersDetail(Name);
                break;
            case 'HeaderSlider':
                Value = await GetHeaderSliderDetail(Name);
                break;
        }
        this.props.addComPonent(Value,name);
    }
    render() {
        let{listComponent,ItemsList,name}=this.state;
        var deactive = classNames(
            'vh10',' d-flex' ,'justify-content-center', 'align-items-center', 'list-newComponent','cursor-pointer',
            {
        });
        var active = classNames(
            'vh10',' d-flex' ,'justify-content-center', 'align-items-center', 'list-newComponent','cursor-pointer','ListActiveHomePages'

             );
        // console.log(this.state.name);
        // console.log(this.state.ItemsList);
        return (
            <div className='col-12 d-flex ' >
                <div className='col-3 d-flex flex-column justify-content-start'>
                    {
                        listComponent.map((item,index)=>
                            <div className={this.state.active === item ? active : deactive} onClick={this.handelClick.bind(this,item)}  key={ item }  >
                                <p className='text-right '>{item}</p>
                            </div>
                        )
                    }
                </div>
                <div className='col-9 d-flex flex-column justify-content-end'>
                    {
                        name==='Category'?
                        ItemsList.length>0?
                            ItemsList.map((cat ,index)=><PreviewCategories id={ItemsList[index]._id} key={index} header={cat.Name} ax1={ItemsList[index].Items[0].Image}
                                                                           ax2={ItemsList[index].Items[1].Image} ax3={ItemsList[index].Items[2].Image} ax4={ItemsList[index].Items[3].Image}
                                                                           clickPreview={this.ClickEdit.bind(this)}/>  ):""

                        :''
                    }

                    {
                        name==='ItemList'?
                            ItemsList.length>0? ItemsList.map((cat ,index)=><PreviewItems Title={cat.Title} key={index}/>):""
                            :''
                    }
                    {
                        name==='Package'?
                            ItemsList.length>0? ItemsList.map((cat ,index)=><PreviewPackages id={ItemsList[index]._id} key={index} header={cat.Name}
                                                                                             ax1={ItemsList[index].Items[0].Image} ax2={ItemsList[index].Items[1].Image}
                                                                                             ax3={ItemsList[index].Items[2].Image} ax4={ItemsList[index].Items[3].Image}
                                                                                             ax5={ItemsList[index].Items[4].Image} clickPreview={this.ClickEdit.bind(this)}/>  ):""
                            :''
                    }
                    {
                        name==='HeaderSlider'?
                            ItemsList.length > 0 ?
                                ItemsList.map((slider, index) => <PreviewHeaderSlider id={slider._id} key={index} header={slider.Name} slider={slider} clickEdit={this.ClickEdit.bind(this)}/>) : ""
                            :''
                    }
                    {
                        name==='Banner'?
                            ItemsList.length > 0 ?
                                ItemsList.map((cat ,index)=><PreViewBanner id={cat._id} key={index} header={cat.Name} ax ={cat.Image}   clickPreview={this.ClickEdit.bind(this)}/>  ):""
                            :''
                    }
                    {
                        name==='Slider'?
                            ItemsList.length > 0 ?
                                ItemsList.map((slider ,index)=><PreviewMainSlider id={slider._id} key={index} header={slider.Name} slider={slider} clickEdit={this.ClickEdit.bind(this)}/>  ):""
                            :''
                    }
                </div>
            </div>
        );
    }
}

export default AddNewHomePageComponent;
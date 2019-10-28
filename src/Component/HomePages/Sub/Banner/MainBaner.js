import React, {Component} from 'react';
import PreViewBanner from "./PreViewBanner/PreViewBanner";
import AddBanerHomePage from "./AddBaner/AddBanerHomePage";
import {GetBanners, GetBanerDetail, GetDestination} from "../../../functions/ServerConnection";
import ax from './../../../../assets/img/2574.jpg'
import PreviewCategories from "../CategoriesHomePage/PreviewCategories/PreviewCategories";


class MainBaner extends Component {
    constructor(props) {
        super(props);
        this.state={
            AllBanners:[],Edit:false
        }
    }

    async componentDidMount(){
        let AllBanners = await GetBanners();
        console.log(AllBanners);
        this.setState({
            AllBanners
        })
    }
    async ClickEdit(value ,id) {
        console.log(value);
        let data= await GetBanerDetail(value);
        console.log(data);
        // let header=data.Name;
        // let ax =data.Items[0].Image;
        // this.setState({
        //     header ,ax ,Edit:true,id
        // })
    }

    render() {
        let{AllBanners,Edit}=this.state;
        return (
            <div className='w-100 d-flex'  >
                <div className='col-6'>
                    <AddBanerHomePage  id={1} header={'title'} ax={ax}/>

                </div>
                <div className='col-6'>{
                    AllBanners.length>0?
                        // AllBanners.map((cat ,index)=><PreViewBanner id={CategoriesList[index]._id} key={index} header={cat.Name} ax1={CategoriesList[index].Items[0].Image}   clickPreview={this.ClickEdit.bind(this)}/>  ):""
                        AllBanners.map((cat ,index)=><PreViewBanner id={cat._id} key={index} header={cat.Name} ax ={cat.Image}   clickPreview={this.ClickEdit.bind(this)}/>  ):""
                        // AllBanners.map((cat ,index)=><PreViewBanner id={index} key={index}  ax1={ax}   clickPreview={this.ClickEdit.bind(this)} />  ):""
                }

                    {/*<PreViewBanner header={'heading'}/>*/}
                </div>

            </div>
        );
    }
}

export default MainBaner;
import React, {Component} from 'react';
import ax from './../../../assets/img/4th-1.jpg'
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText, FormGroup, Label
} from "reactstrap";
import {NavLink} from "react-router-dom";
import SubCategoryElement from "./SUb/SubCategoryElement/SubCategoryElement";
import {AddCategory, getCategoryDetailwithId, sendImg,Add_Remove_SubCategory} from "../../functions/ServerConnection";
import PreviewProduct from "../Product/sub/PreviewProduct/PreviewProduct";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";
import TweenMax from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

class ContentCategoryInfo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            SubCatInfo:undefined,name:'',error:{name :""},loader:false,catName:''
        }
    }

    async componentDidMount(){
        const {match: {params}} = this.props;
        // console.log(params.Id);
        let CatInfo= await getCategoryDetailwithId(params.Id);
         this.setState({
            SubCatInfo:CatInfo['sub_categories'],
            catName:CatInfo['name']
        })

    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    async UpdateSubCategory(id){
        // const $el = document.getElementById(`${id}`);
        // const duration = 2;
        // const from = { opacity: 0};
        // await TweenMax.to($el, duration, from);

        const {match: {params}} = this.props;
        let CatInfo= await getCategoryDetailwithId(params.Id);
        this.setState({
            SubCatInfo:CatInfo['sub_categories'],
            catName:CatInfo['name']
        },()=>{
            console.log(this.state.SubCatInfo)
        });
    }


    async handleSubmit(event) {

         var  validate=true;
        // error:{name :"", ax:""}

        let{name }=this.state;
        console.log(name);
         if (name.length<1){
            validate = false;
            let {error} = this.state;
            error['name'] = "اسم باید مشخص شود ";
            this.setState({
                error
            })
        }else {
            let {error} = this.state;
            error['name'] = "";
            this.setState({
                error
            })
        }


        if (validate===true){
            this.setState({
                loader:true
            });

             let{name,catName}=this.state;
            // action,category,subcategory
            let addCat=await Add_Remove_SubCategory( 'add',catName,name);
            // console.log(addCat)
            this.setState({
                loader:false
            });
            // console.log(addCat)
            let {state,Description}= addCat ;
            if (state===200){
                NotificationManager.success(
                    "congratulation",
                    "your Sub-category add",
                    3000,
                    null,
                    null,
                    "success"
                );
                 return validate;

            } else {
                NotificationManager.error(
                    "error",
                    Description,
                    3000,
                    null,
                    null,
                    "error"
                );
                return false;
            }

        }else {
            return validate;
        }


    }







    async handelClickAdd(){
         let input=document.getElementById('input-text');
        let icon=document.getElementById('icon');
        // TweenLite.to('#input', 2, {width: "100%"});

            if (!input.classList.contains("active")) {
                TweenMax.fromTo(input, 1, { opacity: 1}, {width:'96%'});
                input.classList.add("active");
                // icon.classList.remove("iconsminds-previous");
                // icon.classList.add("iconsminds-add");
                icon.classList.add("iconsminds-previous");
                icon.classList.remove("iconsminds-add");
            } else {
                 console.log(this.state.catName)
               let Submit= await this.handleSubmit();
                console.log(Submit);
                if (Submit){
                    const {match: {params}} = this.props;
                    // console.log(params.Id);
                    let CatInfo= await getCategoryDetailwithId(params.Id);
                    this.setState({
                        SubCatInfo:CatInfo['sub_categories'],
                        catName:CatInfo['name']
                    },()=>{
                        console.log(this.state.SubCatInfo)
                    });
                    TweenMax.fromTo(input, 1 ,{ opacity: 0,  },
                        {width:0});
                    input.classList.remove("active");
                    // input.classList.remove("iconsminds-add");
                    // icon.classList.add("iconsminds-previous");
                    icon.classList.add("iconsminds-add");
                    icon.classList.remove("iconsminds-previous");
                } else {

                }





                // let addSubCategory=await Add_Remove_SubCategory('add',category,subcategory)


            }

//         TweenMax.to(input, 1, {width: "100%"});
//         var t = TweenLite.to('#input', 2, {width:"100%"});
//
// // set the reversed property to true
//         t.reversed(true);
//
// // toggle function
//         function toggleDirection()
//         {
//             t.reversed() ? t.play() : t.reverse();
//         }
//
//         toggleDirection()


        // TweenMax.set(('.icon-line'), {autoAlpha:0,width: "0%", ease: Sine.easeInOut},'.1');
        // TweenMax.to('.icon-line', 2, {autoAlpha:1,width: "35%", ease: Sine.easeInOut },'.2') ;
    }
    async



    render() {
        let{SubCatInfo,error,catName}=this.state;
        console.log(SubCatInfo)
        return (
            <Card>
                <div className='col-sm-12   m-0' dir='rtl'
                >
                    <div className="col-sm-12 col-md-3  d-flex align-items-center">
                        <div className='h-25vh w-100'>
                            <img src={ax} alt="categoryImg" className='card-img-top'/>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-sm-12   p-0'>
                        {
                            SubCatInfo !== undefined ?
                                SubCatInfo.map((name, index) =>
                                    <SubCategoryElement {...this.props} name={name} key={index} catName={catName} UpdateSubCategory={this.UpdateSubCategory.bind(this)}/>
                                ) :
                                <div className='d-flex justify-content-center align-items-center'><p>این دسته بندی هیچ
                                    زیر مجموعه ای ندارد</p></div>
                        }
                        <div className='d-flex col-12 h-1vh p-0'>
                            <div id='icon' className='glyph-icon iconsminds-add purpleColor fs-23vw' onClick={this.handelClickAdd.bind(this)}></div>
                            <form onSubmit={this.handleSubmit}  className='col-12 p-0'  >
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <div className='w-100 d-flex  '   >
                                        <FormGroup className="form-group has-float-label position-relative opacity-0" id='input-text'>
                                            <input type="text"  className="form-control mt-2  " value={this.state.name || ''}
                                                   onChange={this.handleChange}  />
                                        </FormGroup>
                                     </div>
                                    <div className='d-flex flex-column col-6'>
                                        {
                                            error['name'].length>1?<span className='alert alert-danger mt-3 col-12'>{error['name']}</span>:""
                                        }

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>


            </Card>
        );
    }
}

export default ContentCategoryInfo;
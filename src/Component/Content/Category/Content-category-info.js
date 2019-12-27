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
import {AddCategory, getCategoryDetailwithId, sendImg} from "../../functions/ServerConnection";
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
            SubCatInfo:undefined,name:'',error:{name :""},loader:false
        }
    }

    async componentDidMount(){
        const {match: {params}} = this.props;
        // console.log(params.Id);
        let CatInfo= await getCategoryDetailwithId(params.Id);
        // console.log(CatInfo['sub_categories'])
        this.setState({
            SubCatInfo:CatInfo['sub_categories']
        })

    }
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    handelClickAdd(){
        console.log("arsenal")
        let input=document.getElementById('input');
        let icon=document.getElementById('icon');
        // TweenLite.to('#input', 2, {width: "100%"});
        if (icon.classList.contains("iconsminds-previous")){

        }






            //
            if (!input.classList.contains("active")) {
                TweenMax.fromTo(input, 1, { opacity: 0,}, {width:0});
                input.classList.add("active");
                icon.classList.remove("iconsminds-previous");
                icon.classList.add("iconsminds-add");
            } else {
                TweenMax.fromTo(input, 1 ,{ opacity: 1,  }, {width:'98%'});
                input.classList.remove("active");
                input.classList.remove("iconsminds-add");
                icon.classList.add("iconsminds-previous");
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


    async handleSubmit(event) {
        event.preventDefault();
        var  validate=true;
        // error:{name :"", ax:""}

        let{name,ax1File}=this.state;
        console.log(name);
        console.log(ax1File);
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
            })
            console.log("varidate")
            let{name,ax1File}=this.state;
            let idax = await sendImg(ax1File, 'Public');
            let Data={
                "name": name,
                "image": idax
            };
            console.log(JSON.stringify(Data));
            let addCat=await AddCategory(JSON.stringify(Data))
            this.setState({
                loader:false
            });

            console.log(addCat)
            let{state,Description}= addCat ;
            if (state===200){
                NotificationManager.success(
                    "congratulation",
                    "your category add",
                    3000,
                    null,
                    null,
                    "success"
                );
            } else {
                NotificationManager.error(
                    "error",
                    Description,
                    3000,
                    null,
                    null,
                    "error"
                );
            }

        }


    }
    render() {
        let{SubCatInfo,error}=this.state;
        // console.log(CatInfo)
        return (
            <Card>
                <div className='col-sm-12 row m-0' dir='rtl'
                >
                    <div className="col-sm-12 col-md-3  d-flex align-items-center">
                        <div className='h-25vh w-100'>
                            <img src={ax} alt="categoryImg" className='card-img-top'/>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-sm-12 col-md-9'>
                        {
                            SubCatInfo !== undefined ?
                                SubCatInfo.map((name, index) =>
                                    <SubCategoryElement {...this.props} name={name} key={index}/>
                                ) :
                                <div className='d-flex justify-content-center align-items-center'><p>این دسته بندی هیچ
                                    زیر مجموعه ای ندارد</p></div>
                        }

                        <div className='d-flex col-12 h-1vh'>
                            <div id='icon' className='glyph-icon iconsminds-add purpleColor fs-23vw' onClick={this.handelClickAdd.bind(this)}></div>
                            <form onSubmit={this.handleSubmit}  className='col-12'  >
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <div className='w-100 d-flex ' >
                                        <FormGroup className="form-group has-float-label position-relative">
                                            {/*<Label>*/}
                                                {/*<span>نام</span>*/}
                                            {/*</Label>*/}
                                            <input type="text"  id='input' className="form-control opacity-0 " value={this.state.name || ''}
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
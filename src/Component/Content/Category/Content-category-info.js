import React, {Component} from 'react';
import ax from './../../../assets/img/4th-1.jpg'
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText
} from "reactstrap";
import {NavLink} from "react-router-dom";
import SubCategoryElement from "./SUb/SubCategoryElement/SubCategoryElement";
import {getCategoryDetailwithId} from "../../functions/ServerConnection";
import PreviewProduct from "../Product/sub/PreviewProduct/PreviewProduct";
class ContentCategoryInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            SubCatInfo:undefined
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
    render() {
        let{SubCatInfo}=this.state;
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
                    </div>

                </div>


            </Card>
        );
    }
}

export default ContentCategoryInfo;
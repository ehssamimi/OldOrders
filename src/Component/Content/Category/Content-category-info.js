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
class ContentCategoryInfo extends Component {
    render() {
        return (
            <Card>
                <div className='col-sm-12 row m-0' dir='rtl'
                >
                    <div className="col-sm-12 col-md-3 row">
                        <img src={ax} alt="categoryImg" className='card-img-top'/>
                    </div>
                    <div className='d-flex flex-column col-sm-12 col-md-9'>
                        <SubCategoryElement/>

                    </div>

                </div>


            </Card>
        );
    }
}

export default ContentCategoryInfo;
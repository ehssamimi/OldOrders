import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import ax from '../../../../../assets/img/4th-1.jpg'
 import {
    Card,
    CardBody,
    CardSubtitle,
    CardText
} from "reactstrap";
import  {getAllCategoriesLis} from '../../../../functions/ServerConnection'
import ThumbnailImage from "../../../../../components/cards/ThumbnailImage";
import ShowShowline from "../../../../Support/Users/UserDetails/sub/Support/sub/ReportUserBox/ShowShowLine/ShowShowline";
import RowShowShow from "../../../../PresentOrders/RowShowShow";
import RowShowShowColEdit from "../../../../Support/Users/UserDetails/sub/RowShowShowColEdit/RowShowShowColEdit";

class CategoryEachItems extends Component {

    render() {
        let {data}=this.props;
        console.log(data)
        return (
            <Card className="d-flex flex-column mb-4 br02" id={data._id}>
                <div className='position-relative'>
                    <NavLink to= {`/content/category/detail/info/${data._id}`} className="d-flex h-20vh w-100 ">
                        <img src={data.image} alt="profile" className='card-img-top'/>
                        {/*<ThumbnailImage rounded   src={ax} alt="profile" className="m-4" />*/}
                    </NavLink>
                </div>


                <div className=" d-flex flex-grow-1 min-width-zero">
                    {/*<CardBody*/}
                        {/*className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">*/}
                        {/*<div className="min-width-zero">*/}
                            {/*<CardSubtitle className="truncate mb-1">name</CardSubtitle>*/}
                            {/*<CardText className="text-muted text-small mb-2">status</CardText>*/}
                        {/*</div>*/}
                    {/*</CardBody>*/}


                    <CardBody className='w-100 d-flex justify-content-center'>
                        <RowShowShowColEdit label='نام' value={data.name} col="col-4" />
                     </CardBody>
                </div>
            </Card>
        );
    }
}

export default CategoryEachItems;
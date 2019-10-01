import React, {Component} from 'react';
import {
    // Row,
    Card,
    CardBody,
    // CardTitle,
    CardSubtitle,
    // CardImg,
    CardText,
    Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "../../../../components/common/CustomBootstrap";
import ThumbnailImage from "../../../../components/cards/ThumbnailImage"
import ThumbnailLetters from "../../../../components/cards/ThumbnailLetters"

class UserInfoCard extends Component {
    render() {
        return (
            <div className='w-100' dir='rtl'>
                {/*<Colxx md="6" sm="6" lg="4" xxs="12">*/}
                    <Card className="d-flex flex-row mb-4" >
                        <NavLink to={`/support/user/info/${this.props.id}`} className="d-flex">
                            <ThumbnailLetters rounded text="احسان صمیمی " className="m-4" />
                        </NavLink>
                        <div className=" d-flex flex-grow-1 min-width-zero">
                            <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div className="min-width-zero">
                                    <NavLink to={`/support/user/info/${this.props.id}`}>
                                        <CardSubtitle className="truncate mb-1">احسان صمیمی راد</CardSubtitle>
                                    </NavLink>
                                    <CardText className="text-muted text-small mb-2">09112561701</CardText>
                                    <Button outline size="xs" color="primary">نمایش پروفایل</Button>
                                </div>
                            </CardBody>
                        </div>
                    </Card>
                {/*</Colxx>*/}
            </div>
        );
    }
}

export default UserInfoCard;
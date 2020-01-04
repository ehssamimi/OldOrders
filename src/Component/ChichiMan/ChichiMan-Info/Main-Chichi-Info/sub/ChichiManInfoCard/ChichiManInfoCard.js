import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText} from "reactstrap";
import {NavLink} from "react-router-dom";
import ThumbnailLetters from "../../../../../../components/cards/ThumbnailLetters";

class ChichiManInfoCard extends Component {

    render() {
        let{chichiMan}=this.props;
         console.log('ax');
        console.log(chichiMan['image'] );
        return (
            <div className={this.props.class} dir='rtl'>
                <NavLink to={`/chichi-man/info/${this.props.header}/${this.props.id}`}>
                    <Card className="d-flex flex-row mb-4">
                        {
                            chichiMan['image'].length>0?  <div className='align-self-center list-thumbnail-letters   undefined  rounded-circle'>
                                <img src={chichiMan['image']} alt='image' className='img-self-fill br50'/>
                            </div>:<ThumbnailLetters rounded text={chichiMan['name']}/>

                        }
                         <div className=" d-flex flex-grow-1 min-width-zero">
                            <CardBody className=" pl-0 pr-0 align-self-center d-flex flex-column flex-lg-row justify-content-between row m-0 text-center">
                                <div className="col-sm-12 col-lg-6">
                                    <CardSubtitle className="truncate mb-1">{chichiMan['name']}</CardSubtitle>
                                    <CardText className="text-muted text-small mb-2">{chichiMan['phoneNumber']} </CardText>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                         <CardSubtitle className="truncate mb-1">{chichiMan['vehicle']}</CardSubtitle>
                                         <CardText className="text-muted text-small mb-2">{chichiMan['Plaque']}</CardText>
                                </div>
                            </CardBody>

                        </div>
                    </Card>
                </NavLink>
            </div>
        );
    }
}

export default ChichiManInfoCard;
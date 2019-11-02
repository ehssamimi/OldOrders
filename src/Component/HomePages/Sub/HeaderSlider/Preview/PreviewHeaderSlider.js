import React, { Component, Fragment } from "react";
import {Row, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import { Colxx, Separator } from "../../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../../containers/navs/Breadcrumb";
import IntlMessages from "../../../../../helpers/IntlMessages";
import {items} from "../../../../../data/carouselItems";
import GlideComponent from "../../../../../components/carousel/GlideComponent";
import {DeleteHeaderSlider} from "../../../../functions/ServerConnection";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const NoControlCarouselItem = ({ Destination, Image, Position,DestinationId}) => {
    return (
        <div className="glide-item">
            <Card>
                <div className="position-relative vh25">
                    <img className="card-img-top img-self-fill " src={Image} alt={Image} />
                    {/*Destination: null*/}
                    {/*DestinationId: null*/}
                    {/*Image: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e"*/}
                    {/*Position: 4*/}
                </div>
                <CardBody>
                    <h6 className="mb-4">{Destination}</h6>
                    <footer>
                        <p className="text-muted text-small mb-0 font-weight-light">
                            DestinationId: {DestinationId}
                        </p>
                        <div className='d-flex'  >
                            <span className='  d-flex  '>
                                {Position}
                                Position:
                            </span>


                        </div>

                    </footer>
                </CardBody>
            </Card>
        </div>
    );
};



class PreviewHeaderSlider extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleteItem:false
        }
    }

    async handelDelete() {
        let data= await DeleteHeaderSlider(this.props.slider.Name);
        // let{Data}=this.props.items;
        let id=this.props.slider.Name;

        if(data===200){
            NotificationManager.success(

                "congratulation",
                "your Slider deleted",
                3000,
                null,
                null,
                "success"
            );
            console.log(data);
            const $el = document.getElementById(`${id}`);
            const duration = 2;
            const from = { opacity: 0};
            TweenMax.to($el, duration, from);
            setTimeout(() => {
                $el.remove();
            }, 2000)
        }
        this.toggleLarge()
    }
    handelclickDelete() {
        this.setState({
            deleteItem: true
        })
    }

    toggleLarge = () => {
        this.setState(prevState => ({
            deleteItem: !prevState.deleteItem
        }));
    };
    handelEdit(name){
        // console.log(name);
        this.props.clickEdit(name);
    }

    render() {
        // console.log(items);
        // console.log(this.props.slider);
        let {Items}=this.props.slider;
        // console.log(Items);
        return (
            <div id={this.props.slider.Name}>
                <Row>
                    <Colxx xxs="12" >
                        <CardTitle className='d-flex'>
                            {
                                this.props.slider.Name
                            }
                            <div className='d-flex ml-auto  '>
                                <div className=' d-flex    m-2' onClick={this.handelEdit.bind(this,this.props.header)}><FaRegEdit /></div>
                                <div className=' d-flex    m-2' onClick={this.handelclickDelete.bind(this)}><MdDeleteForever/></div>
                            </div>
                            {/*<span className='ml-auto simple-icon-trash' onClick={this.handelclickDelete.bind(this)}></span>*/}
                            {/*<span className='ml-auto simple-icon-trash' onClick={this.handelEdit.bind(this)}></span>*/}

                        </CardTitle>
                    </Colxx>
                    <Colxx xxs="12" className="pl-0 pr-0 mb-5">
                        <GlideComponent settings={
                            {
                                gap: 5,
                                perView:2,
                                type: "carousel",
                                breakpoints: {
                                    480: { perView: 1 },
                                    800: { perView: 2 },
                                    1200: { perView: 2 }
                                },
                                hideNav: true
                            }
                        }>
                            { Items.map(item => {
                                return (
                                    <div key={item._id}>
                                        <NoControlCarouselItem {...item} />
                                    </div>
                                );
                            })}
                        </GlideComponent>
                    </Colxx>
                </Row>
                <Modal
                    isOpen={this.state.deleteItem}
                    size="lg"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}>
                        Delete Slider {this.props.header}

                    </ModalHeader>
                    <ModalBody>
                        Are u sure?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handelDelete.bind(this)}>
                            Yes
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggleLarge}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }
}

export default PreviewHeaderSlider;
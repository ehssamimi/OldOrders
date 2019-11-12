import React, {Component} from 'react';
import {Row, Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import { Colxx, Separator } from "../../../../../../components/common/CustomBootstrap";
import GlideComponent from "../../../../../../components/carousel/GlideComponent";
import {DeleteCitemList} from "../../../../../functions/ServerConnection";
import NotificationManager from "../../../../../../components/common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";
const NoControlCarouselItem = ({ Type, Image }) => {
    return (
        <div className="glide-item">
            <Card>
                <div className="position-relative vh25">
                    <img className="card-img-top img-self-fill " src={Image} alt={Image} />
                    {/*{badges &&*/}
                    {/*badges.map((b, index) => {*/}
                    {/*return (*/}
                    {/*<span*/}
                    {/*key={index}*/}
                    {/*className={`badge badge-pill badge-${*/}
                    {/*b.color*/}
                    {/*} position-absolute ${*/}
                    {/*index === 0*/}
                    {/*? "badge-top-left"*/}
                    {/*: "badge-top-left-" + (index + 1)*/}
                    {/*}`}*/}
                    {/*>*/}
                    {/*{b.title}*/}
                    {/*</span>*/}
                    {/*);*/}
                    {/*})}*/}
                </div>


            </Card>
            {/*<span>{Type.Name}</span>*/}
        </div>
    );
};



class SliderHomePagesPreview extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleteItem:false
        }
    }

    async handelDelete() {
        // let data= await DeleteCitemList(this.props.items.Title);
        // // let{Data}=this.props.items;
        // let id=1;
        //
        // if(data===200){
        //     NotificationManager.success(
        //
        //         "congratulation",
        //         "your categories deleted",
        //         3000,
        //         null,
        //         null,
        //         "success"
        //     );
        //     console.log(data);
        //     const $el = document.getElementById(`${id}`);
        //     const duration = 2;
        //     const from = { opacity: 0};
        //     TweenMax.to($el, duration, from);
        //     setTimeout(() => {
        //         $el.remove();
        //     }, 2000)
        // }
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

    render() {
        // console.log(items);
        // console.log(this.props.items);
        let {Data}=this.props.items;
        console.log(Data);
        return (
            <div>
                <Row>
                    <Colxx xxs="12" id={1}>
                        <CardTitle className='d-flex'>
                            <div className='mr-auto'>
                                <span className=' simple-icon-trash cursor-pointer' onClick={this.handelclickDelete.bind(this)}></span>
                                <span className='  iconsminds-file-edit cursor-pointer' onClick={this.handelclickDelete.bind(this)}></span>
                            </div>
                            {
                                `${this.props.items.Title}اسلایدر `
                            }
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
                                hideNav: false
                            }
                        }>
                            { Data.map(item => {
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
                        Delete Category {this.props.header}

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

export default SliderHomePagesPreview;
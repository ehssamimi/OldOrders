import React, {Component} from 'react';import {
    Row,
    // Card,
    // CardBody,
    // CardTitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    // FormGroup,
    // Input,
    // Label
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import ax from './img/balloon.jpg';


class ShowModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };
    render() {
        return (
            <div>
                <Row>
                    <Colxx xxs="12">

                                <div>
                                    <Button color="primary" outline onClick={this.toggle}>
                                        <IntlMessages id="نمایش اطلاعات سفارش" />
                                    </Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                        <ModalHeader toggle={this.toggle}>
                                            <IntlMessages id="نمایش فاکتور" />
                                        </ModalHeader>
                                        <ModalBody>
                                            <div className='col-12'>
                                                <img src={ax} alt="fish" className='card-img-top'/>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggle}>
                                                باشه
                                            </Button>{" "}
                                        </ModalFooter>
                                    </Modal>
                                </div>
                    </Colxx>
                </Row>
            </div>
        );
    }
}

export default ShowModal;
import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import ax from '../../../../../assets/img/4th-1.jpg'
 import {
     Button,
     Card,
    CardBody,
    CardSubtitle,
    CardText, Modal, ModalBody, ModalFooter, ModalHeader
 } from "reactstrap";
import {DeleteCategory, DeleteProduct} from '../../../../functions/ServerConnection'

import {  TweenMax} from "gsap/TweenMax";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";


class CategoryEachItems extends Component {
    constructor(props) {
        super(props);
        this.deleteToggle = this.deleteToggle.bind(this);
        this.state={
            DeleteModal:false
        }
    }

    deleteToggle() {
        this.setState(state => ({ DeleteModal: !state.DeleteModal }));
    }

    handelEditCategory(){

    }
    async DeleteCategory(){
        let deleteProduct = await DeleteCategory(this.props.data['name']);
        var id = this.props.data['_id'];
        let {state, Description} = deleteProduct;
        if (state) {
            NotificationManager.success(
                "congratulation",
                "محصول شما با موفقیت حذف شد",
                3000,
                null,
                null,
                "success"
            );
            const $el = document.getElementById(`${id}`);
            const duration = 2;
            const from = {opacity: 0};
            TweenMax.to($el, duration, from);
            setTimeout(() => {
                $el.remove();
            }, 2000)
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
        this.deleteToggle();

    }

    render() {
        let {data}=this.props;
         return (
             <div >
                 <Card className="d-flex flex-column mb-4 br02" id={data._id}>
                     <div className='position-relative'>
                         <NavLink to= {`/content/category/detail/info/${data._id}`} className="d-flex h-20vh w-100 ">
                             <img src={data.image} alt="profile" className='card-img-top'/>
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


                         <CardBody className='w-100 d-flex justify-content-center align-items-center'>
                        <span
                            className=" btn btn-primary col-1 glyph-icon iconsminds-folder-close d-flex justify-content-center align-items-center h-50"
                            onClick={this.deleteToggle }> </span>
                             <div className={['d-flex','collapseSpanHeight','text-center d-flex justify-content-center align-items-center','align-items-end',' ' , 'col-10'].join(' ')} dir='rtl'>
                                 <span className='collapseValue gray'> نام  <span className='pl-2'>:</span></span>
                                 <span className=' collapseValue'>{data.name}</span>
                             </div>

                             {/*<RowShowShowColEdit label='نام' value={data.name} col="col-10 " className='text-center d-flex justify-content-center align-items-center'/>*/}

                             <NavLink to= {`/content/category/each/info/${data._id}`} className="d-flex h-20vh w-100 ">
                                 <span
                                     className=' btn btn-secondary col-1 glyph-icon iconsminds-folder-edit d-flex justify-content-center align-items-center h-50'
                                     onClick={this.handelEditCategory.bind(this)}> </span>
                              </NavLink>

                         </CardBody>
                     </div>
                 </Card>
                 {/**************Modal for delete Product:are us sure?************/}
                 <Modal
                     isOpen={this.state.DeleteModal}
                     size="lg"
                     toggle={this.deleteToggle}
                 >
                     <ModalHeader toggle={this.deleteToggle}>
                     </ModalHeader>
                     <ModalBody>
                         آیا مطممئین هستید که می خواهید این  دسته بندی را حذف کنید؟                    </ModalBody>
                     <ModalFooter>
                         <Button color="primary" onClick={this.DeleteCategory.bind(this)}>بله</Button>{' '}
                         <Button color="secondary" onClick={this.deleteToggle}>بی خیال</Button>
                     </ModalFooter>
                 </Modal>
             </div>

        );
    }
}

export default CategoryEachItems;
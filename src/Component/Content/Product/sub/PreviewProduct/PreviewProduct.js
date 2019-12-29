import React, {Component} from 'react';
import ax from "./../../../../../assets/img/Arsenal_FC.png";
import {Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import RowShowShow from "../../../../PresentOrders/RowShowShow";
import RowShowShowColEdit from "../../../../Support/Users/UserDetails/sub/RowShowShowColEdit/RowShowShowColEdit";
import {  TweenMax} from "gsap/TweenMax";
import {NavLink} from "react-router-dom";
import {DeleteProduct} from "../../../../functions/ServerConnection";
import NotificationManager from "../../../../../components/common/react-notifications/NotificationManager";

class PreviewProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            sub:{},Main:{},Keys:[],DeleteModal:false
        };
        this.deleteToggle = this.deleteToggle.bind(this);
    }

    componentDidMount(){
        let{sub,Main}=this.props;
        let Keys;
        Keys=Object.keys(sub);
        this.setState({
            sub,Keys,Main
        },()=>{

            // console.log('sub');
            // console.log(sub)
            // console.log('Main');
            // console.log(Main)
            // console.log('Keys');
            // console.log(Keys)
        });
    }
    async handelDelete(){
        let {Main}=this.state;
        let deleteProduct =await DeleteProduct(Main['name']);
        let{state,Description}=deleteProduct;
        if (state ) {
            NotificationManager.success(
                "congratulation",
                "محصول شما با موفقیت حذف شد",
                3000,
                null,
                null,
                "success"
            );

            let id=Main['id'];
            const $el = document.getElementById(`${id}`);
            const duration = 2;
            const from = { opacity: 0};
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


    }
    deleteToggle() {
        this.setState(state => ({ DeleteModal: !state.DeleteModal }));
    }



    render() {
        let{sub,Keys,Main}=this.state;
                 let {Off}=Main;
        // Enable: true, Percentage: 0.1
        if (Off!==undefined) {
            // console.log(Off['Enable']);
            // console.log(Off['Percentage']);
        }else {
            // console.log("hasent off")
        }


        return (
            <div className={['   h-40vh align-items-center  mt-3 position-relative', this.props.class.length>1?this.props.class:"" ].join(' ')} id={Main['id']}>

                     <Card className='d-flex flex-column h-100 align-items-center br-product w-100'>
                         {
                             Off !== undefined ?
                                 Off['Enable'] ?
                                     <div className='w-100 '>
                                         <div className='triangle   '>
                                         </div>
                                         <span className='persentSale'>{ Off['Percentage']*100  }%</span>
                                     </div>
                                     :
                                     ""
                                 : ""
                         }

                         <div className='col-3  positionAction '>
                             <button
                                 className='badge badge-outline-primary w-100 d-flex justify-content-center   cursor-pointer'
                                 onClick={this.deleteToggle}> delete
                             </button>
                             <NavLink to={`/content/product/add/${Main['id']}`} className="d-flex">
                                 <button
                                     className='badge badge-outline-secondary w-100 d-flex justify-content-center mt-2  cursor-pointer '> edit
                                 </button>
                             </NavLink>
                         </div>


                        <div className="h-20vh d-flex align-items-end  ">
                            <div className="bg-circle-product d-flex justify-content-center align-items-center position-relative">
                                <div className="ax-Product-circle">
                                    <img src={Main['Images']} alt={ax} className="img-self-fill"/>
                                </div>
                            </div>

                        </div>
                         <NavLink to={`/content/product/each/info/${Main['id']}`} className="d-flex">

                        <div className="h-20vh d-flex align-items-center justify-content-center flex-column w-100">
                            <p className="fs-13vw color-gray">{Main['name']}</p>
                            <div className=' w-100 '>
                                {
                                    Off !== undefined ?
                                        Off['Enable'] ?
                                            <div className='d-flex col-10 offset-1 '>
                                                   <span className="fs-1vw color-gray   "
                                                         dir='rtl'>{Main['CurrentPrice']} تومن </span>
                                                <span className="fs-1vw color-gray lineOverText text-muted ml-auto "
                                                      dir='rtl'>{Main['PrevPrice']} تومن </span>
                                            </div> :
                                            <div className='d-flex justify-content-center '>
                                                <p className="fs-1w color-gray" dir='rtl'>{Main['CurrentPrice']} تومن </p>
                                            </div>

                                        : ""
                                }


                            </div>
                            <div className='d-flex  w-100 flex-wrap justify-content-center' dir='rtl'>
                                {Keys ?
                                    Keys.map((todo, index) =>
                                        <RowShowShowColEdit label={todo} value={sub[todo]} key={index} col={todo==='ادرس'?'col-12':'col-6'} className='p-0 d-flex justify-content-center' />
                                    ) : ''
                                }


                            </div>
                        </div>


                         </NavLink>
                    </Card>



                <Modal
                    isOpen={this.state.DeleteModal}
                    size="lg"
                    toggle={this.deleteToggle}
                >
                    <ModalHeader toggle={this.deleteToggle}>
                    </ModalHeader>
                    <ModalBody>
                        آیا مطممئین هستید که می خواهید این محصول را حذف کنید؟                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handelDelete.bind(this)}>بله</Button>{' '}
                        <Button color="secondary" onClick={this.deleteToggle}>بی خیال</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default PreviewProduct;
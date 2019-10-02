import React, {Component} from 'react';
import {Card} from "reactstrap";
import img from './../../../../../../../assets/img/thumb-2.jpg'
import RowShowShowColEdit from "../../RowShowShowColEdit/RowShowShowColEdit";
import RowShowShowEditWithoutLabel from "../../RowShowShowColEdit/RowShowShowEditWithoutLabel";
import {formatNumber} from './../../../../../../functions/Functions'



class FavoriteUserCard extends Component {
    render() {
        return (
            <div className='height40vh' dir='rtl'>

                <Card className='d-flex justify-content-start align-items-center'>
                    <div className='triangle '>
                    </div>
                    <span className='persentSale'>50%</span>

                        <div className='imgFav'>
                            <img src={img} className='img-self br50'/>
                        </div>
                    <div>
                        <RowShowShowEditWithoutLabel value='شیر یک لیتری میهن' col='col-12'/>
                        <RowShowShowColEdit label='قیمت' value={formatNumber(32132132)} col='col-12'/>
                        <RowShowShowColEdit label='تخفیف' value={formatNumber(32132132)} col='col-12'/>
                    </div>

                </Card>
            </div>
        );
    }
}

export default FavoriteUserCard;
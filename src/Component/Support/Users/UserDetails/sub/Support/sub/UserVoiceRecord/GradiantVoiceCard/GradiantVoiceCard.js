import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";
import audio from './../../../../../../../../../assets/audio/01. Intro (Injaneb) .mp3'
// import RowShowShow from "../../../../../../../../PresentOrders/RowShowShow";
import RowShowShowColEdit from "../../../../RowShowShowColEdit/RowShowShowColEdit";

class GradiantVoiceCard extends Component {
    render() {
        return (
            <Card className=" w-100 align-items-center" >
                {/*<CardBody className="justify-content-end d-flex flex-column">*/}

                <div dir='rtl'>
                    <audio
                        src={audio}
                        // autoPlay
                        controls="controls"
                        dir='rtl'
                    >

                        Your browser does not support the <code>audio</code> element.
                    </audio>
                    <br/>
                    <div>

                        <RowShowShowColEdit label={'شماره موبایل'} value={'09112561701'} col={'col-12'}/>
                        <RowShowShowColEdit label={'تاریخ'} value={'25-3-98'} col={'col-12'}/>
                        <RowShowShowColEdit label={'ساعت'} value={'21:30'} col={'col-12'}/>
                    </div>

                </div>

                {/*{children}*/}
                {/*</CardBody>*/}
            </Card>
        );
    }
}

export default GradiantVoiceCard;
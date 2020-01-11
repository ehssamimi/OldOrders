// import React, {Component} from 'react';
import React, { Component } from "react";
import { Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { BottomNavigation } from "../../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../../components/wizard/TopNavigation";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Step6 from "./Step6/Step6";


class ChichiManSignIn extends Component {
    constructor(props) {
        super(props);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.topNavClick = this.topNavClick.bind(this);
        this.state = {
            name: "",
            email: "",
            password: "",
            phoneNumber:""
        }
    }

    topNavClick(stepItem, push) {
        push(stepItem.id);
    }

    onClickNext(goToNext, steps, step) {
        step.isDone = true;
        if (steps.length - 1 <= steps.indexOf(step)) {
            return;
        }
        goToNext();
    }

    onClickPrev(goToPrev, steps, step) {
        if (steps.indexOf(step) <= 0) {
            return;
        }
        goToPrev();
    }
    forwardTo(goToNext, steps, step,goToPrev){
        this.onClickNext(goToNext, steps, step)
    }
    PrevTo(){

    }

    getPhoneNumber(phoneNumber) {
        this.setState({
            phoneNumber
        })
    }


    render() {
        // const { messages } = this.props.intl;
        let{phoneNumber}=this.state;
        return (
            <div className='wizard wizard-default col-12'>
                <Wizard>
                    <TopNavigation className="justify-content-center" disableNav={false} topNavClick={this.topNavClick} />
                    <Steps>
                        <Step id="step1" name={"ثبت شماره موبایل"}>
                            <div className="wizard-basic-step">
                                <Step1 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"ذخیره اطلاعات"} GetPhoneNumber={this.getPhoneNumber.bind(this)}/>
                            </div>
                        </Step>
                        <Step id="step2" name={"اهراز هویت"}>
                            <div className="wizard-basic-step">
                                <Step2 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"مرحله بعد"} PhoneNumber={phoneNumber}/>
                            </div>
                        </Step>
                        <Step id="step3" name={"اطلاعات اولیه"} >
                            <div className="wizard-basic-step">
                                <Step3 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"مرحله بعد"} PhoneNumber={phoneNumber}/>
                            </div>
                        </Step>
                        <Step id="step4" name={"اطلاعات نقلیه"}>
                            <div className="wizard-basic-step">
                                <Step4 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"مرحله بعد"} PhoneNumber={phoneNumber}/>
                            </div>
                        </Step>
                        <Step id="step5" name={"مستندات قرارداد"}
                            // desc={"wizard.step-desc-5"}
                        >
                            <div className="wizard-basic-step">
                                <Step5 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"مرحله بعد"} PhoneNumber={phoneNumber}/>
                            </div>
                        </Step>
                        <Step id="step6" name={"اطلاعات مالی"}
                            // desc={"wizard.step-desc-5"}
                        >
                            <div className="wizard-basic-step">
                                <Step6 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"مرحله بعد"}  PhoneNumber={phoneNumber}/>
                            </div>
                        </Step>
                        <Step id="step7" hideTopNav={true}>
                            <div className="wizard-basic-step text-center">
                                <h2 className="mb-2"><IntlMessages id="wizard.content-thanks" /></h2>
                                <p><IntlMessages id="wizard.registered" /></p>
                            </div>
                        </Step>
                    </Steps>
                    {/*<BottomNavigation onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"wizard.prev"} nextLabel={"wizard.next"} />*/}
                </Wizard>
            </div>


            //     </CardBody>
            // </Card>
        );
    }
}

export default ChichiManSignIn;
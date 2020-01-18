 import React, { Component } from "react";
 import IntlMessages from "../../../helpers/IntlMessages";
import {Wizard, Steps, Step, WithWizard} from 'react-albus';
 // import { BottomNavigation } from "../../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../../components/wizard/TopNavigation";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import Step6 from "./Step6/Step6";
 import {ChichiManIfoDetail} from "../../functions/ServerConnection";


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
            phoneNumber:"",
            // item:{id: "step3", name: "اطلاعات اولیه"},
            item:"",
            Info:{}
        }
    }
  async componentDidMount(){
      const {match: {params}} = this.props;
      let{id,step}=params;
      var item={id: "", name: ""};

      switch(step) {
          case "step1":
              item = {id: step, name: "ثبت شماره موبایل"};
              break;
          case "step2":
              item = {id: step, name: "اهراز هویت"};
              break;
          case "step3":
              item = {id: step, name: "اطلاعات اولیه"};
              break;
          case "step4":
              item = {id: step, name: "اطلاعات نقلیه"};
              break;
          case "step5":
              item = {id: step, name: "مستندات قرارداد"};
              break;
          case "step6":
              item = {id: step, name: "اطلاعات مالی"};
              break;
          default:
              item = {id: step, name: "اطلاعات اولیه"};
      }

       let Info= await ChichiManIfoDetail(id);
      // console.log(Info);

      // console.log(Detail['vehicle']);

      // Identify: {header: "اهراز هویت", sub: {…}}
      // PersonalInfo: {header: "اطلاعات شخصی", sub: {…}, Images: {…}}
      // vehicle: {header: "اطلاعات وسیله نقلیه", sub: {…}, images: {…}}
      // contract: {header: "مستندات قرارداد", sub: {…}, images: {…}}
      // BankInfo: {header: "اطلاعات بانکی", sub: {…}}

      this.setState({
          item ,
          Info,
          phoneNumber:Info['Identify']['sub']['شماره موبال']
      },()=>{
          // console.log(this.state.Info['vehicle']['sub'])
      });



  }


    topNavClick(stepItem, push) {
        console.log(stepItem);
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
        let{phoneNumber,item}=this.state;
        // console.log(item);
        return (
            <div className='wizard wizard-default col-12'>
                <Wizard>
                    <TopNavigation className="justify-content-center" disableNav={false} topNavClick={this.topNavClick} item={item}   />
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
                                <Step4 onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className="justify-content-center" prevLabel={"مرحله قبل"} nextLabel={"مرحله بعد"} PhoneNumber={phoneNumber} info={Object.keys(this.state.Info).length!==0?this.state.Info['vehicle']['sub']:""}/>
                            </div>
                        </Step>
                        <Step id="step5" name={"مستندات قرارداد"}>
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
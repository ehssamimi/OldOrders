import React, {Component} from 'react';

import EachDropDown from "./sub/EachDropDown";

class TopHeaders4Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checkedCheckboxes: [],
            checkedCheckboxes: 1,
            dropdownBasicOpen: false,
            title1:'هفته',
            oneWeek: false,
            twoWeek: false,
            threeWeek: false,
            fourthWeek: false,
            fiveWeek: false,

        };
    }
    componentDidMount(){
        console.log(this.props)
    }
    HeadersCheckBox(value) {
        console.log(value);
        if (value === 'oneWeek') {
            this.setState({
                oneWeek: true,
                twoWeek: false,
                threeWeek: false,
                fourthWeek: false,
                fiveWeek: false,
            })
        } else if (value === 'twoWeek') {
            console.log('we are in two week');
            this.setState({
                oneWeek: false,
                twoWeek: true,
                threeWeek: false,
                fourthWeek: false,
                fiveWeek: false,
            })
        } else if (value === 'threeWeek') {
            this.setState({
                oneWeek: false,
                twoWeek: false,
                threeWeek: true,
                fourthWeek: false,
                fiveWeek: false,
            })
        } else if (value === 'fourthWeek') {
            this.setState({
                oneWeek: false,
                twoWeek: false,
                threeWeek: false,
                fourthWeek: true,
                fiveWeek: false,
            })
        } else if (value === 'fiveWeek') {
            this.setState({
                oneWeek: false,
                twoWeek: false,
                threeWeek: false,
                fourthWeek: false,
                fiveWeek: true,
            })
        }
    }

    GetPropertise(week,value){
        console.log('week');
        console.log(week);
        console.log('value');
        console.log(value);
    }
    render() {
        console.log(this.state);
        return (

            <div className=" w-100  d-flex justify-content-center" dir='rtl'>
                <div className='d-flex col-12 justify-content-between'>
                    <div className=' paddingZero col-2'>
                        <EachDropDown header='هفته اول' HeadersCheckBox={this.HeadersCheckBox.bind(this)} isOpen={this.state.oneWeek}  label={'oneWeek'} GetPropertise={this.GetPropertise.bind(this)} />
                    </div>
                    <div className=' paddingZero  col-2'>
                        <EachDropDown header='هفته دوم' HeadersCheckBox={this.HeadersCheckBox.bind(this)} isOpen={this.state.twoWeek} label={'twoWeek'} GetPropertise={this.GetPropertise.bind(this)}/>
                    </div>
                    <div className=' paddingZero  col-2'>
                        <EachDropDown header='هفته سوم' HeadersCheckBox={this.HeadersCheckBox.bind(this)} isOpen={this.state.threeWeek} label={'threeWeek'} GetPropertise={this.GetPropertise.bind(this)}/>
                    </div>
                    <div className=' paddingZero  col-2'>
                        <EachDropDown header='هفته چهارم' HeadersCheckBox={this.HeadersCheckBox.bind(this)} isOpen={this.state.fourthWeek} label={'fourthWeek'} GetPropertise={this.GetPropertise.bind(this)}/>
                    </div>
                    <div className=' paddingZero col-2' >
                         <EachDropDown header='هفته پنجم' HeadersCheckBox={this.HeadersCheckBox.bind(this)} isOpen={this.state.fiveWeek} label={'fiveWeek'} GetPropertise={this.GetPropertise.bind(this)}/>
                    </div>
            </div>


            </div>
        );
    }
}

export default TopHeaders4Tabs;
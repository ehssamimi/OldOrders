import React, {Component} from 'react';
import CardUserBugReport from "../../../Bug-Reporter/Users/CardUserBugReport/CardUserBugReport";

class SupportMessageUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            subRow:[
                {
                    'header': "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باداشت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باداشت",
                    'sub': {
                        'عنوان':"بازشدگی" ,
                        'نام و نام خانوادگی': ' احسان صمیمی راد',
                        'شماره موبایل': "09112561701",
                    }
                },   {
                    'header': "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باداشت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باداشت",
                    'sub': {
                        'عنوان':"نگاه داشتن" ,
                        'نام و نام خانوادگی': 'موسوی خوینی ها',
                        'شماره موبایل': "09357845241",
                    }
                },   {
                    'header': "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باداشت لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باداشت",
                    'sub': {
                        'عنوان':"شدگی" ,
                        'نام و نام خانوادگی': 'اسکوبی دو',
                        'شماره موبایل': "09913548215",
                    }
                },

            ]

        }
    }
    render() {
        let {subRow}=this.state;
        return (
            <div className='w-100'>
                {subRow ?
                    subRow.map((todo, index) =>
                        <CardUserBugReport store={todo} index={index}/>
                    ) : ''
                }
            </div>
        );
    }
}

export default SupportMessageUser;
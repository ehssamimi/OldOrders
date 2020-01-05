import React, {Component} from 'react';
import ChichiManInfoCard from "../ChichiMan-Info/Main-Chichi-Info/sub/ChichiManInfoCard/ChichiManInfoCard";
import ax from "../../../assets/img/4th-1.jpg";

class ChichiManList extends Component {
    constructor(props) {
        super(props);
        this.state={
            listChichiMan: [{
                'name': "احسان صمیمی راد",
                'phoneNumber': "09112561701",
                'image': ax,
                'vehicle': "موتور برقی",
                'Plaque': '62 ب ایران 62'
            }, {
                'name': "سهند میرزایی",
                'phoneNumber': "09365265",
                'image':  '',
                'vehicle': "موتور برقی",
                'Plaque': '62 ب ایران 62'
            },
                {
                    'name': "احسان صمیمی راد",
                    'phoneNumber': "09112561701",
                    'image': ax,
                    'vehicle': "موتور برقی",
                    'Plaque': '62 ب ایران 62'
                },
            ]
        }
    }

    render() {
        let{listChichiMan}=this.state;
        return (
            <div className='row m-0 w-100'>
                {
                    listChichiMan.length>0?
                        listChichiMan.map((chichiMan ,index)=><ChichiManInfoCard id={index} key={index} chichiMan={chichiMan}  {...this.props } class='col-sm-6 col-md-4 col-lg-3'  />):""
                }

            </div>
        );
    }
}

export default ChichiManList;
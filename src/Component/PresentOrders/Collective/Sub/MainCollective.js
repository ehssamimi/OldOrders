import React, {Component} from 'react';
import { Card} from "reactstrap";
import LeftMainCollective from "./LeftMainCollective/LeftMainCollective";

class MainCollective extends Component {
    render() {
        return (
            <div dir='rtl'>
                <Card className='OrderList p-3'>
                    <LeftMainCollective/>
                </Card>
            </div>
        );
    }
}

export default MainCollective;
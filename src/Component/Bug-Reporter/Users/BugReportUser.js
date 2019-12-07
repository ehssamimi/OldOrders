import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader
} from 'reactstrap';
import ShowShowline from "../../Support/Users/UserDetails/sub/Support/sub/ReportUserBox/ShowShowLine/ShowShowline";
class BugReportUser extends Component {


    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Card title</CardTitle>
                    </CardHeader>
                    <CardBody>
                   <ShowShowline label={"label"} value={"value"} key={1} col={'col-4'} className='fS1vw'/>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default BugReportUser;
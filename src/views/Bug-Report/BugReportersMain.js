import React, {Component, Suspense} from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from './../../layout/AppLayout';
// import SupportUsers from "../../Component/Support/Users/SupportUsers";

const Users = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/Bug-Reporter/Users/BugReportUser')
);
const Admins = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/Bug-Reporter/Admin/BugReportAdmin')
);
// const PresentOrdersMain = React.lazy(() =>
//     import(/* webpackChunkName: "viwes-gogo" */ './PresentOrders/PresentOrdersMain')
// );


class App extends Component {
    render() {
        const { match } = this.props;

        return (
            <AppLayout>
                <div className="dashboard-wrapper">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/user`} />
                            <Route
                                path={`${match.url}/user`}
                                render={props => <Users {...props} />}
                            />
                            <Route
                                path={`${match.url}/admin`}
                                render={props => <Admins {...props} />}
                            />
                            <Redirect to="/error" />
                        </Switch>
                    </Suspense>
                </div>
            </AppLayout>
        );
    }
}
const mapStateToProps = ({ menu }) => {
    const { containerClassnames } = menu;
    return { containerClassnames };
};

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(App)
);
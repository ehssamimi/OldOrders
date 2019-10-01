import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from './../../layout/AppLayout';
// import SupportUsers from "../../Component/Support/Users/SupportUsers";

const SupportUsers = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/Support/Users/SupportUsers')
);
const UserInfoCard = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/Support/Users/UserDetails/UserDetailsInfo')
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
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/users`} />
                            <Route
                                path={`${match.url}/users`}
                                render={props => <SupportUsers {...props} />}
                            />
                            <Route
                                path={`${match.url}/user/info/:userId`}
                                render={props => <UserInfoCard {...props} />}
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

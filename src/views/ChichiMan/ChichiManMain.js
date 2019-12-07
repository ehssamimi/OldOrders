import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from './../../layout/AppLayout';

const ChichiManSignIn = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/ChichiMan/ChiChi Man Sign In/ChichiManSignIn')
);
const ChichiManInfo = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/ChichiMan/ChichiMan-Info/ChichiMan-info')
);


class App extends Component {
    render() {
        const { match } = this.props;

        return (
            <AppLayout>
                <div className="dashboard-wrapper">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/sign-in`} />
                            <Route
                                path={`${match.url}/sign-in`}
                                render={props => <ChichiManSignIn {...props} />}
                            />
                            <Route
                                path={`${match.url}/info`}
                                render={props => <ChichiManInfo {...props} />}
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

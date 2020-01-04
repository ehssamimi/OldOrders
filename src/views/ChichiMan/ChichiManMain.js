import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from './../../layout/AppLayout';

const ChichiManSignIn = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/ChichiMan/ChiChi Man Sign In/ChichiManSignIn')
);
const ChichiManInfo = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './ChichiMan-Info/ChichiMan-info')
);
const Vote = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './ChichiMan-vote/ChichiMan-vote')
);
const Statistic = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './ChichiMan-statistic/ChichiMan-statistic')
);
const ChichiList = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/ChichiMan/chichiMan-List/ChichiManList')
);

const ChichiManInfoSubmit = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/ChichiMan/chichiMan-List/ChichiMan-info-submit-info/ChichiMan-info-submit-info')
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
                            {/*<Route*/}
                                {/*path={`${match.url}/info`}*/}
                                {/*render={props => <ChichiManInfo {...props} />}*/}
                            {/*/>*/}

                            <Route
                                path={`${match.url}/list`}
                                render={props => <ChichiList {...props} />}
                            />
                            <Route
                                path={`${match.url}/history-orders`}
                                render={props => <ChichiManInfo {...props} />}
                            />
                            <Route
                                path={`${match.url}/vote`}
                                render={props => <Vote {...props} />}
                            />
                            <Route
                                path={`${match.url}/statistic`}
                                render={props => <Statistic {...props} />}
                            />
                            <Route
                                path={`${match.url}/check-out`}
                                render={props => <ChichiManInfo {...props} />}
                            />
                            <Route
                                path={`${match.url}/status`}
                                render={props => <ChichiManInfo {...props} />}
                            />
                            <Route
                                path={`${match.url}/info/:userId`}
                                render={props => <ChichiManInfoSubmit {...props} />}
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

import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from './../../layout/AppLayout';

const OldOrdersMain = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './oldOrders/OldOrdersMain')
);
const PresentOrdersMain = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './PresentOrders/PresentOrdersMain')
);
// const SecondMenu = React.lazy(() =>
//     import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
// );
// const BlankPage = React.lazy(() =>
//     import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
// );

class App extends Component {
    render() {
        const { match } = this.props;

        return (
            <AppLayout>
                <div className="dashboard-wrapper">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/present`} />
                            <Route
                                path={`${match.url}/old`}
                                render={props => <OldOrdersMain {...props} />}
                            />
                            <Route
                                path={`${match.url}/present`}
                                render={props => <PresentOrdersMain {...props} />}
                            />

                            {/*<Route*/}
                            {/*path={`${match.url}/second-menu`}*/}
                            {/*render={props => <SecondMenu {...props} />}*/}
                            {/*/>*/}
                            {/*<Route*/}
                            {/*path={`${match.url}/blank-page`}*/}
                            {/*render={props => <BlankPage {...props} />}*/}
                            {/*/>*/}
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

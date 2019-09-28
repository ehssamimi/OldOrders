import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../../layout/AppLayout';

const SuccessPaid = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/SuccessPaid/SuccessPaid')
);
const Sabt = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/CollectOrders/SabtOrders')
);
const Collective = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/Collective/Collective')
);
const WaitingAcceptChichi = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/WaitingAcceptChichi/MainWaitingAccept')
);
const ChichiOnGo = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/ChichiOngo/MainChichiOnGo')
);
const ChichiWaitingCustomer = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/ChichiWaitingCustomer/ChichiWaitingCustomer')
);
const Deliverd = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/PresentOrders/Deliverded/Deliverd')
);


class App extends Component {
    render() {
        const { match } = this.props;

        return (

                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/successpaid`} />
                            <Route
                                path={`${match.url}/successpaid`}
                                render={props => <SuccessPaid {...props} />}
                            />
                            <Route
                                path={`${match.url}/sabt`}
                                render={props => <Sabt {...props} />}
                            />
                            <Route
                                path={`${match.url}/collect`}
                                render={props => <Collective {...props} />}
                            />
                            <Route
                                path={`${match.url}/waiting-accept-chichi`}
                                render={props => <WaitingAcceptChichi {...props} />}
                            />
                            <Route
                                path={`${match.url}/chichi-on-go`}
                                render={props => <ChichiOnGo {...props} />}
                            />
                            <Route
                                path={`${match.url}/chichi-waiting-customer`}
                                render={props => <ChichiWaitingCustomer {...props} />}
                            />
                            <Route
                                path={`${match.url}/delivered`}
                                render={props => <Deliverd {...props} />}
                            />
                            <Redirect to="/error" />
                        </Switch>
                    </Suspense>

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

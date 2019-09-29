import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const YesterDay = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/YesterDay/YesterDay')
);
const BeforeYesterDay = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/BeforeYesterDay/BeforeYesterDay')
);
const CurrentWeek = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/CurrentWeek/CurrentWeek')
);
const PastWeekMain = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/PastWeek/PastWeekMain')
);
const CurrentMounthMain = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/CurrentMonth/CurrentMounthMain')
);
const PastMonthMain = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/PastMonth/PastMonthMain')
);
const SelectTimeOrderMain = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/SelectTime/SelectTimeOrderMain')
);


class App extends Component {
    render() {
        const { match } = this.props;

        return (

                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/yesterday`} />
                            <Route
                                path={`${match.url}/yesterday`}
                                render={props => <YesterDay {...props} />}
                            />
                            <Route
                                path={`${match.url}/before-yesterday`}
                                render={props => <BeforeYesterDay {...props} />}
                            />
                            <Route
                                path={`${match.url}/current-week`}
                                render={props => <CurrentWeek {...props} />}
                            />
                            <Route
                                path={`${match.url}/past-week`}
                                render={props => <PastWeekMain {...props} />}
                            />
                            <Route
                                path={`${match.url}/current-month`}
                                render={props => <CurrentMounthMain {...props} />}
                            />
                            <Route
                                path={`${match.url}/past-month`}
                                render={props => <PastMonthMain {...props} />}
                            />
                            <Route
                                path={`${match.url}/select-time`}
                                render={props => <SelectTimeOrderMain {...props} />}
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

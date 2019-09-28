import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../../layout/AppLayout';

const YesterDay = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/OldOrders/YesterDay/YesterDay')
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

                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/yesterday`} />
                            <Route
                                path={`${match.url}/yesterday`}
                                render={props => <YesterDay {...props} />}
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

import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AppLayout from './../../../layout/AppLayout';
const EditMainHomePage = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/HomePages/Main/PreviewAllPages/PreviewAllMainMobile')
);
const PreviewAllMainMobile = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/HomePages/Main/Edit/HomePagePreview')
);
const Test = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../../Component/HomePages/Main/Edit/Test')
);
const ActiveMainHomePage = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../../Component/HomePages/Main/Active/ActiveMainHomePages')
);
const AddMainHomePage = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../../Component/HomePages/Main/Add/AddMainHomePage')
);

class App extends Component {
    render() {
        const { match } = this.props;

        return (

                <div className=" ">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/edit`} />
                            <Route
                                path={`${match.url}/create`}
                                render={props => <ActiveMainHomePage  {...props} />}
                            />
                            <Route
                                path={`${match.url}/edit`}
                                render={props => <EditMainHomePage {...props} />}
                            />
                            <Route
                                path={`${match.url}/active`}
                                render={props => <AddMainHomePage {...props} />}
                            />

                            <Redirect to="/error" />
                        </Switch>
                    </Suspense>
                </div>

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

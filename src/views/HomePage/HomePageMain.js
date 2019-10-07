import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AppLayout from './../../layout/AppLayout';
const HomePages = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/HomePages/HomePages')
);
const CropImg = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ './../../Component/HomePages/Sub/CropImg/CropImgCropper')
);
const Categories = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../Component/HomePages/Sub/CategoriesHomePage/CategoriesAddHomePage')
);
const WonderPackage = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../Component/HomePages/Sub/WonderPackageAddHomePage/WonderPackageAddHomePage')
);
const Slider = React.lazy(() =>
    import(/* webpackChunkName: "viwes-gogo" */ '../../Component/HomePages/Sub/SliderAddHomePage/SliderAddHomePage')
);

class App extends Component {
    render() {
        const { match } = this.props;

        return (
            <AppLayout>
                <div className="dashboard-wrapper">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/main`} />
                            <Route
                                path={`${match.url}/main`}
                                render={props => <HomePages {...props} />}
                            />
                            {/*<Route*/}
                                {/*path={`${match.url}/crop-img`}*/}
                                {/*render={props => <CropImg {...props} />}*/}
                            {/*/>*/}
                            <Route
                                path={`${match.url}/categories`}
                                render={props => <Categories {...props} />}
                            />
                            <Route
                                path={`${match.url}/wonder-package`}
                                render={props => <WonderPackage {...props} />}
                            />
                            <Route
                                path={`${match.url}/slider`}
                                render={props => <Slider {...props} />}
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

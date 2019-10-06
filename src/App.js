import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import NotificationContainer from './components/common/react-notifications/NotificationContainer';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views')
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);
const MainOrders = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/Orders/MainOrders')
);
const ChichiMan = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/ChichiMan/ChichiManMain')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);
const Support = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './views/Support/SupportMain')
);
const HomePages = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './views/HomePage/HomePageMain')
);

const AuthRoute = ({ component: Component, authUser, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                authUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/user/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

class App extends Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
    this.state={
        loginUser:true
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  <Route
                    path="/app"
                    render={props => <ViewApp {...props} />}
                  />
                    <AuthRoute
                        path="/orders"
                        authUser={this.state.loginUser}
                        component={MainOrders}
                    />
                    <AuthRoute
                        path="/chichi-man"
                        authUser={this.state.loginUser}
                        component={ChichiMan}
                    />
                    <AuthRoute
                        path="/support"
                        authUser={this.state.loginUser}
                        component={Support}
                    />
                    <AuthRoute
                        path="/home-page"
                        authUser={this.state.loginUser}
                        component={HomePages}
                    />
                    {/*<Route*/}
                        {/*path="/orders"*/}
                        {/*render={props => <MainOrders {...props} />}*/}
                    {/*/>*/}
                  <Route
                    path="/error"
                    exact
                    render={props => <ViewError {...props} />}
                  />
                  <Route
                    path="/"
                    exact
                    render={props => <ViewMain {...props} />}
                  />
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

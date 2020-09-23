import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Overview from "./components/Overview/Overview";
import Events from "./components/Overview/Events";
import { getSession } from "./utils/login";
import { EventTypeForm } from "./components/RegisterEventForm/EventTypeForm";

import "antd/dist/antd.css";
import "./css1-normalize.css";
import "./css2-skeleton.css";
import "./css3-antd-custom.less";
import "./css4-dashboard.css";

import { Provider } from "react-redux";
import { configureStore } from "./utils/store";

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register">
            <Auth />
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

          <Route exact path="/overview">
            <Overview />
          </Route>

          <Route exact path="/events">
            <Events />
          </Route>

          <Route exact path="/registerEvents">
            <EventTypeForm />
          </Route>

          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

/**
 * A component to protect routes.
 * Shows Auth page if the user is not authenticated
 */
const PrivateRoute = ({ component, ...options }) => {
  const session = getSession();

  const finalComponent = session ? Dashboard : Home;
  return <Route {...options} component={finalComponent} />;
};

export default App;

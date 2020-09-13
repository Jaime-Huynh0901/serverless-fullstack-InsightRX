import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import { getSession } from "./utils";
import { EventTypeForm } from "./pages/RegisterEventForm/EventTypeForm";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Auth />
        </Route>

        <Route path="/login">
          <Auth />
        </Route>

        <Route exact path="/registerEvents">
          <EventTypeForm />
        </Route>

        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </Router>
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

// Import React components
import React, { Component } from "react";

// Import UI config and api components
import OverviewConfig from "../../Config/configFiles/overviewConfig";
import Config from "../../Config/index";

// Import Redux components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchDatedEvents,
  fetchEvents,
  fetchRegisteredEvents,
  fetchSources,
} from "../../utils/actions";

// Import Styling components
import "./Overview.css";

/**
 * This component's responsibility is purely to fetch data and pass it down to its children.
 *
 * This is a pretty common pattern you'll see around that'll help keep your code clean and organized,
 * in which the "Container" component handles state management, http requests, and business logic, while
 * the display components (in this case, Overview), are purely responsible for looking pretty.
 *
 */

class Overview extends Component {
  componentDidMount = () => {
    const { dispatch, reportQuery, query } = this.props;
    dispatch(fetchRegisteredEvents()); //This call gets all the Event Types that have been registered and sets Registered Events to a list of Event Types
    dispatch(fetchDatedEvents(query)); //
    dispatch(fetchEvents(reportQuery));
    dispatch(fetchSources());
  };

  /**
   * This component's responsibility is to display the data that it receives from its parent. If a component
   * does not need to manage state, it's good practice to just make it a plain function like this.
   */

  render() {
    return Config(OverviewConfig, this.props);
  }
}

const mapStateToProps = (state) => {
  const {
    eventsWithDates,
    query,
    registeredEvents,
    sources,
    events,
    eventsReport,
    filteredEvents,
    reportQuery,
  } = state.eventsReduc;
  return {
    reportQuery: reportQuery,
    query: query,
    registeredEvents: registeredEvents,
    sources: sources,
    eventsWithDates: eventsWithDates,
    eventsReport: eventsReport,
    events: events,
    filteredEvents: filteredEvents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      { fetchDatedEvents, fetchEvents, fetchRegisteredEvents, fetchSources },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

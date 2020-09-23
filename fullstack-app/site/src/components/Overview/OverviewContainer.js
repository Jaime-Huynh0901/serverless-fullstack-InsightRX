import React, { Component } from "react";
import httpRequest from "../../clientsideAPI/httpRequest";
import Overview from "./Overview";
import Events from "./Events";
import UserConfig from "../../Config/configFiles/defaultUserSettings";

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchDatedEvents, fetchEvents, fetchRegisteredEvents, fetchSources } from '../../utils/actions';

/**
 * This component's responsibility is purely to fetch data and pass it down to its children.
 *
 * This is a pretty common pattern you'll see around that'll help keep your code clean and organized,
 * in which the "Container" component handles state management, http requests, and business logic, while
 * the display components (in this case, Overview), are purely responsible for looking pretty.
 *
 */ 

class OverviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredEvents: [],
      filteredEvents: [],
      sources: [],
      events: [],
      error: null,
      eventsCount: [],
      datedEvents: [],
      selectedSource: "",
      query: UserConfig.InitialQuery,
    };
  }
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchRegisteredEvents()); //This call gets all the Event Types that have been registered and sets Registered Events to a list of Event Types
    dispatch(fetchDatedEvents(UserConfig.DatedEvents)); //
    dispatch(fetchEvents(UserConfig.Events));
    dispatch(fetchSources());
    // this.fetchRegisteredEvents();
    // this.fetchSources();
    // this.fetchEvents(UserConfig.Events);
    // this.fetchDatedEvents(UserConfig.DatedEvents);
  };


  // setEventType = (e) => {
  //   this.setState((prevState) => {
  //     return {
  //       query: {
  //         ...prevState.query,
  //         "eventtype-name": e.value,
  //       },
  //     };
  //   });
  // };

  // setSourceName = (e) => {
  //   if (e.value === "All Sources") {
  //     this.setState({ filteredEvents: this.state.registeredEvents });
  //   } else {
  //     this.setState((prevState) => ({
  //       query: { ...prevState.query, "source-name": e.value },
  //     }));
  //   }
  //   this.setState({ selectedSource: e.value });
  //   this.updateEvents(e.value);
  // };

  // updateEvents = (val) => {
  //   if (val === "All Sources") {
  //     return;
  //   } else {
  //     this.setState((prevState) => {
  //       return {
  //         filteredEvents: prevState.registeredEvents.filter(
  //           (obj) => obj.source === prevState.query["source-name"]
  //         ),
  //       };
  //     });
  //   }
  // };

  // setVersionNumber = () => {
  //   this.setState((prevState) => {
  //     return {
  //       "version-number": prevState.VersionNumber,
  //     };
  //   });
  // };
  // setStartDate = () => {
  //   this.setState((prevState) => {
  //     return {
  //       "start-date": prevState.DateSelector.startDate,
  //     };
  //   });
  // };

  // setEndDate = () => {
  //   this.setState((prevState) => {
  //     return {
  //       "end-date": prevState.DateSelector.endDate,
  //     };
  //   });
  // };
  
  // fetchRegisteredEvents = async () => {
  //   try {
  //     const response = await httpRequest.getAll();
  //     const resp = response.data;
  //     this.setState({
  //       registeredEvents: resp,
  //       filteredEvents: resp,
  //       error: null,
  //     });
  //   } catch (err) {
  //     this.setState({ registeredEvents: [], error: err });
  //   }
  // };

  // fetchSources = async () => {
  //   try {
  //     const response = await httpRequest.getSources();
  //     this.setState({
  //       sources: response.data,
  //       error: null,
  //     });
  //   } catch (err) {
  //     this.setState({ sources: [], error: err });
  //   }
  // };
  // // Get all events of event types
  // fetchEvents = async obj => {
  //   try {
  //     const response = await httpRequest.getEventsReport(obj);
  //     this.setState({
  //       eventsCount: response.data.reportData,
  //       error: null
  //     });
  //   } catch (err) {
  //     this.setState({ eventsCounts: [], error: err });
  //   }
  // };

  // // Get all events of event types with dates
  // fetchDatedEvents = async obj => {
  //   try {
  //     console.log(obj);
  //     const response = await httpRequest.getEventsReport(obj);
  //     this.setState({
  //       datedEvents: response.data.reportData,
  //       error: null
  //     });
  //     console.log(this.state.datedEvents);
  //   } catch (err) {
  //     this.setState({ datedEvents: [], error: err });
  //   }
  // };

  render() {
    const {
      registeredEvents,
      sources,
      events,
      error,
      filteredEvents,
      selectedSource,
      eventsCount,
      datedEvents
    } = this.state;

    return window.location.pathname === "/overview" ? (
      <Overview
        registeredEvents={registeredEvents}
        filteredEvents={filteredEvents}
        sources={sources}
        events={events}
        error={error}
        eventsCount={eventsCount}
        datedEvents={datedEvents}
        selectedSource={selectedSource}
        fetchRegisteredEvents={this.fetchRegisteredEvents}
        fetchEvents={this.fetchEvents}
        setEventType={this.setEventType}
        setSourceName={this.setSourceName}
        setVersionNumber={this.setVersionNumber}
        setStartDate={this.setStartDate}
        setEndDate={this.setEndDate}
      />
    ) : (
      <Events
      registeredEvents={registeredEvents}
      filteredEvents={filteredEvents}
      sources={sources}
      events={events}

      eventsCount={eventsCount}
      selectedSource={selectedSource}
      fetchRegisteredEvents={this.fetchRegisteredEvents}

      setEventType={this.setEventType}
      setSourceName={this.setSourceName}
      setVersionNumber={this.setVersionNumber}
      setStartDate={this.setStartDate}
      setEndDate={this.setEndDate}

    />
    );
  }
}

const mapStateToProps = state => {
  const { eventsWithDates, query, registeredEvents, sources, eventsReport } = state;
  console.log(state);
  return {
    query: query,
    registeredEvents: registeredEvents,
    sources: sources,
    eventsWithDates: eventsWithDates,
    eventsReport: eventsReport
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({fetchDatedEvents, fetchEvents, fetchRegisteredEvents, fetchSources}, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
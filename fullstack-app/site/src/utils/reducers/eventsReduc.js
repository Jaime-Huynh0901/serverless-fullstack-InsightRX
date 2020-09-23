// import actions
import * as actions from "../actions";
import config from "../../Config/configFiles/defaultUserSettings";

// Reducer: pure function that takes previous state and an action, and returns the next state as a new array
const eventsReduc = (
  state = {
    query: config.InitialQuery,
    registeredEvents: [],
    sources: [],
    eventsWithDates: [],
    eventsReport: [],
    selectedSources: [],
    filteredEvents: [],
    selectedEventType: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.SET_SELECTEDEVENTTYPE:
      return { ...state, selectedEventType: action.payload };

    case actions.SET_ALLSOURCES: // all sources for selector
      return { ...state, sources: action.payload };

    case actions.SET_FILTEREDEVENTS:
      return { ...state, filteredEvents: action.payload };

    case actions.SET_SELECTEDSOURCES:
      return { ...state, selectedSources: action.payload };

    case actions.SET_SOURCENAME:
      return {
        ...state,
        query: { ...state.query, "source-name": action.payload },
      };

    case actions.SET_REGISTEREDEVENTS:
      return { ...state, registeredEvents: action.payload };

    case actions.SET_EVENTTYPE:
      return {
        ...state,
        query: { ...state.query, "eventtype-name": action.payload },
      };

    case actions.SET_EVENTSREPORT:
      return { ...state, eventsReport: action.payload };

    case actions.SET_VERSIONNUMBER:
      return {
        ...state,
        query: { ...state.query, "version-number": action.payload },
      };

    case actions.SET_STARTDATE:
      return {
        ...state,
        query: { ...state.query, "start-date": action.payload },
      };

    case actions.SET_ENDDATE:
      return {
        ...state,
        query: { ...state.query, "end-date": action.payload },
      };

    case actions.ASYNC_REQUEST:
      return { ...state, isFetching: action.isFetching };

    case actions.ASYNC_SUCCESS:
      return { ...state, isFetching: action.isFetching };

    case actions.ASYNC_ERROR:
      return { ...state, error: action.error };

    case actions.SET_DATEDEVENTS:
      return { ...state, eventsWithDates: action.payload };
    default:
      return state;
  }
};
export default eventsReduc;

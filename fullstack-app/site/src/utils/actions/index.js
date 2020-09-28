import httpRequest from '../../clientsideAPI/httpRequest';
// Add Action creator here for actions to be dispatched
    // Return an action and export it

/*
 * Action Types
 */

export const SET_ALLSOURCES = 'SET_ALLSOURCES' 
export const SET_SOURCENAME = 'SET_SOURCENAME' 
export const SET_SELECTEDSOURCES = 'SET_SELECTEDSOURCES'
export const SET_VERSIONNUMBER = 'SET_VERSIONNUMBER' 
export const SET_EVENTTYPE = 'SET_EVENTTYPE' 
export const SET_REGISTEREDEVENTS = 'SET_REGISTEREDEVENTS'
export const SET_FILTEREDEVENTS = 'SET_FILTEREDEVENTS'
export const SET_EVENTSREPORT = 'SET_EVENTSREPORT' 
export const SET_DATEDEVENTS = 'SET_DATEDEVENTS' 
export const SET_STARTDATE = 'SET_STARTDATE' 
export const SET_ENDDATE = 'SET_ENDDATE' 
export const SET_SELECTEDEVENTTYPE = 'SET_SELECTEDEVENTTYPE' 
export const SET_FILTERED_SOURCE = 'SET_FILTERED_SOURCES' 
export const FETCH_SOURCES = 'FETCH_SOURCES' 
export const FETCH_REGISTEREDEVENTS = 'FETCH_REGISTEREDEVENTS' 
export const FETCH_EVENTS = 'FETCH_EVENTS' 
export const FETCH_DATEDEVENTS = 'FETCH_DATEDEVENTS' 
export const ASYNC_REQUEST = 'ASYNC_REQUEST' 
export const ASYNC_ERROR = 'ASYNC_ERROR'
export const ASYNC_SUCCESS = 'ASYNC_SUCCESS'

/*
 * action creators
 */

export const setAllSources =  response => {
		return {
			type: SET_ALLSOURCES,
			payload: response
		}
	}

export const setFilterSources =  response => {
		return {
			type: SET_FILTERED_SOURCE,
			payload: response
		}
	}

export const setSelectedSources = data => {

	return { 
		type: SET_SELECTEDSOURCES, // Actions must have a type property that indicates the type of action being performed
		payload: data[0]  // event - action payload
			// filteredEvents, registeredEvents, "source-name": e.value
	}
  }

  export const setSourceName = data => {

	return { 
		type: SET_SOURCENAME, // Actions must have a type property that indicates the type of action being performed
		payload: data[0]  // event - action payload
			// filteredEvents, registeredEvents, "source-name": e.value
	}
  }

export const setVersionNumber = data => {
	return { 
		type: SET_VERSIONNUMBER,
		payload: data[0]	
	}
  }

export const setEventType = data => {
	return { 
		type: SET_EVENTTYPE, 
		payload: data[0] // event - action payload
			// "eventtype-name": e.value
	}
  }

export const setSelectedEventType = data => {
	return { 
		type: SET_SELECTEDEVENTTYPE,
		payload: data	
	}
  }

export const setStartDate = data => {

	return { 
		type: SET_STARTDATE,
		payload: data
	}
  }

export const setEndDate = data => {
	return { 
		type: SET_ENDDATE,
		payload: data
	}
  }

export const setRegisteredEvents = response => {
	return {
			type: SET_REGISTEREDEVENTS,
			payload: response
	};
}

export const setFilteredEvents = response => {
	return {
			type: SET_FILTEREDEVENTS,
			payload: response
	};
}


export const setEventsReport = response => {
	return {
			type: SET_EVENTSREPORT,
			payload: response
	};
}

export const setDatedEvents = response => {
	return {
			type: SET_DATEDEVENTS,
			payload: response
	};
}

// dispatch(setEventType(e))

/*
 * Async Action 
 */

// async action using redux-thunk
	//By returning the promise returned by fetch, we can chain another .then() to perform more actions externally when a response is returned

// source names
export const fetchSources = () => {
	return async dispatch => {
		try {
			const response = await httpRequest.getSources()
			return dispatch(setAllSources(response.data));
		} catch (err) {
			return dispatch(asyncError(err));
		}
	
	}; 
}

export const fetchRegisteredEvents = () => { 
	return async dispatch => {
		dispatch(asyncRequest());
		try {
			const response = await httpRequest.getAll();
			return dispatch(setRegisteredEvents(response.data));
		} catch (err) {
			return dispatch(asyncError(err));
		}
	}; 
}

export const fetchEvents = query => { 
	return async dispatch => {
		dispatch(asyncRequest());
		try {
			const response = await httpRequest.getEventsReport(query);
			return dispatch(setEventsReport(response.data.reportData));
		} catch (err) {
			return dispatch(asyncError(err));
		}
	}; 
}

export const fetchDatedEvents = query => {
	return async dispatch => {
		dispatch(asyncRequest());
		try {
			const response = await httpRequest.getEvents(query);
			return 	dispatch(setDatedEvents(response.data));
		} catch (err) {
			return dispatch(asyncError(err));
		}
	}; 
}

//Each async action needs three child actions to handle the action start, success, and failure

// Action start
	export const asyncRequest = () => {
		return {
			type: "ASYNC_REQUEST",
			isFetching: true
		};
	}

// Action failure
	export const asyncError = err => {
		return {
			type: "ASYNC_ERROR",
			status: 'error',
			error: err,
		};
	}

	export const asyncSuccess = () => {
		return {
			type: "ASYNC_SUCCESS",
			isFetching: false,
		};
	}

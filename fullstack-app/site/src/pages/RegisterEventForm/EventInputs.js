import React from "react";
import { useAutocomplete } from "../AutoComplete/useAutocomplete";

const EventInputs = ({
  eventTypeState,
  handleEventTypeChange,
  handleAutoComplete,
  errors,
  searchTerm,
  sourceName,
  display,
}) => {
  const corpus = sourceName;
  const [completions] = useAutocomplete(searchTerm, corpus);

  return (
    <div
      style={{
        width: 1200,
        backgroundColor: "white",
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div
        className="form-group"
        style={{ marginBottom: -10, textAlign: "center" }}
      >
        <br />
        <h1
          style={{
            color: "white",
            backgroundColor: "teal",
            borderWidth: 1,
            borderColor: "grey",
            borderStyle: "solid",
            paddingTop: 5,
            paddingBottom: 10,
            paddingLeft: 5,
            marginRight: 20,
          }}
        >
          Hero Event Generator
        </h1>
        <br />
        <h3>Welcome, User #123</h3>
        <br />
        <p>
          Use the form below to create new event type.
          <br />
          Hit add to add more property and value fields.
          <br />
          Hit submit to submit new field type.
        </p>
        <br />
      </div>

      <div className="form-group" style={{ marginBottom: 20 }}>
        <div className="row">
          <div className="col md-3"></div>

          <div className="col md-3">
            <label htmlFor="eventType">Enter the Event Type</label>
          </div>

          <div className="col md-3">
            <input
              type="text"
              name="eventType"
              id="eventType"
              value={eventTypeState.eventType}
              onChange={handleEventTypeChange}
            />
            {errors.eventType && <p>{errors.eventType}</p>}
          </div>

          <div className="col md-3"></div>
        </div>

        <div className="form-group" style={{ marginBottom: 20 }}>
          <div className="row" style={{ marginBottom: -10 }}>
            <div className="col md-3"></div>

            <div className="col md-3">
              <label htmlFor="sourceName">Enter Source Name</label>
            </div>

            <div className="col md-3">
              <input
                type="text"
                name="sourceName"
                id="sourceName"
                value={eventTypeState.sourceName}
                onChange={handleEventTypeChange}
              />
              <div
                style={{
                  backgroundColor: "whitesmoke",
                  borderStyle: "solid",
                  borderColor: "goldenrod",
                  width: "172px",
                }}
              >
                {display &&
                  completions.map((item, idx) => {
                    return (
                      <p key={idx} onClick={() => handleAutoComplete(item)}>
                        {item}
                      </p>
                    );
                  })}
              </div>
              {errors.sourceName && <p>{errors.sourceName}</p>}
            </div>

            <div className="col md-3"></div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col md-3"></div>

            <div className="col md-3">
              <label htmlFor="versionName">Enter Version Number</label>
            </div>

            <div className="col md-3">
              <input
                type="number"
                name="versionName"
                id="versionName"
                value={eventTypeState.versionName}
                onChange={handleEventTypeChange}
              />
              {errors.versionName && <p>{errors.versionName}</p>}
            </div>

            <div className="col md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInputs;

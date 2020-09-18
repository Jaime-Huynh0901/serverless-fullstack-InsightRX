import React from "react";
import { useAutocomplete } from "../AutoComplete/useAutocomplete";
import { Form, Card, Row, Col } from "antd";

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
    <Card
      type="inner"
      bodyStyle={{ backgroundColor: "#fafafa", border: 0 }}
      style={{
        width: 1080,
        border: "1px solid #001529",
        borderradius: "5px",
        marginBottom: 20,
      }}
    >
      <Row>
        <Col span={9} />
        <Col span={6}>
          <Row>
            <Form.Item label={"Enter the Event Type"} />
          </Row>

          <Row>
            <input
              type="text"
              name="eventType"
              id="eventType"
              value={eventTypeState.eventType}
              onChange={handleEventTypeChange}
            />
            {errors.eventType && <p>{errors.eventType}</p>}
          </Row>

          <Row>
            <Form.Item label={"Enter Source Name"} />
          </Row>
          <Row>
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
                align: "center",
                justify: "center",
                textAlign: "center",
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
          </Row>

          <Row>
            <Form.Item label={"Enter Version Number"} />
          </Row>
          <Row>
            <input
              type="number"
              name="versionName"
              id="versionName"
              value={eventTypeState.versionName}
              onChange={handleEventTypeChange}
            />
            {errors.versionName && <p>{errors.versionName}</p>}
          </Row>
        </Col>
        <Col span={9} />
      </Row>
    </Card>
  );
};

export default EventInputs;

import React from "react";
import PropInputs from "./PropInputs";
import EventInputs from "./EventInputs";
import useForm from "./useForm";
import { validate, validateProperty } from "./validationForm";
import ConfirmModal from "./ConfirmModal";
import { Card, Row } from "antd";

export const EventTypeForm = () => {
  const {
    addProperty,
    addNestedProperty,
    removeProperty,
    removeNestedProperty,
    handleReset,
    handleEventTypeChange,
    handleEventPropChange,
    handleNestedPropChange,
    handleSubmit,
    handleTypeSelectChange,
    handleNestedTypeSelectChange,
    submitData,
    handleAutoComplete,
    handleClose,
    handleSaveObject,
    handleUpdateIndex,
    handleUpdatePropNum,
    propState,
    isObjectState,
    nestedPropState,
    eventTypeState,
    errors,
    errorProp,
    errorNestedProp,
    sourceName,
    searchTerm,
    submitted,
    display,
    visible,
    modalData,
    savedObject,
  } = useForm(submit, validate, validateProperty);

  function submit() {
    console.log("Submitted successfully!");
    submitData();
    handleReset();
  }

  return (
    <div style={{ marginBottom: -10, textAlign: "center" }}>
      <Card
        style={{
          width: 1200,
          border: "1px solid white",
        }}
      >
        <Row
          type="flex"
          align="middle"
          justify="center"
          className="px-3 bg-white mh-page"
          style={{ margin: 0, padding: 0 }}
        >
          <h1>Hero Event Generator</h1>
        </Row>
        <form>
          <EventInputs
            eventTypeState={eventTypeState}
            handleEventTypeChange={handleEventTypeChange}
            handleAutoComplete={handleAutoComplete}
            sourceName={sourceName}
            searchTerm={searchTerm}
            errors={errors}
            display={display}
          />

          {/*<p className = "mt-3">Event Definition:</p>*/}

          <Card
            type="inner"
            bodyStyle={{ backgroundColor: "#fafafa", border: 0 }}
            style={{
              width: 1080,
              border: "1px solid #001529",
              borderradius: "5px",
            }}
          >
            <Row
              type="flex"
              align="middle"
              justify="center"
              className="px-3 bg-white mh-page"
              style={{ margin: 0, padding: 0 }}
            >
              <h3>Event Definition</h3>
            </Row>
            {propState.map((val, idx) => (
              <PropInputs
                key={`props-${idx}`}
                idx={idx}
                propState={propState}
                errorProp={errorProp}
                errorNestedProp={errorNestedProp}
                nestedPropState={nestedPropState}
                handleEventPropChange={handleEventPropChange}
                handleTypeSelectChange={handleTypeSelectChange}
                removeProperty={removeProperty}
                removeNestedProperty={removeNestedProperty}
                handleNestedPropChange={handleNestedPropChange}
                handleNestedTypeSelectChange={handleNestedTypeSelectChange}
              />
            ))}
          </Card>
          <Card
            type="inner"
            style={{
              width: 1080,
              border: "1px solid white",
              borderradius: "1px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
                marginBottom: 20,
              }}
            >
              {(propState[0].property && propState[0].valOfProp) ||
              (propState[0].property &&
                propState[0].typeOfProp === "object") ? (
                <input
                  type="button"
                  value="Add New Property"
                  onClick={(e) => {
                    handleUpdatePropNum();
                    addProperty();
                  }}
                />
              ) : null}

              {isObjectState ? (
                <div>
                  <input
                    type="button"
                    value="Add New Nested Property"
                    onClick={(e) => {
                      handleUpdateIndex();
                      addNestedProperty();
                    }}
                  />
                  {!savedObject ? (
                    <input
                      type="button"
                      value="Save the Object"
                      onClick={handleSaveObject}
                    />
                  ) : null}
                </div>
              ) : null}

              <input type="reset" value="Reset" onClick={handleReset} />
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
          </Card>
        </form>
      </Card>
      {submitted ? (
        <ConfirmModal
          visible={visible}
          modalData={modalData}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};

import React from "react";
import { Form } from "antd";
import PropInputs from "./PropInputs";
import EventInputs from "./EventInputs";
import useForm from "./useForm";
import { validate, validateProperty } from "./validationForm";
import ConfirmModal from "./ConfirmModal";
import "./RegisterEventForm.css";
import Footer from "../Footer";

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
    handleUpdateIndex,
    handleUpdatePropNum,
    handleSavedObj,
    setDisplay,
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
    userSession,
  } = useForm(submit, validate, validateProperty);

  function submit() {
    console.log("Submitted successfully!");
    submitData();
  }

  return (
    <div>
      <EventInputs
        eventTypeState={eventTypeState}
        handleEventTypeChange={handleEventTypeChange}
        handleAutoComplete={handleAutoComplete}
        sourceName={sourceName}
        searchTerm={searchTerm}
        errors={errors}
        setDisplay={setDisplay}
        display={display}
        userSession={userSession}
      />

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

      <div className="registerEventForm3">
        <Form.Item>
          {errorProp[0].errorState === false &&
          !isObjectState &&
          ((propState[0].property && propState[0].valOfProp) ||
            (propState[0].property && propState[0].typeOfProp === "object")) ? (
            <input
              type="button"
              value="Add Property"
              onClick={(e) => {
                handleUpdatePropNum();
                addProperty();
              }}
              style={{
                fontSize: "1em",
                backgroundColor: "#33FFFC",
                color: "black",
                borderRadius: 7,
              }}
            />
          ) : null}

          {isObjectState ? (
            <div>
              <input
                type="button"
                value="Add Object Property"
                onClick={(e) => {
                  handleUpdateIndex();
                  addNestedProperty();
                }}
                style={{
                  fontSize: "1em",
                  backgroundColor: "#33FFFC",
                  color: "black",
                  borderRadius: 7,
                }}
              />
              <input
                type="button"
                value="Save Object"
                onClick={handleSavedObj}
                style={{
                  fontSize: "1em",
                  backgroundColor: "#33FFFC",
                  color: "black",
                  borderRadius: 7,
                }}
              />
            </div>
          ) : null}

          <input
            type="reset"
            value="Reset"
            onClick={handleReset}
            style={{
              fontSize: "1em",
              backgroundColor: "#f5222d",
              color: "#ffffff",
              borderRadius: 7,
            }}
          />
          {errorProp[0].errorState === false ||
          errorNestedProp[0].errorState === false ? (
            <input
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              style={{
                fontSize: "1em",
                backgroundColor: "#007bff",
                color: "#ffffff",
                borderRadius: 7,
              }}
            />
          ) : null}
        </Form.Item>

        {submitted ? (
          <ConfirmModal
            visible={visible}
            modalData={modalData}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    </div>
  );
};

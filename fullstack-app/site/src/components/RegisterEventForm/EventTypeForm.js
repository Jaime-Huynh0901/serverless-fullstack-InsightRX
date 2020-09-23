import React from "react";
import PropInputs from "./PropInputs";
import EventInputs from "./EventInputs";
import useForm from "./useForm";
import { validate, validateProperty } from "./validationForm";
import ConfirmModal from "./ConfirmModal";
import { Card, Row, Form } from "antd";
import "./RegisterEventForm.css";

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
    <div>
      <EventInputs
        eventTypeState={eventTypeState}
        handleEventTypeChange={handleEventTypeChange}
        handleAutoComplete={handleAutoComplete}
        sourceName={sourceName}
        searchTerm={searchTerm}
        errors={errors}
        display={display}
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
          {(propState[0].property && propState[0].valOfProp) ||
          (propState[0].property && propState[0].typeOfProp === "object") ? (
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
                value="Add Nested Property"
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
              {!savedObject ? (
                <input
                  type="button"
                  value="Save the Object"
                  onClick={handleSaveObject}
                />
              ) : null}
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

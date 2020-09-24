import React from "react";
import PropInputs from "./PropInputs";
import EventInputs from "./EventInputs";
import useForm from "./useForm";
import { validate, validateProperty } from "./validationForm";
import ConfirmModal from "./ConfirmModal";
import ObjectProperty from "./ObjectProperty";
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
    handleNewObject,
    handleUpdateIndex,
    handleUpdatePropNum,
    handleAllObj,
    // handleObj,
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
    createdObject,
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

      {createdObject >= 1 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 2 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 3 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 4 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 5 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 6 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 7 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 8 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 9 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}
      {createdObject >= 10 ? (
        <ObjectProperty handleAllObj={handleAllObj} />
      ) : null}

      <div className="registerEventForm3">
        <Form.Item>
          {(propState[0].property && propState[0].valOfProp) ||
          (propState[0].property && propState[0].typeOfProp === "object") ? (
            <input
              type="button"
              value="Add Property"
              onClick={(e) => {
                handleUpdatePropNum();
                // handleObj();
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
          <input
            type="button"
            value="Add New Object"
            onClick={handleNewObject}
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

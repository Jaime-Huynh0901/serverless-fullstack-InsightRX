import React from "react";
import PropInputs from "./PropInputs";
import EventInputs from "./EventInputs";
import useForm from "./useForm";
import { validate, validateProperty } from "./validationForm";
import ConfirmModal from "./ConfirmModal";

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
    propState,
    isObjectState,
    nestedPropState,
    eventTypeState,
    errors,
    errorProp,
    sourceName,
    searchTerm,
    submitted,
    display,
    show,
    modalData,
    savedObject,
  } = useForm(submit, validate, validateProperty);

  function submit() {
    console.log("Submitted successfully!");
    submitData();
    handleReset();
  }

  return (
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

      <h3
        style={{
          color: "white",
          backgroundColor: "teal",
          borderWidth: 1,
          borderColor: "grey",
          borderStyle: "solid",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          width: 1200,
        }}
      >
        Event Definition
      </h3>
      {propState.map((val, idx) => (
        <PropInputs
          key={`prop-${idx}`}
          idx={idx}
          propState={propState}
          errorProp={errorProp}
          nestedPropState={nestedPropState}
          handleEventPropChange={handleEventPropChange}
          handleTypeSelectChange={handleTypeSelectChange}
          removeProperty={removeProperty}
          removeNestedProperty={removeNestedProperty}
          handleNestedPropChange={handleNestedPropChange}
          handleNestedTypeSelectChange={handleNestedTypeSelectChange}
        />
      ))}
      {submitted ? (
        <ConfirmModal
          show={show}
          modalData={modalData}
          handleClose={handleClose}
        />
      ) : null}
      <div
        style={{
          width: 1200,
          backgroundColor: "white",
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
          marginBottom: 20,
        }}
      >
        {(propState[0].property && propState[0].valOfProp) ||
        (propState[0].property && propState[0].typeOfProp === "object") ? (
          <input type="button" value="Add New Property" onClick={addProperty} />
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
    </form>
  );
};

import React from "react";
import useDropdown from "./useDropdown";
import NestedPropInput from "./NestedPropInput";

const PropInputs = ({
  idx,
  propState,
  nestedPropState,
  handleEventPropChange,
  handleNestedPropChange,
  handleTypeSelectChange,
  handleNestedTypeSelectChange,
  removeProperty,
  removeNestedProperty,
  errorProp,
}) => {
  const propId = `prop-${idx}`;
  const valId = `val-${idx}`;
  const delId = `del-${idx}`;
  const typeList = ["string", "number", "object", "array", "boolean"];
  const [type, TypeOfProp] = useDropdown(
    "   Type Of Prop   ",
    "",
    typeList,
    handleTypeSelectChange,
    idx
  );

  return (
    <div
      style={{
        width: 1200,
        backgroundColor: "white",
        paddingLeft: 20,
        paddingTop: 20,
      }}
    >
      <div key={`prop-${idx}`}>
        <div>
          <label htmlFor={propId}>{`Property #${idx + 1}`}</label>
          <input
            type="text"
            name={propId}
            data-idx={idx}
            id={propId}
            className="property"
            value={propState[idx].property}
            onChange={handleEventPropChange}
            required
          />
          <TypeOfProp
            handleTypeSelectChange={handleTypeSelectChange}
            required
          />
          <label htmlFor={valId}>{`Value #${idx + 1}`}</label>
          <input
            name={valId}
            data-idx={idx}
            id={valId}
            className="valOfProp"
            value={propState[idx].valOfProp}
            onChange={handleEventPropChange}
            type={type}
            required
          />
          <input
            type="button"
            name={delId}
            data-idx={idx}
            id={delId}
            className="deleteButton"
            value="Delete"
            onClick={removeProperty}
          />
          {errorProp[idx].errMessage && <p>{errorProp[idx].errMessage}</p>}
        </div>
      </div>
      {type === "object"
        ? nestedPropState.map((val, nestedidx) => (
            <NestedPropInput
              key={`prop-${nestedidx}`}
              nestedidx={nestedidx}
              nestedPropState={nestedPropState}
              errorProp={errorProp}
              handleTypeSelectChange={handleTypeSelectChange}
              removeNestedProperty={removeNestedProperty}
              handleNestedPropChange={handleNestedPropChange}
              handleNestedTypeSelectChange={handleNestedTypeSelectChange}
            />
          ))
        : null}
      <br />
    </div>
  );
};

export default PropInputs;

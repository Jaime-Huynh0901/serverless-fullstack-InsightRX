import React from "react";
import useDropdown from "./useDropdown.jsx";

const NestedPropInput = ({
  nestedidx,
  nestedPropState,
  handleNestedTypeSelectChange,
  removeNestedProperty,
  handleNestedPropChange,
  errorProp,
}) => {
  const nestedPropId = `nestedprop-${nestedidx}`;
  const nestedvalId = `nestedval-${nestedidx}`;
  const delId = `nesteddel-${nestedidx}`;
  const typeList = ["string", "number", "array", "boolean"];

  const [nestedType, TypeOfNestedProp] = useDropdown(
    "Type Of Prop (nested)",
    "",
    typeList,
    handleNestedTypeSelectChange,
    nestedidx
  );

  return (
    <div key={`nestedprop-${nestedidx}`}>
      <div>
        <label htmlFor={nestedPropId}>{`NestedProperty #${
          nestedidx + 1
        }`}</label>
        <input
          type="text"
          name={nestedPropId}
          data-idx={nestedidx}
          id={nestedPropId}
          className="property"
          value={nestedPropState[nestedidx].property}
          onChange={handleNestedPropChange}
        />
        <TypeOfNestedProp
          handleNestedTypeSelectChange={handleNestedTypeSelectChange}
        />
        <label htmlFor={nestedvalId}>{`Value #${nestedidx + 1}`}</label>
        <input
          name={nestedvalId}
          data-idx={nestedidx}
          id={nestedvalId}
          className="valOfProp"
          value={nestedPropState[nestedidx].valOfProp}
          onChange={handleNestedPropChange}
          type={nestedType}
        />
        <input
          type="button"
          name={delId}
          data-idx={nestedidx}
          id={delId}
          className="deleteButton"
          value="Delete"
          onClick={removeNestedProperty}
        />
        {errorProp[nestedidx].errMessage && (
          <p>{errorProp[nestedidx].errMessage}</p>
        )}
      </div>
    </div>
  );
};

export default NestedPropInput;

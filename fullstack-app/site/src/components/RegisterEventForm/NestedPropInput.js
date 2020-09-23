import React from "react";
import useDropdown from "./useDropdown.jsx";
import {} from "antd";
import styled from "styled-components";

const NestedPropInput = ({
  nestedidx,
  nestedPropState,
  handleNestedTypeSelectChange,
  removeNestedProperty,
  handleNestedPropChange,
  errorNestedProp,
}) => {
  const nestedPropId = `nestedprop-${nestedidx}`;
  const nestedvalId = `nestedval-${nestedidx}`;
  const delId = `nesteddel-${nestedidx}`;
  const typeList = ["string", "number", "array", "boolean"];

  const [nestedType, TypeOfNestedProp] = useDropdown(
    "",
    "",
    typeList,
    handleNestedTypeSelectChange,
    nestedidx
  );

  const Content = styled.div`
    text-align: center !important;
  `;

  return (
    <div key={`nestedprop-${nestedidx}`}>
      <label htmlFor={nestedPropId}>{`NestedProperty #${nestedidx + 1}`}</label>
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
        type="text"
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
      {errorNestedProp[nestedidx].errMessage && (
        <p>{errorNestedProp[nestedidx].errMessage}</p>
      )}
    </div>
  );
};

export default NestedPropInput;

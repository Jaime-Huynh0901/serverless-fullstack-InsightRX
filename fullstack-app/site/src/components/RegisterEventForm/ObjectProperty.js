import React, { useState, useEffect } from "react";
import httpRequest from "../../clientsideAPI/httpRequest";
import ObjPropInput from "./ObjPropInput";
import { validateProperty } from "./validationForm";

const ObjectPropperty = ({ callback, handleAllObj }) => {
  const blankObj = {
    propName: "",
    typeOfProp: "Object",
    obj: [],
  };

  const nestedProp = {
    property: "",
    typeOfProp: "",
    valOfProp: "",
  };

  // state
  const [objState, setObjState] = useState(blankObj);

  // handler function
  const handleObjChange = (event) => {
    const { value } = event.target;
    setObjState({
      ...objState,
      propName: value,
      obj: nestedProp,
    });
  };

  const [propState, setPropState] = useState([{ ...nestedProp }]);

  const addObjProperty = () => {
    setPropState([...propState, { ...nestedProp }]);
  };

  const handleEventPropChange = (event) => {
    const { dataset, className, value } = event.target;
    const updatedProperty = [...propState];
    updatedProperty[dataset.idx][className] = value;
    setPropState(updatedProperty);
    setObjState({ ...objState, obj: updatedProperty });
    setPropErrors(validateProperty(propState, dataset.idx));
  };

  const handleTypeSelectChange = (event, index, typeDelta) => {
    const updatedTypeProperty = [...propState];
    updatedTypeProperty[index]["typeOfProp"] = typeDelta;
    setPropState(updatedTypeProperty);

    // console.log(event.target.dataset.idx, index, typeDelta);
    // console.log(propState);
  };

  const removeProperty = (e) => {
    const index = e.target.dataset.idx;
    if (index > 0) {
      const newArray = propState.filter(
        (obj) => propState.indexOf(obj) !== parseInt(index)
      );
      setPropState([...newArray]);
      console.log(newArray);
    }
  };

  const [errorProp, setPropErrors] = useState([{}]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errorProp).length === 0 && isSubmitting) {
      callback();
    }
  }, [errorProp]);

  return (
    <div>
      <input
        type="text"
        className="property"
        value={objState.propName}
        onChange={handleObjChange}
      />
      <input
        type="text"
        className="typeOfProp"
        value={objState.typeOfProp}
        readOnly
      />
      <input
        type="button"
        value="Add Property"
        onClick={(e) => {
          addObjProperty();
          handleAllObj(objState);
        }}
      />

      {propState.map((val, idx) => (
        <ObjPropInput
          key={`objprop-${idx}`}
          idx={idx}
          propState={propState}
          errorProp={errorProp}
          handleEventPropChange={handleEventPropChange}
          handleTypeSelectChange={handleTypeSelectChange}
          removeProperty={removeProperty}
        />
      ))}
    </div>
  );
};

export default ObjectPropperty;

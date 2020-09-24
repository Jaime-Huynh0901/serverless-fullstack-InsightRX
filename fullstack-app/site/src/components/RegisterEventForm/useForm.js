import { useState, useEffect } from "react";
import httpRequest from "../../clientsideAPI/httpRequest";

const useForm = (callback, validate, validateNested) => {
  // Initial State
  const blankEventType = {
    eventType: "",
    sourceName: "",
    versionName: "",
  };
  const blankProperty = {
    property: "",
    typeOfProp: "",
    valOfProp: "",
    obj: [],
  };

  let nestedBlankProperty = {
    // index is the index of the nested object property
    index: 0,
    // propNum is the index of the Property that the nested object belong to
    propNum: 0,
    property: "",
    typeOfProp: "",
    valOfProp: "",
  };

  // All the states

  // state to get and set event Type, Source Name & Version number
  const [eventTypeState, setEventTypeState] = useState(blankEventType);
  const [modalData, setModalData] = useState(blankEventType);

  const [allObjState, setAllObjState] = useState([]);

  //
  const handleAllObj = (objState) => {
    setAllObjState([...allObjState, objState]);
  };

  const handleEventTypeChange = (event) => {
    const { name, value } = event.target;
    setEventTypeState({
      ...eventTypeState,
      [name]: value,
    });
    if (name === "sourceName") {
      setSearchTerm(value);
      setDisplay(true);
    }
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const [sourceName, setSourceName] = useState({});

  const getSourceData = async () => {
    try {
      const response = await httpRequest.getSources();
      const sourceList = response.data.map((item) => item.eventSource);
      setSourceName(sourceList);
      console.log(sourceName);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAutoComplete = (value) => {
    setEventTypeState({
      ...eventTypeState,
      sourceName: value,
    });
    setDisplay(false);
    setModalData({
      ...modalData,
      sourceName: value,
    });
  };

  useEffect(() => {
    getSourceData();
  }, []);

  // state to get and set dynamic property name , type of the property and value of the property
  const [propState, setPropState] = useState([{ ...blankProperty }]);

  // State to get and set event Type, Source Name & Version number
  const [nestedPropState, setNestedPropState] = useState([
    { ...nestedBlankProperty },
  ]);

  // const handleObj = () => {
  //   setPropState({ ...propState, obj: [...obj, nestedPropState] });
  // };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isObjectState, setIsObjectState] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [display, setDisplay] = useState(false);
  const [visible, setShow] = useState(false);

  // State to get and set the modal data of the submitted event type, source name and version number

  const [createdObject, setCreatedObject] = useState(0);

  const [nestedObjectIndex, setnestedObjectIndex] = useState(0);

  // state to get and set errors message
  const [errors, setErrors] = useState({});
  const [errorProp, setPropErrors] = useState([{}]);
  const [errorNestedProp, setNestedPropErrors] = useState([{}]);

  const [objectIndex, setObjectIndex] = useState(0);
  const handleNewObject = () => {
    setCreatedObject(createdObject + 1);
  };

  // All the handler function
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const handleUpdatePropNum = () => setObjectIndex(objectIndex + 1);

  const handleUpdateIndex = () => {
    setnestedObjectIndex(nestedObjectIndex + 1);
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

  const removeNestedProperty = (e) => {
    const index = e.target.dataset.idx;
    if (index > 0) {
      const newArray = nestedPropState.filter(
        (obj) => nestedPropState.indexOf(obj) !== parseInt(index)
      );
      setNestedPropState([...newArray]);
    }
  };

  const addProperty = () => {
    setPropState([...propState, { ...blankProperty }]);
    // setObjectIndex(objectIndex + 1);
    // console.log(objectIndex);
  };

  const handleEventPropChange = (event) => {
    const { dataset, className, value } = event.target;
    const updatedProperty = [...propState];
    updatedProperty[dataset.idx][className] = value;
    setPropState(updatedProperty);
    setPropErrors(validateNested(propState, dataset.idx));
  };

  const handleTypeSelectChange = (event, index, typeDelta) => {
    console.log(isObjectState);
    const updatedTypeProperty = [...propState];
    updatedTypeProperty[index]["typeOfProp"] = typeDelta;
    setPropState(updatedTypeProperty);
    if (propState[event.target.dataset.idx]["typeOfProp"] === "object") {
      setIsObjectState(true);
    } else {
      setIsObjectState(false);
    }

    // console.log(event.target.dataset.idx, index, typeDelta);
    // console.log(propState);
  };

  const addNestedProperty = () => {
    nestedBlankProperty.propNum = objectIndex;
    nestedBlankProperty.index = nestedObjectIndex;
    setNestedPropState([...nestedPropState, { ...nestedBlankProperty }]);
  };

  const handleNestedPropChange = (event, index) => {
    const { dataset, className, value } = event.target;
    const updatedProperty = [...nestedPropState];
    updatedProperty[dataset.idx][className] = value;
    setNestedPropState(updatedProperty);
    setNestedPropErrors(validateNested(nestedPropState, dataset.idx));
  };

  const handleNestedTypeSelectChange = (event, index, typeDelta) => {
    const updatedTypeProperty = [...nestedPropState];
    updatedTypeProperty[index]["typeOfProp"] = typeDelta;
    setNestedPropState(updatedTypeProperty);
    console.log(index, typeDelta);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  useEffect(() => {
    if (Object.keys(errorProp).length === 0 && isSubmitting) {
      callback();
    }
  }, [errorProp]);

  useEffect(() => {
    if (Object.keys(errorNestedProp).length === 0 && isSubmitting) {
      callback();
    }
  }, [errorNestedProp]);

  const submitData = () => {
    const data = {
      staticField: eventTypeState,
      dynamicField: propState,
      nestedDynamicField: nestedPropState,
    };

    httpRequest
      .create(data)
      .then((res) => {
        console.log(res);
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(eventTypeState));

    setIsSubmitting(true);
    if (isObjectState) setIsObjectState(false);
    handleShow();
  };

  const handleReset = () => {
    setEventTypeState(blankEventType);
    setPropState([{ ...blankProperty }]);
    setNestedPropState([{ ...nestedBlankProperty }]);
    if (isObjectState) setIsObjectState(false);
    setnestedObjectIndex(1);
    setObjectIndex(0);
  };

  return {
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
  };
};

export default useForm;

// state={
//   newItemInput: '',
//   selectedValue: '',
//   buyItems :[],
//   object : {}
// }

// addItem(e){
//   e.preventDefault();
//   const newItemInput = this.state.newItemInput;
//   const newRadioValue = this.state.selectedValue;
//   const obj = {'item':newItemInput, 'columnType':newRadioValue};
//   this.setState({
//       buyItems: [...this.state.buyItems, obj]
//   });
//   console.log(this.state.buyItems);

import { useState, useEffect } from "react";
import httpRequest from "../../clientsideAPI/httpRequest";
import { getSession } from "../../utils/login";

const useForm = (callback, validate, validateNested) => {
  //Global State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isObjectState, setIsObjectState] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [display, setDisplay] = useState(false);
  const [visible, setShow] = useState(false);
  const [userSession, setUserSession] = useState({});

  /*--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------*/

  /* ---------- EventInputs --------- */
  // This section handle all of the state, function , logic of the EventInputs components
  const blankEventType = {
    eventType: "",
    sourceName: "",
    versionName: "",
  };

  // state to get and set eventType, sourceName & VersionNumber
  const [eventTypeState, setEventTypeState] = useState(blankEventType);
  //Error/Data-validation message
  const [errors, setErrors] = useState({});

  //Handle input change and render the input
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

  /* ---------- End of EventInputs --------- */

  /*--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------*/

  /* ---------- PropInputs --------- */
  // This section handle all of the state, function , logic of the ProInputs components
  const blankProperty = {
    property: "",
    typeOfProp: "",
    valOfProp: "",
    obj: [], // This will be the placeholder for any obj type property
  };

  // state to get and set dynamic property name , type of the property and value of the property. Error/Data-validation message
  const [propState, setPropState] = useState([{ ...blankProperty }]);
  const [errorProp, setPropErrors] = useState([{}]);

  //add new Property
  const addProperty = () => {
    setPropState([...propState, { ...blankProperty }]);
    setIsObjectState(false);
  };

  //Handle input change and render the input
  const handleEventPropChange = (event) => {
    const { dataset, className, value } = event.target;
    const updatedProperty = [...propState];
    updatedProperty[dataset.idx][className] = value;
    setPropState(updatedProperty);
    setPropErrors(validateNested(propState, dataset.idx));
  };

  const handleClearErrMessage = (index) => {
    const updatedErrProperty = [...errorProp];
    updatedErrProperty[index]["errMessage"] = "";
    updatedErrProperty[0]["errorState"] = false;
    setPropErrors(updatedErrProperty);
  };

  //Handle type of data the user select
  const handleTypeSelectChange = (event, index, typeDelta) => {
    // console.log(isObjectState);
    const updatedTypeProperty = [...propState];
    updatedTypeProperty[index]["typeOfProp"] = typeDelta;
    setPropState(updatedTypeProperty);

    if (propState[event.target.dataset.idx]["typeOfProp"] === "object") {
      setIsObjectState(true);
      handleClearErrMessage(event.target.dataset.idx);
    } else {
      setIsObjectState(false);
    }
    if (
      typeDelta === "object" &&
      updatedTypeProperty[event.target.dataset.idx]["valOfProp"] === ""
    ) {
      handleClearErrMessage(event.target.dataset.idx);
    }
  };

  //Remove the property / Delete button function
  const removeProperty = (e) => {
    const index = e.target.dataset.idx;
    if (index > 0) {
      const newArray = propState.filter(
        (obj) => propState.indexOf(obj) !== parseInt(index)
      );
      setPropState([...newArray]);
      // console.log(newArray);
    }
    handleClearErrMessage(index);
  };

  /* ---------- End of PropInputs --------- */

  /*--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------*/

  /* ---------- NestedPropInputs --------- */
  /* This section handle all of the state, function , logic of the NestedPropInputs (Property of all the object type) components */
  const nestedBlankProperty = {
    index: 0, // index is the index of the nested object property
    propNum: 0, // propNum is the index of the Property that the nested object belong to
    property: "",
    typeOfProp: "",
    valOfProp: "",
  };

  // state to get and set dynamic nested property name , type of the nested property and value of the nested property of the.
  const [nestedPropState, setNestedPropState] = useState([]);
  // Error/Data-validation message
  const [errorNestedProp, setNestedPropErrors] = useState([{}]);
  // State to store index of the Object
  const [propNumState, setPropNumState] = useState(0);
  // State to store index of the Property of object
  const [nestedObjectIndex, setnestedObjectIndex] = useState(0);

  // handle to update the index of the object that nested property belong to
  const handleUpdatePropNum = () => setPropNumState(propNumState + 1);

  // handle to update the index of the nested property
  const handleUpdateIndex = () => {
    setnestedObjectIndex(nestedObjectIndex + 1);
  };

  //add new Property of the Object
  const addNestedProperty = () => {
    nestedBlankProperty.propNum = propNumState;
    nestedBlankProperty.index = nestedObjectIndex;
    setNestedPropState([...nestedPropState, { ...nestedBlankProperty }]);
    setNestedPropErrors(validateNested(nestedPropState, nestedObjectIndex));
  };

  //Handle input change and render the input
  const handleNestedPropChange = (event) => {
    const { dataset, className, value } = event.target;
    const updatedProperty = [...nestedPropState];
    updatedProperty[dataset.idx][className] = value;
    setNestedPropState(updatedProperty);
    setNestedPropErrors(validateNested(nestedPropState, dataset.idx));
  };

  const clearErrMessage = (index) => {
    const updatedErrProperty = [...errorNestedProp];
    updatedErrProperty[index]["errMessage"] = "";
    setNestedPropErrors(updatedErrProperty);
  };

  //Handle type of data the user select
  const handleNestedTypeSelectChange = (event, index, typeDelta) => {
    const updatedTypeProperty = [...nestedPropState];
    updatedTypeProperty[index]["typeOfProp"] = typeDelta;
    setNestedPropState(updatedTypeProperty);

    // console.log(index, typeDelta);
  };

  //Remove the property / Delete button function
  const removeNestedProperty = (e) => {
    const index = e.target.dataset.idx;

    const newArray = nestedPropState.filter(
      (obj) => nestedPropState.indexOf(obj) !== parseInt(index)
    );
    setNestedPropState([...newArray]);
    clearErrMessage(index);
  };

  const handleSavedObj = () => {
    setIsObjectState(false);
  };

  /* ---------- End of NestedPropInput --------- */

  /*--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------*/

  /* ---------- ConfirmModal --------- */
  // state to get and set event Type, Source Name & Version number
  const [modalData, setModalData] = useState(blankEventType);

  // Handle close of the modal and reset the form
  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };

  // handle show the modal when successfully register new event type
  const handleShow = () => setShow(true);

  /* ---------- End of ConfirmModal --------- */

  /*--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------*/

  /* ---------- Auto Complete Source Name --------- */
  // state to get the source name from hero
  const [sourceName, setSourceName] = useState({});

  // handle function to get the source data and store it to the soureName state
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

  // handle autoComplete
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

  // get the source date after component mounted.
  useEffect(() => {
    getSourceData();
  }, []);
  /* ---------- End of Auto Complete Source Name --------- */

  /*--------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------*/

  /* ---------- Submit, Reset & User Session --------- */

  // Submit the data, post request to register new event type
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

  //Handle data validation and display error message. only allow submission when there is no error
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      isSubmitting &&
      errorProp[0].errorState === false
    ) {
      callback();
    }
  }, [errors, errorProp, isSubmitting]);

  // Handle Submit state
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(eventTypeState));
    setIsSubmitting(true);
    if (isObjectState) setIsObjectState(false);
    handleShow();
  };

  // Handle reset / reset button
  const handleReset = () => {
    setEventTypeState(blankEventType);
    setPropState([{ ...blankProperty }]);
    setNestedPropState([]);
    setDisplay(false);
    if (isObjectState) setIsObjectState(false);
    setnestedObjectIndex(0);
    setPropNumState(0);
    setErrors({});
  };

  // Get the user Session (user email) and save it to the userSession State
  useEffect(() => {
    const userSession = getSession();
    setUserSession(userSession);
  }, []);

  /* ---------- End of Submit & Reset --------- */

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
  };
};

export default useForm;

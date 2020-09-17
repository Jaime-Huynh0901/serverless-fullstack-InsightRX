// import { useState, useEffect } from "react";
// import httpRequest from "../../clientsideAPI/httpRequest";

// const useNestedForm = (handleFunction, handleTypeFunction, removeNestedProperty, nestedidx) => {
//         const nestedPropId = `nestedprop-${nestedidx}`;
//         const nestedvalId = `nestedval-${nestedidx}`;
//         const delId = `nesteddel-${nestedidx}`;
//         const typeList = ["string", "number", "array","boolean" ];
//         const [nestedType, TypeOfNestedProp] = useDropdown("Type Of Prop (nested)", "", typeList, handleTypeFunction, nestedidx);

//     const NestedForm = () => (
//         <div key={`nestedprop-${nestedidx}`}>
//             <div>
//                 <label htmlFor={nestedPropId}>{`NestedProperty #${nestedidx + 1}`}</label>
//                 <input
//                     type="text"
//                     name={nestedPropId}
//                     data-idx={nestedidx}
//                     id={nestedPropId}
//                     className="property"
//                     value={nestedPropState[nestedidx].property}
//                     onChange={handleFunction}
//                 />
//                 <TypeOfNestedProp
//                     handleNestedTypeSelectChange={handleTypeFunction}
//                 />
//                 <label htmlFor={nestedvalId}>{`Value #${nestedidx + 1}`}</label>
//                 <input
//                     name={nestedvalId}
//                     data-idx={nestedidx}
//                     id={nestedvalId}
//                     className="valOfProp"
//                     value={nestedPropState[nestedidx].valOfProp}
//                     onChange={handleFunction}
//                     type = {nestedType}
//                 />
//                 <input
//                     type="button"
//                     name={delId}
//                     data-idx={nestedidx}
//                     id={delId}
//                     className="deleteButton"
//                     value="Delete"
//                     onClick={removeNestedProperty}
//                 />

//             </div>
//         </div>
//     )

//   const nestedBlankProperty = {
//     property: "",
//     typeOfProp: "",
//     valOfProp: "",
//   };

//   // All the states
//   const [eventTypeState, setEventTypeState] = useState(blankEventType);
//   const [errors, setErrors] = useState({});
//   const [errorProp, setPropErrors] = useState([{}]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [propState, setPropState] = useState([{ ...blankProperty }]);
//   const [nestedPropState, setNestedPropState] = useState([
//     { ...nestedBlankProperty },
//   ]);
//   const [nestedPropArrState, setNestedPropArrState] = useState([]);
//   const [isObjectState, setIsObjectState] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [sourceName, setSourceName] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [display, setDisplay] = useState(false);
//   const [show, setShow] = useState(false);
//   const [modalData, setModalData] = useState(blankEventType);

//   // All the handler function
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const removeProperty = (e) => {
//     const index = e.target.dataset.idx;
//     if (index > 0) {
//       setPropState(
//         propState.filter((obj) => propState.indexOf(obj) !== parseInt(index))
//       );
//     }
//   };

//   const removeNestedProperty = (e) => {
//     const index = e.target.dataset.idx;
//     if (index > 0) {
//       setNestedPropState(
//         nestedPropState.filter(
//           (obj) => nestedPropState.indexOf(obj) !== parseInt(index)
//         )
//       );
//     }
//   };

//   const handleEventTypeChange = (event) => {
//     const { name, value } = event.target;
//     setEventTypeState({
//       ...eventTypeState,
//       [name]: value,
//     });
//     if (name === "sourceName") {
//       setSearchTerm(value);
//       setDisplay(true);
//     }
//     setModalData({
//       ...modalData,
//       [name]: value,
//     });
//   };

//   const handleAutoComplete = (value) => {
//     setEventTypeState({
//       ...eventTypeState,
//       sourceName: value,
//     });
//     setDisplay(false);
//     setModalData({
//       ...modalData,
//       sourceName: value,
//     });
//   };

//   const addProperty = () => {
//     setPropState([...propState, { ...blankProperty }]);
//   };

//   const handleEventPropChange = (event) => {
//     const { dataset, className, value } = event.target;
//     const updatedProperty = [...propState];
//     updatedProperty[dataset.idx][className] = value;
//     setPropState(updatedProperty);
//     setPropErrors(validateNested(propState, dataset.idx));
//   };

//   const handleTypeSelectChange = (event, index, typeDelta) => {
//     console.log(isObjectState);
//     const updatedTypeProperty = [...propState];
//     updatedTypeProperty[index]["typeOfProp"] = typeDelta;
//     setPropState(updatedTypeProperty);
//     if (propState[event.target.dataset.idx]["typeOfProp"] === "object") {
//       setIsObjectState(true);
//     } else {
//       setIsObjectState(false);
//     }

//     console.log(event.target.dataset.idx, index, typeDelta);
//     console.log(propState);
//   };

//   const addNestedProperty = () => {
//     setNestedPropState([...nestedPropState, { ...nestedBlankProperty }]);
//   };

//   const handleNestedPropChange = (event) => {
//     const { dataset, className, value } = event.target;
//     const updatedProperty = [...nestedPropState];
//     updatedProperty[dataset.idx][className] = value;
//     setNestedPropState(updatedProperty);
//   };

//   const handleNestedTypeSelectChange = (event, index, typeDelta) => {
//     const updatedTypeProperty = [...nestedPropState];
//     updatedTypeProperty[index]["typeOfProp"] = typeDelta;
//     setNestedPropState(updatedTypeProperty);
//     console.log(index, typeDelta);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validate(eventTypeState));

//     setIsSubmitting(true);
//     if (isObjectState) setIsObjectState(false);
//     handleShow();
//   };

//   const handleReset = () => {
//     setEventTypeState(blankEventType);
//     setPropState([{ ...blankProperty }]);
//     setNestedPropState([]);
//     if (isObjectState) setIsObjectState(false);
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       callback();
//     }
//   }, [errors]);

//   useEffect(() => {
//     if (Object.keys(errorProp).length === 0 && isSubmitting) {
//       callback();
//     }
//   }, [errorProp]);

//   useEffect(() => {
//     getSourceData();
//   }, []);

//   const submitData = () => {
//     const data = {
//       staticField: eventTypeState,
//       dynamicField: propState,
//       nestedDynamicField: nestedPropState,
//     };

//     httpRequest
//       .create(data)
//       .then((res) => {
//         setSubmitted(true);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   const getSourceData = async () => {
//     try {
//       const response = await httpRequest.getSources();
//       const sourceList = response.data.map((item) => item.eventSource);
//       setSourceName(sourceList);
//       console.log(sourceName);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return {
//     addProperty,
//     addNestedProperty,
//     removeProperty,
//     removeNestedProperty,
//     handleReset,
//     handleEventTypeChange,
//     handleEventPropChange,
//     handleNestedPropChange,
//     handleSubmit,
//     handleTypeSelectChange,
//     handleNestedTypeSelectChange,
//     submitData,
//     handleAutoComplete,
//     handleClose,
//     propState,
//     isObjectState,
//     nestedPropState,
//     eventTypeState,
//     errors,
//     errorProp,
//     sourceName,
//     searchTerm,
//     submitted,
//     display,
//     show,
//     modalData,
//   };
// };

// export default useForm;

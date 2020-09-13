export const validate = (values) => {
  let errors = {};

  if (!values.eventType) {
    errors.eventType = "Event Type is required";
  } else if (!/^[a-zA-Z0-9_]*$/.test(values.eventType)) {
    errors.eventType =
      "Event Type is invalid. Allow any alphanumeric character incuding underscore .Do not enter any space or any special characters (!,@,#...)";
  }

  if (!values.sourceName) {
    errors.sourceName = "Source Name is required";
  } else if (!/^[a-zA-Z0-9_]*$/.test(values.eventType)) {
    errors.eventType =
      "Source Name is invalid. Allow any alphanumeric character incuding underscore .Do not enter any space or any special characters (!,@,#...)";
  }

  if (!values.versionName) {
    errors.versionName = "Version Number is required";
  } else if (!/^\d+$/.test(values.versionName)) {
    errors.versionName =
      "Version Number is invalid. Only enter positive integer (number) value";
  }
  return errors;
};

export const validateProperty = (propValues, idx) => {
  let errors = [
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
    { errMessage: "" },
  ];

  propValues.map((value) => {
    for (let i = idx; i <= idx; i++) {
      switch (value.typeOfProp) {
        case "array":
          if (!/^([a-z0-9\s]+,)*([a-z0-9\s]+){1}$/.test(value.valOfProp)) {
            errors[i].errMessage =
              "Property value (array) is invalid. Make sure to seperate item in the array by comma";
          }
          break;
        case "string":
          if (!/^[a-zA-Z0-9]*$/.test(value.valOfProp)) {
            errors[i].errMessage =
              "Property value (string) is invalid. Allow any alphanumeric character incuding underscore .Do not enter any space or any special characters (!,@,#...)";
          }
          break;
        case "number":
          if (!/^[0-9\-.]*$/.test(value.valOfProp)) {
            errors[i].errMessage =
              "Property value (number) is invalid. Allow only number ";
          }
          break;
        case "boolean":
          if (!/false|true/.test(value.valOfProp)) {
            errors[i].errMessage =
              "Property value (boolean) is invalid. Only allow 'true' or 'false'";
          }
          break;
      }
    }
  });
  return errors;
};

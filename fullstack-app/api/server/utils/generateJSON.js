/**
 * Strive to write simple, small (ideally < 25-30 lines not counting comments/logs) functions that
 * are responsible for one thing - this will make your code easier to understand and reason about
 * and easier to test/debug as the project grows larger.
 *
 */
const toJsonSchema = require("to-json-schema");
const schemaConfig = require("./schemaConfiguration");
const { property } = require("lodash");

/**
 * Converts a JSON object into a JSON schema
 *
 * Example:
 *    const jsonToConvert = {
 *      patientId: "eyfg4hLd",
 *      isNeonate: false
 *    }
 *
 *    // schema generated from above JSON will look like:
 *    {
 *      "type" : "object",
 *      "properties": {
 *        "patientId": { "type" : "string" },
 *        "isNeonate" : { "type" : "boolean" }
 *      }
 *    }
 *
 * @param jsonToConvert is a JSON object to be converted into a JSON schema
 * @param options are
 */
function convertJsonToSchema(jsonToConvert, options) {
  return toJsonSchema(jsonToConvert, options);
}

/**
 * Format payload to be saved when registering new Hero events
 *
 * @param eventTypeName
 * @param versionNumber
 * @param sourceName
 * @param jsonSchema
 * @returns {{eventTypeDefinition: *, eventTypeName: *, sourceName: *, versionNumber: number}}
 */
function buildSchemaForHero(
  eventTypeName,
  versionNumber = 1,
  sourceName,
  jsonSchema
) {
  return {
    eventTypeName: eventTypeName,
    versionNumber: versionNumber,
    sourceName: sourceName,
    eventTypeDefinition: jsonSchema,
  };
}

function getSchemaOptions() {
  return {
    required: false,
    objects: {
      postProcessFnc: (schema, obj, defaultFunc) => ({
        ...defaultFunc(schema, obj),
        required: Object.getOwnPropertyNames(obj),
      }),
      additionalProperties: false,
    },
    strings: {
      detectFormat: false,
    },
  };
}

function addSchemaData(options) {
  options.objects.postProcessFnc = (schema, obj, defaultFunc) => ({
    ...defaultFnc(schema, obj),
    required: Object.getOwnPropertyNames(obj),
    ...schemaConfig,
  });
}

function additionalInfo(options) {
  options.postProcessFnc = (type, schema, value, defaultFunc) => {
    if (type !== "object") {
      schema.$id = "";
      schema.title = "";
      schema.default = "";
      schema.examples = [value];
      schema.pattern = "^(.*)$";
      return defaultFunc(type, schema, value);
    } else {
      return defaultFunc(type, schema, value);
    }
  };
}

function requireAllProperties(options) {
  options.required = true;
}

function allowAdditionalProperties(options) {
  options.objects.additionalProperties = true;
}

// converting the object nested property to correct data type
const nestedObjConverter = (arr) => {
  const newArr = arr.map((prop) => {
    const result = {};
    switch (prop.typeOfProp) {
      case "string":
        result[prop.property] = prop.valOfProp.toString();
        break;
      case "number":
        result[prop.property] = parseInt(prop.valOfProp);
        break;
      case "array":
        result[prop.property] = prop.valOfProp.split(",").map((item) => item);
        break;
      case "object":
        result[prop.property] = nestedArr;
        break;
      case "boolean":
        prop.valOfProp.toLowerCase() === "true"
          ? (result[prop.property] = true)
          : (result[prop.property] = false);
        break;
    }
    return result;
  });
  return Object.assign({}, ...newArr);
};

// converting the object property to correct data type
const objConverter = (arr, nestedArr) => {
  const newArr = arr.map((prop, index) => {
    const result = {};
    switch (prop.typeOfProp) {
      case "string":
        result[prop.property] = prop.valOfProp.toString();
        break;
      case "number":
        result[prop.property] = parseInt(prop.valOfProp);
        break;
      case "array":
        result[prop.property] = prop.valOfProp.split(",").map((item) => item);
        break;
      case "object":
        prop.obj = nestedArr.filter((objArr) => objArr.propNum === index);
        result[prop.property] = nestedObjConverter(prop.obj);
        break;
      case "boolean":
        prop.valOfProp.toLowerCase() === "true"
          ? (result[prop.property] = true)
          : (result[prop.property] = false);
        break;
    }
    return result;
  });
  return Object.assign({}, ...newArr);
};

module.exports = exports = {
  convertJsonToSchema: convertJsonToSchema,
  buildSchemaForHero: buildSchemaForHero,
  getSchemaOptions: getSchemaOptions,
  requireAllProperties: requireAllProperties,
  allowAdditionalProperties: allowAdditionalProperties,
  addSchemaData: addSchemaData,
  additionalInfo: additionalInfo,
  objConverter: objConverter,
  nestedObjConverter: nestedObjConverter,
};

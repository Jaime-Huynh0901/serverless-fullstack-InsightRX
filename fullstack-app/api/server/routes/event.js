const express = require("express");
const router = express.Router();
const generateJSON = require("../utils/generateJSON");
const api = require("../utils/api");
const mw = require("../middleware/middleware");

/** TODO: This is an example **/
router.get("/test", mw.authenticate, async (req, res) => {
  // If mw.authenticate succeeds, extract token info from req.locals
  res.status(200).send("test");
});

router.get("/eventtypes", mw.authenticate, async (req, res) => {
  try {
    const data = await api.getData(req.route.path, req.locals);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ fail: "Cannot Find Event Types" });
  }
});

router.get("/eventsources", mw.authenticate, async (req, res) => {
  try {
    const data = await api.getData(req.route.path, req.locals);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ fail: "Cannot Find Sources" });
  }
});

router.get("/events", mw.authenticate, async (req, res) => {
  try {
    if (Object.keys(req.query).length === 0) {
      res.status(200).send({ fail: "No Query Parameters added to url" });
    } else {
      let queryString = Object.keys(req.query)
        .map((key) => key + "=" + encodeURIComponent(req.query[key]))
        .join("&");
      const data = await api.getData(
        req.route.path + "?" + queryString,
        req.locals
      );
      res.status(200).json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ fail: "Cannot Find Events requested" });
  }
});

router.get(
  "/reports/eventTypeSummaryReport",
  mw.authenticate,
  async (req, res) => {
    try {
      if (Object.keys(req.query).length === 0) {
        res.status(200).send({ fail: "No Query Parameters added to url" });
      } else {
        let queryString =
          req.route.path +
          "?" +
          Object.keys(req.query)
            .map((key) => key + "=" + encodeURIComponent(req.query[key]))
            .join("&");
        const data = await api.getData(queryString, req.locals);
        res.status(200).json(data);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ fail: "Cannot Find Report Requested" });
    }
  }
);

router.post("/eventtype", mw.authenticate, (req, res) => {
  console.log(req.body);
  const objFromUI = req.body;
  const { eventType, sourceName, versionNumber } = objFromUI.staticField;
  const SchemaOptions = generateJSON.getSchemaOptions();
  generateJSON.allowAdditionalProperties(SchemaOptions);
  const nestedObj = generateJSON.nestedObjConverter(
    objFromUI.nestedDynamicField
  );
  const dynamicObj = generateJSON.objConverter(
    objFromUI.dynamicField,
    nestedObj
  );

  try {
    const jsonToSchema = generateJSON.convertJsonToSchema(
      dynamicObj,
      SchemaOptions
    );
    const fullSchema = generateJSON.buildSchemaForHero(
      eventType,
      versionNumber,
      sourceName,
      jsonToSchema
    );
    api.postData("/eventtype", fullSchema, req.locals);
    res.status(200).send({ success: "posted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ fail: "Issues with Schema" });
  }
});

module.exports = router;

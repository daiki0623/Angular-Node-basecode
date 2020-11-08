// import dependencies and initialize the express router
const express = require("express");
const BffController = require("../controllers/bff-controller");

const router = express.Router();

// define routes
router.post("/postRequest", BffController.postRequest);
router.get("/getResults", BffController.getResult);

module.exports = router;

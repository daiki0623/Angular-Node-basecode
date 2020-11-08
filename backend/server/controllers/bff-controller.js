const nodeuuid = require("node-uuid");
const restClient = require("node-rest-client").Client;

// write to mongoDB
exports.postRequest = (req, res) => {
  var id = nodeuuid.v4(); // Generate ID
  console.log("In controller - postRequest");
  res.json({
    status: "UP",
  });
};

// get from mongoDB
exports.getResult = (req, res) => {
  console.log("In controller - getResult");
  var id = req.query.id;
  res.json({
    status: "UP",
  });
};

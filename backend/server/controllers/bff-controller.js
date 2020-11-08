const nodeuuid = require("node-uuid");
const Message = require("../Models/message");

// write to mongoDB
exports.postRequest = (req, res) => {
  var id = nodeuuid.v4(); // Generate ID
  console.log("In controller - postRequest");

  var msg = new Message();
  msg.id = id;
  msg.msg = req.body.msg;
  console.log(`message - ${req.body.msg}`);

  msg.save((err) => {
    if (err) {
      console.log(`\tMongo Error: ${JSON.stringify(err)}`);
    } else {
      console.log("\tMongo write Success");
    }
  });
  res.json({
    id: `${id}`,
  });
};

// get from mongoDB
exports.getResult = (req, res) => {
  console.log("In controller - getResult");
  var id = req.query.id;

  Message.findOne({ id: `${id}` }, (err, msgs) => {
    var msg = "";
    if (err) {
      console.log(`\tError: ${JSON.stringify(err)}`);
    } else if (!msgs) {
      console.log(`\tNot exist ResultDocument`);
      msg = `uuid=${id} result not found`;
    } else {
      console.log(`\tMongo Read Success message=: ${msgs.msg}`);
      msg = msgs.msg;
    }
    res.json({
      msg: `${msg}`,
    });
  });
};

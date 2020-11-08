const mongoose = require("mongoose");
// DB接続を設定
mongoose.connect("mongodb://localhost:27017/test_db", {
  useNewUrlParser: true,
});

// 新しいスキーマを作る
const Message = mongoose.Schema({
  id: String,
  msg: String,
});

module.exports = mongoose.model("Message", Message);

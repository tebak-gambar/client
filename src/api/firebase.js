const db = require("@/config/firebase");

const User = db.collection("User");
const Question = db.collection("Question");
const Room = db.collection("Room");

module.exports = {
  User,
  Question,
  Room
};

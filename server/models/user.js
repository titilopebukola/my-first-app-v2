const mongoose = require("mongoose");

let user_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  // ProfileDp: {
  //   Data: ArrayBuffer,
  //   ContentType: String,
  // }
});

export default mondoose.model("user", user_Schema);

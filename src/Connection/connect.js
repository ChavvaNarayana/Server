const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://chavva:chavva@cluster0.tarmcqw.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });

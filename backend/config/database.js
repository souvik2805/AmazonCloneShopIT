const mongoose = require("mongoose");

const connectDatebase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connnected with host : ${con.connection.host}`
      );
    });
};

module.exports = connectDatebase;

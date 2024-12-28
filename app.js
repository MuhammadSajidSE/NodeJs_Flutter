const express = require("express"); // import express js
const {
    getproduct,
  createproduct,
} = require("./controller/productcontroller");
const mongoose = require("mongoose");
const app = express(); //
const port = 3000;

mongoose.connect(
  "mongodb+srv://muhammadsajiddh:7K3OjftzoQL0V59Q@sadosaj.1nc0zn8.mongodb.net/?retryWrites=true&w=majority&appName=SadoSaj"
).then(() => console.log("Database connected successfully")).catch((err) => console.log("Error", err));


const data = [];
app.get("/", getproduct);
app.post("/create", createproduct);

app.get("/users", (req, res) => {
  res.send("Hello welcome to user api");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port;`);
});

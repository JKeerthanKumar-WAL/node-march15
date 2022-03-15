const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  let completePath = path.join(__dirname, "minicalculator.html");
  res.sendFile(completePath);
});
app
  .post("/getResult", function (req, res) {
    console.log(req.body);
    if (req.body.operator == "add") {
      const result =
        parseInt(req.body.firstNumber) + parseInt(req.body.secondNumber);
      res.send(
        `<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>The addition of ${req.body.firstNumber} and ${req.body.secondNumber} is ${result}</h2></div>`
      );
    } else if (req.body.operator == "subtract") {
      const result =
        parseInt(req.body.firstNumber) - parseInt(req.body.secondNumber);
      res.send(
        `<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>The subtraction of ${req.body.firstNumber} and ${req.body.secondNumber} is ${result}</h2></div>`
      );
    } else if (req.body.operator == "multiply") {
      const result =
        parseInt(req.body.firstNumber) * parseInt(req.body.secondNumber);
      res.send(
        `<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>The multiplication of ${req.body.firstNumber} and ${req.body.secondNumber} is ${result}</h2></div>`
      );
    } else if (req.body.operator == "divide") {
      const result =
        parseInt(req.body.firstNumber) / parseInt(req.body.secondNumber);
      res.send(
        `<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>The division of ${req.body.firstNumber} and ${req.body.secondNumber} is ${result}</h2></div>`
      );
    } else {
      res.send(
        "<style>div{background:lightseagreen; padding:5px;}h2{text-align:center; color: darkblue}</style><div><h2>Enter inputs correctly</h2></div>"
      );
    }
  })
  .listen(3001);
console.log("Running node on 3001 port");

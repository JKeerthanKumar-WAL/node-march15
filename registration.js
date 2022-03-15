const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  const completePath = path.join(__dirname, "registration.html");
  res.sendFile(completePath);
});
app
  .post("/showDetails", (req, res) => {
    res.send(
      `<style>div{border: 4px solid;text-align: center; background: lightseagreen;}table{border : 4px solid darkolivegreen; margin:auto;background-image:linear-gradient(lightskyblue,lightgrey);padding:10px; margin-bottom: 10px;} td{padding : 20px;text-align:center}h1{color:darkblue}</style>
    <div><h1>Display User Details</h1><table><tr><th>Serial No</th><th>Username</th><th>Email Id</th><th>Password</th><th>Date of Birth</th><th>City</th><th>Country</th></tr>
  <tr><td>1</td><td>${req.body.name}</td><td>${req.body.email}</td><td>${req.body.password}</td><td>${req.body.dob}</td><td>${req.body.city}</td><td>${req.body.country}</td>
  </tr>
  </table></div>`
    );
  })
  .listen(3001);
console.log("Running node on 3001 port");

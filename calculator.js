const express = require("express");
const bodyParser = require("body-parser")
 const app = express();
 app.use(bodyParser.urlencoded({extended: true}))

 app.get("/", function(req, res){
     res.sendFile(__dirname + "/index.html")
 })
 app.post("/", function(req, res){
 
    var firstNumber = Number(req.body.num1);
    var secondNumber = Number(req.body.num2);

    var result = firstNumber + secondNumber;
    res.send("The result of the calculation is " + result)
 });
 app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
 });

 app.post("/bmicalculator", function(req, res){
    var w = parseFloat(req.body.weight)
    var h = parseFloat(req.body.height)

    var bmi = w / (h *h);
    res.send("your body mass index" + bmi)
 })

 app.listen(3000, function(){
    console.log("Listening for port 3000...")
 })
 
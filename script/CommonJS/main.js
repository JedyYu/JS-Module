//main.js
var d= new Date()
document.write("----time:"+d.getTime()+"<br>");

var inside = require("./print_age2.js");
inside();
document.write("age(call from outside):"+inside.age+"<br>");

var d= new Date()
document.write("----time:"+d.getTime()+"<br>");
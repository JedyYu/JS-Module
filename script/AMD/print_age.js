//print_age.js
define(function(){
  	var print_age = function (){
  		var age=20;
		document.body.innerHTML+="age(call from inside):"+age+"<br>";
  		//document.write("age(call from inside):"+age+"<br>");
  	}
  	return {
  		print_age:print_age
  	};
});
var d= new Date()
document.body.innerHTML+="----tic_out:"+d.getTime()+"<br>";

require(['print_age2'], function (inside){
	var age=10;
	document.body.innerHTML+="age(call from outside):"+age+"<br>";
	//document.write("age(call from outside):"+age+"<br>");
	var d= new Date()
	document.body.innerHTML+="----tic_in:"+d.getTime()+"<br>";

	inside.print_age();
	var d= new Date()
	document.body.innerHTML+="----toc_in:"+d.getTime()+"<br>";

	document.body.innerHTML+="age(call from outside):"+age+"<br>";
	//document.write("age(call from outside):"+age+"<br>");
});

var d= new Date()
document.body.innerHTML+="----toc_out:"+d.getTime()+"<br>";
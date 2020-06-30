function validation(form){
	var valid=false;
	var a = document.getElementById('html').checked;
	var b = document.getElementById('css').checked;
	var c = document.getElementById('js').checked;
	var res = a||b||c;
	if(res==false){
		alert('Select one of the reasons.');
		return false;
		document.myform[0].html[6].focus();
	}
	else{
		valid=true;
	}
}

function proceed(){
	var name1 = document.getElementById("fname").value;
	var email1 = document.getElementById("emailid").value;
	var phone1 = document.getElementById("phone").value;
	var college1 = document.getElementById("college").value;
	var a = document.getElementById('male').checked;
	var b = document.getElementById('female').checked;
	var c = document.getElementById('other').checked;
	var x = document.getElementById('html').checked;
	var y = document.getElementById('css').checked;
	var z = document.getElementById('js').checked;

	document.write("First name: "+name1);
	document.write("<br>");
	document.write("E-mail: "+email1);
	document.write("<br>");
	document.write("Phone No: "+phone1);
	document.write("<br>");
	//gender check//
	if(a==true){
		document.write("Gender: Male");
		document.write("<br>")
	}
	else if (b==true){
		document.write("Gender: Female");
		document.write("<br>")
	}
	else if (c==true){
		document.write("Gender: Other");
		document.write("<br>")
	}
	//subjects check//
	document.write("Reasons for RDIP: ")
	if(x||y||z == true){
		if(x==true){
			document.write("HTML ");
		}
		if(y==true){
			document.write("CSS ");
		}
		if(z==true){
			document.write("JavaScript ");
		}
		document.write("<br>")

	}
	document.write("College: "+college1);
	document.write("<br>"); 
}


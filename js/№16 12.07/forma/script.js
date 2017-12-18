function checkForm() {
	// alert(document.forms[0].length)
	// alert(document.forms["forma"].length)
	// alert(document.forms.forma.length);
	// alert(document.forma.length)
	// alert(forma.length)
	// alert(forma.name)
	// alert(forma.method)
	// alert(forma.action)
	// alert(forma.elements)
	// alert(forma.elements[0].type)
	// alert(forma.elements["login"].type)
	// alert(forma.elements.login.type)
	// alert(f.l.type)
	// forma.login.type = "button";
	// alert(forma.login.value)
	// forma.login.value = "login";
	// forma.login.select();
	// forma.login.disabled = true;
	// forma.login.focus();
	// forma.login.blur();

	var span = document.querySelector("span");
	var language = "";
	var login = forma.login.value;
	var password = forma.pass.value;
	var sex;
	var car;
	// var password2 = forma.pass2.value;
	var aboutme = forma.aboutme.value;
	for (var i = 0; i < forma.length; i++) {
		if (forma.elements[i].type == "checkbox" && forma.elements[i].checked) {
			language += forma.elements[i].value + " ";
		}
	}
	var str = language.trim();
	var arr = str.split(" ");
	// alert(arr);

	for (var i = 0; i < forma.sex.length; i++) {
		if (forma.sex[i].checked) {
			sex = forma.sex[i].value;
			break;
		}
	}
	// alert(sex);

	car = forma.car.options[forma.car.selectedIndex].text;
	alert(car);
}

function checkPass() {
	if (forma.pass.value != forma.pass2.value) {
		forma.pass.select();
		forma.pass2.value = "";
		document.querySelector("span.error-pass").textContent = "Wrong pass";
	}
}

// function hello() {

// }
document.querySelector("input[type = button ]").addEventListener("click", checkForm);
document.querySelector("input[name = pass2 ]").addEventListener("blur", checkPass);
// document.querySelector("input[name = login ]").addEventListener("blur", hello);
// document.querySelector("input[name = login ]").addEventListener("select", hello);
// document.querySelector("input[name = login ]").addEventListener("change", hello);
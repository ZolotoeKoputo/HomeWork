var kupura = 0,
	napitok1 = document.querySelector(".napitok1"),
	napitok2 = document.querySelector(".napitok2"),
	napitok3 = document.querySelector(".napitok3"),
	napitok4 = document.querySelector(".napitok4"),
	napitok = 0;

function f() {
	kupura += parseInt(forma.spisok.options[forma.spisok.selectedIndex].value);
	forma.t1.value = "на рахунку " + kupura + " грн";
	forma.spisok.disabled = true;
}

function add() {
	forma.spisok.disabled = false;
	forma.spisok.options[0].selected = true;
	forma.t1.value = "на рахунку " + kupura + " грн";
}

function check(obj) {
	if(obj.value != 5){
		forma.double.disabled = true;
		forma.double.checked = false;
	} else{
		forma.double.disabled = false;
	}
	if(obj.value == 1){
		napitok1.style.display = "block";
	} else{
		napitok1.style.display = "none";
	}
	if(obj.value == 3){
		napitok2.style.display = "block";
	} else{
		napitok2.style.display = "none";
	}
	if(obj.value == 5){
		napitok3.style.display = "block";
	} else{
		napitok3.style.display = "none";
	}
	if(obj.value == 10){
		napitok4.style.display = "block";
	} else{
		napitok4.style.display = "none";
	}
}
function ok() {
	for (var i = 0; i < forma.length; i++) {
		if (forma.elements[i].type == "radio" && forma.elements[i].checked) {
			napitok = parseInt(forma.elements[i].value);
		}
	}
		if(forma.double.checked){
		 napitok = napitok + 5;
		}
		if(forma.sugar.checked){
			napitok = napitok + 1;
		}
	if (kupura >= napitok) {
		kupura = kupura - napitok;
		forma.t2.value = "ваша здача: " + kupura;
		forma.t3.value = "ваш напій.";
		forma.t1.value = "на рахунку " + kupura + " грн";
	} else {
		forma.t2.value = "недостатньо коштів...";
		forma.t3.value = "поповніть рахунок...";
		forma.spisok.disabled = false;
		forma.spisok.options[0].selected = true;
	}
}

function resetForm() {
	forma.spisok.disabled = false;
	kupura = 0;
}
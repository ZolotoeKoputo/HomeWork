function f(y) // приймаємо value вибраного користувачем року і місяця
{
	for (var t = 0; t < 12; t++) {
		var p = t - 1 // в цій перемінній будемо мати число попереднього місяця
		var daysMonth = 32 - new Date(y, t, 32).getDate(); // узнаємо кількість днів в текущому місяці
		var daysMonth2 = 32 - new Date(y, p, 32).getDate(); // узнаємо кількість днів в попереднього місяці
		var date = new Date(y, t, 1);
		var arr_month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
		var arr_day = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
		var day = date.getDay() - 1;
		if (day == -1) {
			day = 6
		};
		var g = document.getElementById('yer')
		var calendar = document.getElementById('calendar');
		var table = document.createElement('table');
		var tbody = document.createElement('tbody');
		var number = 1;
		var emptyCells = 0;
		var den = new Date();
		var now = den.getDate(); // узнаэмо сьогоднышне число мисяця
		var mis = den.getMonth();
		var year = den.getFullYear();
		var count = 0;
		var q = day;
		for (let i = 0; i < 8; i++) //Створення таблиці з 8TR і з 7TD
		{
			var tr = document.createElement('tr');
			for (let i = 0; i < 7; i++) {
				var td = document.createElement("td");
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		table.className = 'table'; // таблиці додаємо класс table
		//table.setAttribute("id", "elem"); // додаємо таблиці ID = elem;
		//table.id = 'elem' //додаємо таблиці ID = elem; 2 варіант
		calendar.appendChild(table);

		table.children[0].children[0].children[0].setAttribute('colspan', "7") // обєднуємо 7 ячеєк
		for (var i = 0; i < 6; i++) // удаляємо 6 ячеєк після обєднання
		{
			table.rows[0].cells[0].nextElementSibling.remove();
		}
		table.rows[0].cells[0].innerHTML = "<span>" + arr_month[t] + "</span>"; // в таблицю додаємо запис місяця з масиву 
		table.rows[0].cells[0].style.textAlign = 'center';
		table.rows[0].cells[0].style.fontWeight = 'bold';
		for (var i = 0; i < 7; i++) // зміняємо в другій строці td на th там де будуть назви днів неділі
		{
			var th = document.createElement("th");
			table.rows[1].replaceChild(th, table.rows[1].cells[i]);
			table.rows[1].cells[i].textContent = arr_day[i] // додаємо напис днів неділі з масиву arr_day
		}

		for (var i = day; i < 7; i++) {

			table.rows[2].cells[i].textContent = number++; //заповнюємо третій ряд цифрами днів неділі
			if (table.rows[2].cells[i].textContent == now) {
				table.rows[j].cells[i].style.background = 'green'
			}
		}
		for (var i = 7 - day; i < 7; i++) // запонюэмо перрший ряд числами попереднього мысяця
		{
			q--;
			table.rows[2].cells[q].textContent = daysMonth2--;
			table.rows[2].cells[q].style.background = 'grey';
		}
		for (var i = 1; i < 7; i++) /// розмальовуэмо суботу неділю в червоний
		{
			for (var j = 5; j < 7; j++) {
				table.rows[i].cells[j].style.background = 'red'
			}
		}
		for (var j = 3; j < 8; j++) {
			for (var i = 0; i < 7; i++) {
				table.rows[j].cells[i].textContent = number++;
				if (number > daysMonth + 1) {
					count++;
					table.rows[j].cells[i].textContent = count;
					table.rows[j].cells[i].style.background = 'grey'
				} //замальовуэмо сирим дні іншого місяця в кінці таблиці
				if (table.rows[j].cells[i].textContent == now && mis == t && year == y) {
					table.rows[j].cells[i].style.background = 'green'
				} // замальовуэмо зеленим сьогоднышний день
			}
		}

		if (count > 6) {
			// table.firstChild.lastChild.remove(); // удаляємо кількість порожніх ячеєк для подальшого їх видалення з календаря
			table.rows[7].remove(); // удаляємо кількість порожніх ячеєк для подальшого їх видалення з календаря 2 спосіб
		}
		if (count == 14) // якщо кількість пустих ячейок буде 14 то удаляє 2 строки
		{
			table.rows[6].remove();
		}
	}
	g.textContent = 'Календар ' + y + ' рік'
}
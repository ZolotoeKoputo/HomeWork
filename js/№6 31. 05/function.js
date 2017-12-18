function createTable(row, cell) {
	var tags = "<table style = 'border: 1px solid gray; width: 1200px; height: 600px; margin: 0 auto;'>";
	for (var i = 1; i <= row; i++) {
		tags += "<tr>";
		for (var j = 1; j <= cell; j++) {
			tags += "<td style = 'border: 1px solid gray;'>";
			tags += "Строка " + i + " Ячейка " + j;
			tags += "</td>";
		}
		tags += "</tr>";
	}
	tags += "</table>";
	return tags;
}
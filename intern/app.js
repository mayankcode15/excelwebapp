function readExcel() {
    var fileInput = document.getElementById('fileInput');
    var outputDiv = document.getElementById('output');

    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, { type: 'binary' });
            var sheetName = workbook.SheetNames[0];
            var sheet = workbook.Sheets[sheetName];
            var jsonData = XLSX.utils.sheet_to_json(sheet);

            outputDiv.innerHTML = JSON.stringify(jsonData, null, 2);
        };

        reader.readAsBinaryString(file);
    }
}

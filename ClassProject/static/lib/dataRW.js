$(function () {
	$.ajax({
		url: '/allfiles',
		method: 'GET',
		contentType: 'application/JSON',
		success: function (res) {
			updateDataFromFiles(res);
		},
	});
	$('#sendPost').on('click', function (e) {
		let filename = document.getElementById('filename').value;
		if (filename === '') {
			filename = 'abcd' + parseInt(Math.random() * 1000).toString();
		}
		console.log(filename);
		let jsonData = { filename, data: _elementList };
		e.preventDefault();
		$.ajax({
			url: '/sendData',
			method: 'POST',
			contentType: 'application/JSON',
			data: JSON.stringify(jsonData),
			success: function (res) {
				console.log(res);
				$.ajax({
					url: '/allfiles',
					method: 'GET',
					contentType: 'application/JSON',
					success: function (res) {
						updateFileList(res);
					},
				});
			},
		});
	});
	$('#readGet').on('click', function (e) {
		console.log('read get initialted...');
		e.preventDefault();
		$.ajax({
			url: '/readData',
			method: 'GET',
			contentType: 'application/JSON',
			success: function (res) {
				console.log(res);
			},
		});
	});
});

function updateDataFromFiles(files) {
	updateFileList(files);
	updateData();
}

function updateFileList(files) {
	var s = document.getElementById('filesId');
	while (s.children.length > 0) { s.removeChild(s.firstChild) };
	files.forEach((e) => {
		var o = document.createElement('option');
		o.text = e.name;
		o.value = e.filedata;

		s.appendChild(o);
	});

}

function updateData() {
	var e = document.getElementById('filesId');
	let c = JSON.parse(e.value);
	console.log(c);
	//	_elementList = c.data;

	_elementList = [];
	var myData = c.data;
	if (myData) {
		for (var i = 0; i < myData.length; i++) {
			var myElementData = myData[i];
			if (myElementData.class) {
				//var myElement = eval("new " + myElementData.class + "()");
				var myElement = eval("new " + myElementData.class + "()");
				for (property in myElementData) {
				myElement[property] = myElementData[property];
			}
			_elementList.push(myElement);
		}
		}
	}
	if (_table) _table.refresh();

	document.getElementById('dataFromFilesId').value = JSON.stringify(c);
}

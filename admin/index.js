function displayUser() {
	const userEmail = sessionStorage.getItem("Name");
	if (userEmail != null) {
		const name = userEmail.split("@")[0];
		document.getElementById("intro").innerHTML = `Hello ${name}`;
	} else {
		window.location.href = "../login";
	}
}

function defaultData() {
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	const setData = [
		{
			name: "John",
			age: "25",
			email: "john@example.com",
		},
		{
			name: "Jane",
			age: "30",
			email: "jane@example.com",
		},
		{
			name: "Bob",
			age: "35",
			email: "bob@example.com",
		},
	];
	if (data === null || data.length === 0) {
		localStorage.setItem("Data Admin", JSON.stringify(setData));
	}
}

function addData() {
	const name = document.getElementById("name");
	const age = document.getElementById("age");
	const email = document.getElementById("email");
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	const setData = { name: name.value, age: age.value, email: email.value };
	data.push(setData);
	localStorage.setItem("Data Admin", JSON.stringify(data));
	displayData();
}

function displayData() {
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	console.log(typeof data);
	const table = document.getElementById("data-table");
	table.innerHTML = "";
	for (let i = 0; i < data.length; i++) {
		const text = `<tr>
		<td>
		${data[i].name}
		</td>
		<td>
		${data[i].age}</td>
		<td>
		${data[i].email}
		</td>
		<td>
		<input type = "submit" value = "Edit"onclick = "editData(${i})">
		<input type = "submit" value = "Remove" onclick = "removeData(${i})">
		</td>
		</tr>`;
		table.innerHTML += text;
	}
}

function editData(index) {
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	const newName = prompt("Input Nama: ");
	const newAge = prompt("Input Umur: ");
	const newEmail = prompt("Input Email: ");
	data[index] = { name: newName, age: newAge, email: newEmail };
	localStorage.setItem("Data Admin", JSON.stringify(data));
	displayData();
}

function removeData(index) {
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	data.splice(index, 1);
	localStorage.setItem("Data Admin", JSON.stringify(data));
	displayData();
}

(window.onload = displayUser()), defaultData(), displayData();

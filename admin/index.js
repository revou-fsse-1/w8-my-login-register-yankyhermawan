document
	.querySelector("#name")
	.addEventListener("input", () => checkCredential("name"));
document
	.querySelector("#age")
	.addEventListener("input", () => checkCredential("age"));
document
	.querySelector("#email")
	.addEventListener("input", () => checkCredential("email"));

document.querySelector("#btn").addEventListener("click", () => addData());

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

function editData(idx) {
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	const newName = prompt("Input Nama: ", data[idx].name) || data[idx].name;
	const newAge = prompt("Input Umur: ", data[idx].age) || data[idx].age;
	const newEmail = prompt("Input Email: ", data[idx].email) || data[idx].email;
	const dataToChange = { name: newName, age: newAge, email: newEmail };
	const updatedObjects = data.map((object, index) => {
		if (index === idx) {
			return dataToChange;
		}
		return object;
	});
	console.log(updatedObjects);
	localStorage.setItem("Data Admin", JSON.stringify(updatedObjects));
	displayData();
}

function removeData(idx) {
	const data = JSON.parse(localStorage.getItem("Data Admin"));
	const updatedObjects = data.filter((object, index) => index !== idx);
	localStorage.setItem("Data Admin", JSON.stringify(updatedObjects));
	displayData();
}

function checkCredential(id) {
	if (id === "email") {
		const pattern = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
		const val = document.getElementById("email").value;
		if (pattern.test(val)) {
			const text = `
			<div id ='email-notif-text' class = "true">
				<i id = "email-mark" class="fa-solid fa-check"></i>
				This is a valid email address
			</div>`;
			document.getElementById("email-text").innerHTML = text;
			document.getElementById("email-text").classList.add = "true";
		} else {
			const text = `
			<div id ='email-notif-text' class = "false">
				<i id = "email-mark" class="fa-solid fa-xmark"></i>
				This is not a valid email address
			</div>`;
			document.getElementById("email-text").innerHTML = text;
			document.getElementById("email-text").classList.add = "false";
		}
	}
	if (id === "name") {
		const pattern = /[0-9]/;
		const val = document.getElementById("name").value;
		if (!pattern.test(val)) {
			const text = `
			<div id ='name-notif-text' class = "true">
				<i id = "email-mark" class="fa-solid fa-check"></i>
				This is a valid name
			</div>`;
			document.getElementById("name-text").innerHTML = text;
			document.getElementById("name-text").classList.add = "true";
		} else {
			const text = `
			<div id ='name-notif-text' class = "false">
				<i id = "email-mark" class="fa-solid fa-xmark"></i>
				Name should not contains numbers or symbols
			</div>`;
			document.getElementById("name-text").innerHTML = text;
			document.getElementById("name-text").classList.add = "false";
		}
	}
	if (id === "age") {
		const pattern = /[a-zA-Z]/;
		const val = document.getElementById("age").value;
		if (!pattern.test(val)) {
			const text = `
			<div id ='age-notif-text' class = "true">
				<i id = "age-mark" class="fa-solid fa-check"></i>
				This is a input for age
			</div>`;
			document.getElementById("age-text").innerHTML = text;
			document.getElementById("age-text").classList.add = "true";
		} else {
			const text = `
			<div id ='age-notif-text' class = "false">
				<i id = "age-mark" class="fa-solid fa-xmark"></i>
				Age should not contains any letters or symbols
			</div>`;
			document.getElementById("age-text").innerHTML = text;
			document.getElementById("age-text").classList.add = "false";
		}
	}
	if (document.querySelectorAll(".notif .true").length === 3) {
		document.getElementById("btn").removeAttribute("disabled", "true");
	} else {
		document.getElementById("btn").setAttribute("disabled", "true");
	}
}

(window.onload = displayUser()), defaultData(), displayData();

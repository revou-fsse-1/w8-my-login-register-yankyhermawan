document
	.querySelector("#email")
	.addEventListener("input", () => checkCredential("email"));

document
	.querySelector("#password")
	.addEventListener("input", () => checkCredential("password"));

document
	.querySelector("#password-confirm")
	.addEventListener("input", () => confirmPassword("password-confirm"));

document.querySelector("#btn").addEventListener("click", () => setAction()),
	() => setAction();

function defaultFunction() {
	const dataLogin = localStorage.getItem("Data");
	const setData = [{ email: "admin@gmail.com", password: "Admin123" }];
	if (dataLogin === null) {
		localStorage.setItem("Data", JSON.stringify(setData));
	}
}

function checkCredential(id) {
	console.log(id);
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
		} else {
			const text = `
			<div id ='email-notif-text' class = "false">
				<i id = "email-mark" class="fa-solid fa-xmark"></i>
				This is not a valid email address
			</div>`;
			document.getElementById("email-text").innerHTML = text;
		}
	}
	if (id === "password") {
		const val = document.getElementById("password").value;
		const uppercasePattern = /[A-Z]/;
		const lowercasePattern = /[a-z]/;
		const numberPattern = /[0-9]/;
		const passUppercase = document.getElementById("pass-uppercase");
		const passLowercase = document.getElementById("pass-lowercase");
		const passNumber = document.getElementById("pass-number");
		if (uppercasePattern.test(val)) {
			const uppercaseText = `<i class="fa-solid fa-check"></i>Uppercase`;
			passUppercase.innerHTML = uppercaseText;
			passUppercase.className = "true";
		} else {
			const uppercaseText = `<i class="fa-solid fa-xmark"></i>Uppercase`;
			passUppercase.innerHTML = uppercaseText;
			passUppercase.className = "false";
		}

		if (lowercasePattern.test(val)) {
			const lowercaseText = `<i class="fa-solid fa-check"></i>Lowercase`;
			passLowercase.innerHTML = lowercaseText;
			passLowercase.className = "true";
		} else {
			const lowercaseText = `<i class="fa-solid fa-xmark"></i>Lowercase`;
			passLowercase.innerHTML = lowercaseText;
			passLowercase.className = "false";
		}

		if (numberPattern.test(val)) {
			const numberText = `<i class="fa-solid fa-check"></i>Number`;
			passNumber.innerHTML = numberText;
			passNumber.className = "true";
		} else {
			const numberText = `<i class="fa-solid fa-xmark"></i>Number`;
			passNumber.innerHTML = numberText;
			passNumber.className = "false";
		}
	}

	if (
		document.querySelectorAll("#password-text .true").length == 3 &&
		document.querySelectorAll("#email-text .true").length == 1 &&
		document.querySelectorAll("#password-confirm .ture").length == 1
	) {
		document.getElementById("btn").removeAttribute("disabled", "true");
	} else {
		document.getElementById("btn").setAttribute("disabled", "true");
	}
}

function setAction() {
	const dataLogin = JSON.parse(localStorage.getItem("Data"));
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const check = dataLogin.find((a) => a.email === email.value);
	console.log(check);
	if (check === undefined) {
		const setData = { email: email.value, password: password.value };
		dataLogin.push(setData);

		localStorage.setItem("Data", JSON.stringify(dataLogin));
	} else {
		alert("Email already registered");
	}
}

function confirmPassword() {
	const pass = document.getElementById("password");
	const passwordConfirm = document.getElementById("password-confirm");
	const passConfirm = document.getElementById("pass-confirm");
	if (passwordConfirm.value != "") {
		if (pass.value != passwordConfirm.value) {
			passConfirm.innerHTML = `<i class="fa-solid fa-xmark"></i> Password Not Match`;
			passConfirm.className = "false";
		} else {
			passConfirm.innerHTML = `<i class="fa-solid fa-check"></i> Password Match`;
			passConfirm.className = "true";
		}
	}
}

defaultFunction();

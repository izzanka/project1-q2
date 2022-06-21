//set default account
const defaultName = "user";
const defaultEmail = "user@gmail.com";
const defaultPassword = "password";

//clear register input
function registerClear(){
	document.getElementById("rName").value = "";
	document.getElementById("rEmail").value = "";
	document.getElementById("rPassword").value = "";
	document.getElementById("rConfirmPassword").value = "";
}

//clear login input
function loginClear(){
	document.getElementById("lEmail").value = "";
	document.getElementById("lPassword").value = "";
}

//validate string 
function validateString(e){
	const pattern = /^[A-Za-z]+$/;
	return pattern.test(e.key);
}

//login
function login(){
	//get input value and put on variable
	let email = document.getElementById("lEmail").value;
	let password = document.getElementById("lPassword").value;

	//check if email or password is null
	if(email == "" || password == ""){
		alert("Email and password required.")
		return;
	//check if email doesnt match with default email
	}else if(email != defaultEmail){
		alert("Email does not exist.");
		return;
	//check if password doesnt match with default password
	}else if(password != defaultPassword){
		alert("Password does not match.");
		return;
	//if match with default account and pass the validation
    //clear the login form
	//send a notification
	//go to home page
	}else{
		alert("Welcome to adidas store, " + defaultName);
		loginClear();
		location.href = "index.html";
	}
}

//register
function register(){
	//get input value and put on variable
	let name = document.getElementById("rName").value;
	let email = document.getElementById("rEmail").value;
	let password = document.getElementById("rPassword").value;
	let confirmPassword = document.getElementById("rConfirmPassword").value;

	//check if all field is null
	if(name == "" || email == "" || password == "" || confirmPassword == ""){
		alert("All field required.");
		return;
	//check if email match with default email
	}else if(email == defaultEmail){
		alert(email + " is already registered.");
		return;
	//check if confirm password doesnt match with password
	}else if(confirmPassword != password){
		alert("Confirm password doesnt match with your password.");
		return;
	//if doesnt match with default account and pass the validation
    //clear the register form
	//send a notification
	//go to home page
	}else{
		alert("Thanks for registration, " + name);
		registerClear();
		location.href = "index.html";
	}
}


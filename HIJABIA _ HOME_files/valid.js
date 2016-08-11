function readytowear(){
	document.getElementById("readytowear").style.display = "block";
}
function readytowearclose(){
	document.getElementById("readytowear").style.display = "none";
}
function bridalOpen(){
	document.getElementById("bridal").style.display = "block";
	document.getElementById("party").style.display = "none";
	document.getElementById("casual").style.display = "none";
}
function partyOpen(){
	document.getElementById("bridal").style.display = "none";
	document.getElementById("party").style.display = "block";
	document.getElementById("casual").style.display = "none";
}
function casualOpen(){
	document.getElementById("bridal").style.display = "none";
	document.getElementById("party").style.display = "none";
	document.getElementById("casual").style.display = "block";
}
function signin(){
	document.getElementById("signup").style.display = "none";
	document.getElementById("signin").style.display = "block";
	document.getElementById("accountnav").innerHTML = "<a href='#' onclick='signinclose()'>SIGN IN</a><a href='#' onclick='signup()'>SIGN UP</a>";
}
function signinclose(){
	document.getElementById("signup").style.display = "none";
	document.getElementById("signin").style.display = "none";
	document.getElementById("accountnav").innerHTML = "<a href='#' onclick='signin()'>SIGN IN</a><a href='#' onclick='signup()'>SIGN UP</a>";
}
function signup(){
	document.getElementById("signup").style.display = "block";
	document.getElementById("signin").style.display = "none";
		document.getElementById("accountnav").innerHTML = "<a href='#' onclick='signin()'>SIGN IN</a><a href='#' onclick='signupclose()'>SIGN UP</a>";
}
function signupclose(){
	document.getElementById("signup").style.display = "none";
	document.getElementById("signin").style.display = "none";
	document.getElementById("accountnav").innerHTML = "<a href='#' onclick='signin()'>SIGN IN</a><a href='#' onclick='signup()'>SIGN UP</a>";
}
function accountsOpen(){
	document.getElementById("account").style.display = "block";
}
function accountsClose(){
	document.getElementById("account").style.display = "none";
}

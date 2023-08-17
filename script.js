const title = document.getElementById("title");
const details = document.getElementById("details");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

singupBtn.onclick = function () {
    title.innerHTML = "Sign Up";
    details.style.display = "block";
}

loginBtn.onclick = function () {
    title.innerHTML = "Login";
    details.style.display = "none";
}
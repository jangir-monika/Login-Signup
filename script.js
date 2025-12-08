// Tab switching
let loginTab = document.getElementById("loginTab");
let signupTab = document.getElementById("signupTab");
let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");

loginTab.onclick = () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
};

signupTab.onclick = () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
};

// Toggle password visibility
function togglePass(id) {
    let field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

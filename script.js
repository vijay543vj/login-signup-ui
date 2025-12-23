/* SHOW / HIDE PASSWORD */
document.querySelectorAll(".toggle").forEach(icon => {
    icon.addEventListener("click", () => {
        const input = document.getElementById(icon.dataset.target);
        input.type = input.type === "password" ? "text" : "password";
    });
});

/* SLIDE TOGGLE LOGIN / SIGNUP */
const wrapper = document.querySelector(".form-wrapper");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const formTitle = document.getElementById("formTitle");
const toggleMessage = document.getElementById("toggleMessage");
const toggleLink = document.getElementById("toggleLink");

toggleLink.addEventListener("click", e => {
    e.preventDefault();

    if(wrapper.classList.contains("show-login")){
        wrapper.classList.remove("show-login");
        wrapper.classList.add("show-signup");

        formTitle.textContent = "Signup";
        toggleMessage.textContent = "Already have an account?";
        toggleLink.textContent = "Login";
    }else{
        wrapper.classList.remove("show-signup");
        wrapper.classList.add("show-login");

        formTitle.textContent = "Login";
        toggleMessage.textContent = "Not registered yet?";
        toggleLink.textContent = "Signup";
    }
});

/* PASSWORD STRENGTH */
const signupPassword = document.getElementById("signupPassword");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

signupPassword.addEventListener("input", () => {
    const val = signupPassword.value;
    let strength = 0;

    if(val.length >= 6) strength++;
    if(/[A-Z]/.test(val)) strength++;
    if(/[0-9]/.test(val)) strength++;
    if(/[@$!%*?&]/.test(val)) strength++;

    const colors = ["red","orange","yellow","lightgreen","lime"];
    const labels = ["Very Weak","Weak","Medium","Strong","Very Strong"];

    strengthBar.style.width = strength * 25 + "%";
    strengthBar.style.background = colors[strength];
    strengthText.textContent = labels[strength];
});

/* CONFIRM PASSWORD CHECK */
const confirmPassword = document.getElementById("confirmPassword");
const matchMessage = document.getElementById("matchMessage");

confirmPassword.addEventListener("input", () => {
    if(confirmPassword.value === signupPassword.value){
        matchMessage.textContent = "Passwords match ✔";
        matchMessage.style.color = "lightgreen";
    }else{
        matchMessage.textContent = "Passwords do not match ✖";
        matchMessage.style.color = "red";
    }
});

/* LOADING SPINNER */
signupForm.addEventListener("submit", e => {
    e.preventDefault();

    if(confirmPassword.value !== signupPassword.value) return;

    const btn = signupForm.querySelector(".Sub-btn");
    btn.querySelector(".btn-text").classList.add("hidden");
    btn.querySelector(".spinner").classList.remove("hidden");

    setTimeout(() => {
        btn.querySelector(".spinner").classList.add("hidden");
        btn.querySelector(".btn-text").classList.remove("hidden");
        alert("Signup successful!");
        signupForm.reset();
        strengthBar.style.width = "0";
        strengthText.textContent = "";
        matchMessage.textContent = "";
    }, 2000);
});

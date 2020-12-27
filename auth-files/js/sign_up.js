const passwordToggle = document.getElementById("passwordToggle");
const passwordInput = document.getElementById("passwordInput");

passwordToggle.addEventListener("click", function() {    
    if (passwordToggle.src.includes("show")){
        passwordToggle.src = "../media/images/icons/hide.svg";
        passwordInput.type = "text";
    } else {
        passwordToggle.src = "../media/images/icons/show.svg";
        passwordInput.type = "password";
    }
});

let modalOverlay = document.querySelector(".modal");
let passInput = document.getElementById("login-pass"); 
let emailInput = document.getElementById("login-email"); 
let submit = document.querySelector(".login__button"); 
let form = document.querySelector(".container"); 

function showModal() {
   modalOverlay.style.display = "flex"; // show modal

   setTimeout(() => {
      closeModal()
   }, 1500)
}

function closeModal() {
   modalOverlay.style.display = "none"; // close modal
}

// Close modal when pressing Escape key
document.addEventListener("keydown", function (e) {
   if (e.key === "Escape") {
      closeModal();
   }
});

submit.addEventListener("click", (e) => {
   e.preventDefault();

   if (emailValidation() && passwordValidation()) {
      showModal();
      form.reset(); 
   }
});

function emailValidation() {
   let email = emailInput.value.trim();
   let emailError = document.getElementById("email_error");

   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.innerHTML = "Enter a valid email address";
      emailInput.classList.add("input-error");
      return false;
   }

   emailError.innerHTML = "";
   emailInput.classList.remove("input-error");
   return true;
}

function passwordValidation() {
   let pass = passInput.value;
   let passError = document.getElementById("pass_error");
   let border = document.getElementsByClassName("login__box")

   if (pass.length < 8 || pass.length > 20) {
      passError.innerHTML = "Password must be 8–20 characters long";
      passError.style.color = "red";
      border.style.borderBottom = "red";
      passInput.classList.add("input-error");
      return false;
   }
   if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])/.test(pass)) {
      passError.innerHTML =
         "Password must include uppercase, lowercase, number, and special character";
      passError.style.color = "red";
      passInput.classList.add("input-error");
      return false;
   }

   passError.innerHTML = ""; // clear error if valid
   passInput.classList.remove("input-error");
   return true; 
}

/*=============== SHOW / HIDE PASSWORD ===============*/
const togglePassword = document.getElementById("login-eye");
const passwordField = document.getElementById("login-pass");

togglePassword.addEventListener("click", () => {
   if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.classList.remove("ri-eye-off-line");
      togglePassword.classList.add("ri-eye-line");
   } else {
      passwordField.type = "password";
      togglePassword.classList.remove("ri-eye-line");
      togglePassword.classList.add("ri-eye-off-line");
   }
});
// =================== Variables ===================
let submit = document.getElementById("btn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const confirmPassInput = document.getElementById("conformpass");
let modalOverlay = document.querySelector(".modal");
const signupForm = document.getElementById("signupForm");

const passToggle = document.getElementById('passToggle');
const conformpassToggle = document.getElementById('conformpassToggle');


// =================== Modal Functions ===================

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


// =================== Form Submit Handler ===================
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (nameValidation() && emailValidation() && passwordValidation()) {
        submit.value = 'Creating Account…';
        submit.style.opacity = '0.8';

        setTimeout(function () {
            showModal();
            submit.value = 'Create Account';
            submit.style.opacity = '1';
            signupForm.reset();

            // remove background classes one by one
            nameInput.classList.remove("input-error", "input-success");
            emailInput.classList.remove("input-error", "input-success");
            passInput.classList.remove("input-error", "input-success");
            confirmPassInput.classList.remove("input-error", "input-success");
        }, 1500);
    }
});


// =================== Validation Functions ===================
// Name Validation
function nameValidation() {
    let name = nameInput.value;
    let nameError = document.getElementById("name_error");

    if (name.length == 0) {
        nameError.innerHTML = "Please enter your full name";

        nameError.style.color = "red";
        nameInput.classList.add("input-error");
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Enter first and last name (e.g., John Doe)";
        nameError.style.color = "red";
        nameInput.classList.add("input-error");
        return false;
    }

    nameError.innerHTML = "";
    nameInput.classList.remove("input-error");
    nameInput.classList.add("input-success");
    return true;
}

// Email Validation
function emailValidation() {
    let email = emailInput.value;
    let emailError = document.getElementById("email_error");

    if (email.length == 0) {
        emailError.innerHTML = "Please enter your email address";
        emailError.style.color = "red";
        emailInput.classList.add("input-error");
        return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Enter a valid email (e.g., name@example.com)";
        emailError.style.color = "red";
        emailInput.classList.add("input-error");
        return false;
    }

    emailError.innerHTML = "";
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-success");
    return true;
}

// Password Validation
function passwordValidation() {
    let pass = passInput.value;
    let confirmPass = confirmPassInput.value;

    let passError = document.getElementById("pass_error");
    let passConfirmError = document.getElementById("passconfirm_error");

    if (pass.length == 0) {
        passError.innerHTML = "Please create a password";
        passError.style.color = "red";
        passInput.classList.add("input-error");
        return false;
    }
    if (pass.length < 8 || pass.length > 20) {
        passError.innerHTML = "Password must be 8–20 characters long";
        passError.style.color = "red";
        passInput.classList.add("input-error");
        return false;
    }
    if (!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]+$/)) {
        passError.innerHTML = "Password must include uppercase, lowercase, number, and special character";
        passError.style.color = "red";
        passInput.classList.add("input-error");
        return false;
    }

    if (confirmPass.length == 0) {
        passConfirmError.innerHTML = "Please confirm your password";
        passConfirmError.style.color = "red";
        confirmPassInput.classList.add("input-error");
        return false;
    }
    if (pass !== confirmPass) {
        passConfirmError.innerHTML = "Passwords do not match";
        passConfirmError.style.color = "red";
        confirmPassInput.classList.add("input-error");
        return false;
    }

    passError.innerHTML = "";
    passConfirmError.innerHTML = "";
    passInput.classList.add("input-success");
    confirmPassInput.classList.add("input-success");
    return true;
}


// =================== Password Toggle ===================
passToggle.addEventListener('click', function () {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        passToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passInput.type = 'password';
        passToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
});

conformpassToggle.addEventListener('click', function () {
    if (confirmPassInput.type === 'password') {
        confirmPassInput.type = 'text';
        conformpassToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        confirmPassInput.type = 'password';
        conformpassToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
});
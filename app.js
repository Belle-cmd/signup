const form = document.getElementById("form-content");
const phoneNum = document.getElementById("phone-number");
const email = document.getElementById("email");
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("confirm-password");


phoneNum.addEventListener("input", (event) => {
    if (phoneNum.validity.patternMismatch) {
        // pattern indicates no characters, dash, brackets, space
        phoneNum.setCustomValidity("Letters, dash '-', spaces, brackets '()' are not accepted.");
        phoneNum.reportValidity();
    } else {
        phoneNum.setCustomValidity("");
    }
});

// every time the user types an input, regex check is done until a input is valid
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Format: email@DomainName");
        email.reportValidity();
      } else {
        email.setCustomValidity("");
      }
});

// every time the user types an input, matching is done
passwordConfirm.addEventListener("input", (event) => {
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Please input matching passwords.");
        passwordConfirm.reportValidity();
    } else {
        passwordConfirm.setCustomValidity("");
    }
});


form.addEventListener("submit", (event) => {
    event.preventDefault();  // stop form submission
    alert("Dummy submission. No actual data is sent.");
});


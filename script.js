// const form = document.getElementById("#enter-info");
// const subButton = document.querySelector(".submit");
// subButton.addEventListener("click", (e) => console.log(e));

const userPassword = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#confirm-password");

userPassword.addEventListener("input", (e) => {
  if (userPassword.validity.patternMismatch) {
    userPassword.setCustomValidity(
      "Password must contain at least one number, one uppercase letter, one lowercase letter, and 8 or more characters"
    );
    userPassword.reportValidity();
  } else {
    userPassword.setCustomValidity("");
  }
});

confirmPassword.addEventListener("input", (e) => {
  if (confirmPassword.value !== userPassword.value) {
    confirmPassword.setCustomValidity("Passwords must match");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
});

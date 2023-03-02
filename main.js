const form = document.querySelector("#form");
const welcomeContainer = document.querySelector("#welcome");
const logout = document.querySelector("#logout");

function checkUser() {
  const userName = localStorage.getItem("name");

  if (userName) {
    const userWelcome = document.querySelector("#username");

    userWelcome.textContent = userName;
    form.style.display = "none";
    welcomeContainer.style.display = "block";
  } else {
    form.style.display = "block";
    welcomeContainer.style.display = "none";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#name");

  localStorage.setItem("name", nameInput.value);
  nameInput.value = "";

  checkUser();
});

logout.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("backColorValue");
  localStorage.removeItem("fontColor");

  checkUser();
});

checkUser();

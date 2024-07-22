const Heading= document.querySelector("#heading");

const Name= document.querySelector(".nameField");

const btn = document.querySelector(".login");

const signupBtn = document.querySelector("#signupBtn");

const links = document.querySelector(".links");

 signupBtn.addEventListener("click", () => {
    event.preventDefault();
    Heading.innerHTML = "Sign Up";
    Name.style.display = "block";
 });

 btn.addEventListener("click", () => {
    event.preventDefault();
    Heading.innerHTML = "Login";
    Name.style.display = "none";
 });


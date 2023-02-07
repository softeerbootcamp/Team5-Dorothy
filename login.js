const loginbtn = document.body.querySelector(".LoginBtn");
const loginform = document.body.querySelector(".LoginForm");
const loginpassword = loginform
  .querySelector("#LoginPassword")
  .querySelector("input");
const loginx = document.body.querySelector(".LoginForm").querySelector(".fa-x");
const loginpwshow = loginform.querySelector(".fa-eye");
const loginpwhide = loginform.querySelector(".fa-eye-slash");
const maintitle = document.body.querySelector(".MainTitle");
const loginbutton = document.body
  .querySelector(".LoginCnxt")
  .querySelector("button");

// loginpassword.addEventListener("input", (e) => {
//   if (loginpwhide.classList.contains("show")) {
//     return;
//   }
//   if (e.target.value.length > 0) {
//     loginpwshow.classList.add("show");
//   } else {
//     loginpwshow.classList.remove("show");
//     loginpwhide.classList.remove("show");
//   }
// });

loginpwshow.addEventListener("mouseover", (e) => {
  loginpassword.type = "text";
  e.target.classList.toggle("show");
  loginpwhide.classList.toggle("show");
});

loginpwhide.addEventListener("mouseout", (e) => {
  loginpassword.type = "password";
  e.target.classList.toggle("show");
  loginpwshow.classList.toggle("show");
});

// loginbutton.addEventListener("click", (e) => {
//   loginform.classList.toggle("On");
//   maintitle.classList.add("Mini");
//   document.body.querySelector(".hamburger").classList.add("show");
//   document.body.querySelector(".MainBox").classList.add("Start");
//   console.log(document.body.querySelector(".MainBox"));
// });

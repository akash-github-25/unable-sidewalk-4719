let bag = document.querySelector(".bag");
bag.addEventListener("click", function () {
   window.location.href = "#";
});

document.querySelector("#btn").addEventListener("click", login);
function login() {
   window.location.href = "./signin.html";
}
let menDiv = document.querySelector("#men");
menDiv.addEventListener("click", menClick);
let womenDiv = document.querySelector("#women");
womenDiv.addEventListener("click", womenClick);
let kidsDiv = document.querySelector("#kids");
kidsDiv.addEventListener("click", kidsClick);
function menClick() {
   localStorage.setItem("clickedOn", "Men");
   window.location.href = "#";
}
function womenClick() {
   localStorage.setItem("clickedOn", "Women");
   window.location.href = "#";
}
function kidsClick() {
   localStorage.setItem("clickedOn", "Kids");
   window.location.href = "#";
};
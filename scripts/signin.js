// let email = document.getElementById("email");
// let password = document.getElementById("password");
let mobile = document.getElementById("mobile");
let login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", registerData);

function registerData() {
  if (mobile.value.length == "") {
    alert("please Enter mobile number");
  } else {

    loadData(mobile.value);
  }
}

async function loadData(mobile) {
  let obj = {
    mobile: mobile,
  };

  console.log(obj);
  localStorage.setItem("id-details", JSON.stringify(obj));
  alert("Registration Successfull!");
  window.location.href = "../otp veryfy.html";
}
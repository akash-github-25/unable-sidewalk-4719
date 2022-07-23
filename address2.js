//update priceBlock-container

updatePriceblock();
function updatePriceblock() {
   let mrp = JSON.parse(localStorage.getItem("MRP")) || [];
   console.log("mrp: ", mrp);
   let x = document.getElementById("priceDetail-value actual-price")
   x.innerText = `₹ ${mrp}`
   let discount = JSON.parse(localStorage.getItem("discount")) || [];
   let y = document.getElementById("priceDetail-value discount-price teal-1") || [];
   y.innerText = `₹ ${discount}`
   let orderData = JSON.parse(localStorage.getItem("amount")) || [];
   // if (orderData < 300) {
   //    orderData.innerHTML = "300"
   // } else {
   //    orderData.innerText = `₹ ${orderData}`
   // }
   let z = document.getElementById("priceDetail-total")
   z.innerText = `₹ ${orderData}`


}

let addDetails = JSON.parse(localStorage.getItem("addDetails"));
console.log("addDetails: ", addDetails);

document.querySelector("#name").innerHTML = addDetails.name;
document.querySelector("#add").innerHTML = addDetails.address;
document.querySelector("#loc").innerHTML = addDetails.locality;
document.querySelector("#city").innerHTML = addDetails.city;
document.querySelector("#state").innerHTML = addDetails.state;
document.querySelector("#pin").innerHTML = addDetails.pin;
document.querySelector("#mob").innerHTML = addDetails.mobile;

document.querySelector("#continue").addEventListener("click", payFun);
function payFun(event) {
   window.location.href = "payment.html";

}
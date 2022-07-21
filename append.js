
function append(arr1,container){
  arr1.forEach((el)=>{
let div= document.createElement("div")
let img=document.createElement("img")
img.src=el.img;
div.append(img)
div.addEventListener("onclick",on)
container.append(div)
  })
}
function on(){
  window.location.href="mens.html"
  
}
export default append

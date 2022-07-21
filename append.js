
function append(arr1,container){
  arr1.forEach((el)=>{
let div= document.createElement("div")
let img=document.createElement("img")
img.src=el.img;
div.addEventListener("click",on)
function on(){
  if(el.title=="roadster"){
  window.location.href="roadster.html"
  }else if(el.title=="veromoda"){
    window.location.href="veromoda.html"
  }
  
}
div.append(img)


container.append(div)
  })
}

export default append

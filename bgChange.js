var backChange=document.getElementById("bgChange")

var borderRdChange=document.getElementById("borderChange")
var image=document.querySelector("img")

function bgChange(a){
    if(a.key === "Enter"){
        document.body.style.backgroundColor=backChange.value
    }
}

function borderRChange(a){
    if(a.key === "Enter"){
        image.style.borderRadius=`${borderRdChange.value}px`
    }
  
}
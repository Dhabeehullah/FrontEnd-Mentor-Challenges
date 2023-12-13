for(var j=1;j <= document.querySelectorAll(".arr1").length;j++){
  document.querySelectorAll(".arr1")[j-1].addEventListener("click",function(){
        vis(this.textContent);
  }); 
}

for(var i = 1 ; i < (document.querySelectorAll(".arr1").length)+1; i++){

    document.querySelectorAll(".arr1")[i-1].addEventListener("click",function(){
        forH2(this.textContent);
      
    });
}
function forH2(e){
    document.querySelector(".arr .h2"+e).classList.toggle("for");
}
function vis(event){
  document.querySelector(".p"+event).classList.toggle("visible"); 
}
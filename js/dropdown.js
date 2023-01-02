
const button = document.querySelectorAll(".button");

document.onclick = function(){
   for(let menu of button){
      menu.nextElementSibling.classList.remove("visible-dropdown");
   }
}

for(let menu of button){
   menu.onclick = function(e){
      e.stopPropagation(); 
      this.nextElementSibling.classList.toggle('visible-dropdown');
   }
   menu.nextElementSibling.onclick = function(e){
      e.stopPropagation();
   }
}


let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
   
  arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.nextElementSibling

 arrowParent.classList.toggle("visible-main");
  });
}

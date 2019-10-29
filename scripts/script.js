//main mobile nav

let hamburger = document.querySelector(".hamburger");
let content = document.querySelector(".dropContent");

hamburger.addEventListener("click", function() {
  
  hamburger.classList.toggle("is-active");
  
  if(content.style.display === 'none'){
    content.style.display='block';
  }
  else{
    content.style.display='none';
  }
});



// ds-ham-nav
let mobileNav= document.getElementById("hammy");

mobileNav.addEventListener("click", function() {
  
    mobileNav.classList.toggle("is-active");
    
});
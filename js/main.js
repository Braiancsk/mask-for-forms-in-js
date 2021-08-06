const burger = document.querySelector('.hamburger')
const nav = document.querySelector('nav.mobile-nav ul');
const navImg = document.getElementById('img');
const navImg2 = document.getElementById('img2');
const navImg3 = document.getElementById('img3');
const subMenu1 = document.getElementById('dropdown-content1');
const subMenu2 = document.getElementById('dropdown-content2');
const subMenu3 = document.getElementById('dropdown-content3');
const dropdown1 = document.getElementById('dropdown-1');
const dropdown2 = document.getElementById('dropdown-2');
const dropdown3 = document.getElementById('dropdown-3');

function burgerActive(){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('is-active');
  });
}

function showNav(){
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('show-nav');
  });
}


function showSubNav1(){
      subMenu1.addEventListener('click', ()=>{
        dropdown1.classList.toggle('show-nav');
        navImg.classList.toggle('connect-active');    
    });
}

function showSubNav2(){
  subMenu2.addEventListener('click', ()=>{
      dropdown2.classList.toggle('show-nav');
      navImg2.classList.toggle('connect-active');    
});
}

function showSubNav3(){
  subMenu3.addEventListener('click', ()=>{
      dropdown3.classList.toggle('show-nav');
      navImg3.classList.toggle('connect-active');    
});
}




function initApps(){
  burgerActive();
  showNav();
  showSubNav1();
  showSubNav2();
  showSubNav3();
}

initApps();
 


 




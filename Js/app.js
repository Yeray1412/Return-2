const arrows = document.querySelectorAll('.arrow');
const langDrop = document.querySelector('.langDrop')
const framDrop = document.querySelector('.framDrop')
const skillDrop = document.querySelector('.skillDrop')


for(const arrow of arrows) {
    if(arrow.parentElement.parentElement.className == 'langDrop') {
        arrow.addEventListener('click', ()=> {
            if(langDrop.offsetHeight == 40) {
                langDrop.style.height = '160px';
                arrow.style.transform = 'rotate(90deg)';
            }
        
            else {
                langDrop.style.height = '40px';
                arrow.style.transform = 'rotate(0deg)';
            }
        })
    }

    if(arrow.parentElement.parentElement.className == 'framDrop') {
        arrow.addEventListener('click', ()=> {
            if(framDrop.offsetHeight == 40) {
                framDrop.style.height = '160px';
                arrow.style.transform = 'rotate(90deg)';
            }
        
            else {
                framDrop.style.height = '40px';
                arrow.style.transform = 'rotate(0deg)';
            }
        })
    }

    if(arrow.parentElement.parentElement.className == 'skillDrop') {
        arrow.addEventListener('click', ()=> {
            if(skillDrop.offsetHeight == 40) {
                skillDrop.style.height = '160px';
                arrow.style.transform = 'rotate(90deg)';
            }
        
            else {
                skillDrop.style.height = '40px';
                arrow.style.transform = 'rotate(0deg)';
            }
        })
    }
}


/* mobile menu */
const bars = document.querySelector(".navbar-toggler");
const xMark = document.querySelector(".x-mark");
const popUp = document.querySelector(".popUp");
const header = document.querySelector("header");
const nav = document.querySelector('nav');


bars.addEventListener("click", function () {
  popUp.style.transform = "translateX(0px)";
  header.style.filter = "blur(7px)";
  nav.style.filter = "blur(7px)";
    document.body.classList.add('stopScroll')
});

xMark.addEventListener("click", function () {
  popUp.style.transform = "translateX(-100%)";
  header.style.filter = "blur(0px)";
  nav.style.filter = "blur(0px)";
  document.body.classList.remove('stopScroll')
});

const damnUl =document.querySelector('.damnUl');
const port = document.querySelector('#Port');
const About = document.querySelector('#About');
const Cont = document.querySelector('#Cont');

for(const li of damnUl.children) {
    if(li.textContent.includes('Portfolio')) {
        li.addEventListener('click',()=> {
            popUp.style.transform = "translateX(-100%)";
            header.style.filter = "blur(0px)";
            nav.style.filter = "blur(0px)";
            document.body.classList.remove('stopScroll')
            port.scrollIntoView({behavior:"smooth"});
        })
    }

    if(li.textContent.includes('About')) {
        li.addEventListener('click',()=> {
            popUp.style.transform = "translateX(-100%)";
            header.style.filter = "blur(0px)";
            nav.style.filter = "blur(0px)";
            document.body.classList.remove('stopScroll')
            About.scrollIntoView({behavior:"smooth"});
        })
    }

    if(li.textContent.includes('Contact')) {
        li.addEventListener('click',()=> {
            popUp.style.transform = "translateX(-100%)";
            header.style.filter = "blur(0px)";
            nav.style.filter = "blur(0px)";
            document.body.classList.remove('stopScroll')
            Cont.scrollIntoView({behavior:"smooth"});
        })
    }
}


/* details popup window */

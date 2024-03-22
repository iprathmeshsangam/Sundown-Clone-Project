const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// let elem = document.querySelectorAll(".elem")
// let abc = elem.getAttribute("data-image");

// console.log(abc)

const elemC = document.querySelector(".elemContainer");
const fixed = document.querySelector(".fixed-image");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
});
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
console.log(elems)
elems.forEach(e =>{
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute('data-image');
        fixed.style.backgroundImage = `url(${image})`;

    });
})

let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 40,
  });

let fullMenu = document.querySelector("#full-screen");
let menu = document.querySelector("nav h3");
menu.addEventListener("click",function(){
    fullMenu.style.top = 0;
});


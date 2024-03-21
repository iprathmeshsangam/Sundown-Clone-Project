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


const named = document.querySelector('.name');
const part1 = document.querySelector('.cover h1:first-child');
const part2 = document.querySelector('.cover h1:nth-child(2)');
const shade = document.querySelector('.shade');
const cont = document.querySelector('.cont');
const bg = document.querySelector('.bg');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const down = document.querySelector('.down');
const slides = document.querySelectorAll('.slide');
const slidehead = document.querySelectorAll('.slide h2');
const out1 = document.querySelector('.out1');
const out2 = document.querySelector('.out2');
const out3 = document.querySelector('.out3');
const out4 = document.querySelector('.out4');
const out5 = document.querySelector('.out5');

const color = window.getComputedStyle(part1).getPropertyValue('color');
const shadow = window.getComputedStyle(part1).getPropertyValue('text-shadow');
const ogcolor = window.getComputedStyle(part2).getPropertyValue('color');
const boxshadow = window.getComputedStyle(named).getPropertyValue('box-shadow').replace(/60/g, '120');
const shadow2 = 'rgb(255, 20, 189) 0px 0px 30px';

// console.log(boxshadow);

const tl = gsap.timeline(defaults = {ease: 'none'});
tl.fromTo(named, {opacity:0}, {opacity:1, duration: 2, delay: 2})
tl.to(part1, {textShadow: `${shadow}, ${shadow2}`, color: color, duration: 4, repeat: -1, yoyo: true}, ">")
tl.to(part2, {color:color, delay: 1,duration:0.2,repeat:8}, "<");
tl.to(part2, {color: ogcolor, duration: 0.2}, ">");
tl.set(part2, {color: color, textShadow: `${shadow}, ${shadow2}`}, ">1");
tl.to(part1, {textShadow: `${shadow}, ${shadow2}`, repeat:1}, "<");
tl.to(part1, {x:650,duration:4}, ">2");
tl.to(part2, {x:650,duration:4}, "<");
tl.set(part1, {display:"none"}, ">");
tl.set(part2, {display:"none"}, "<");
tl.set('.cover h1:last-child', {display:"block"}, "<");
tl.fromTo('.cover h1:last-child', {x:-650}, {x:0, duration: 4, onComplete: () => tl.pause()}, ">");


named.addEventListener('click', () => {
    gsap.to(named, {scale:0.0001,opacity:0, duration: 2});
    setTimeout(() => {
        named.style.display = "none";
        bg.style.display = "block";
        gsap.fromTo(bg, {opacity:0, scale:0}, {opacity:1, scale:1, duration: 2});
        setTimeout(() => {
            cont.style.display = "block";
            gsap.fromTo(cont, {opacity:0, scale:0}, {opacity:1, scale:1, duration: 2});
        }, 2000);

    }, 2000);
});


//  Delete later

// named.addEventListener('click', () => {
//     named.style.display = "none";
//     bg.style.display = "block";
//     cont.style.display = "block";
// });

//  Delete later

let currentslide = 0;

next.addEventListener('click', () => {
    currentslide++;
    let cslide = currentslide - 1;
    if(currentslide > slides.length - 1){
        currentslide = 0;
    }
    if (currentslide === 0) {
        cslide = slides.length - 1
    }
    gsap.to(slides[cslide], {x: "102%", duration: 1});
    setTimeout(() => {
            slides[cslide].style.display = "none";
    slides[currentslide].style.display = "flex";
    gsap.fromTo(slides[currentslide], {x: "-100%"}, {x: "0%", duration: 1});
    }, 1000);
});

prev.addEventListener('click', () => {
    currentslide--;
    let cslide = currentslide + 1;
    if(currentslide < 0){
        currentslide = slides.length - 1;
    }
    if (currentslide === slides.length - 1) {
        cslide = 0
    }
    gsap.to(slides[cslide], {x: "-102%", duration: 1});
    setTimeout(() => {
            slides[cslide].style.display = "none";
    slides[currentslide].style.display = "flex";
    gsap.fromTo(slides[currentslide], {x: "100%"}, {x: "0%", duration: 1});
    }, 1000);
});


slidehead[0].addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.fromTo(slides[currentslide], {rotateX: "0"}, {rotateX: "90%", duration: 1}); 
    tl.fromTo(slides[currentslide], {rotateX: "90%"}, {rotateX: "0", duration: 1}, ">"); 

    setTimeout(() => {
    out1.style.display = "flex";
    }, 1000);
});

slidehead[1].addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.fromTo(slides[currentslide], {rotateX: "0"}, {rotateX: "90%", duration: 1}); 
    tl.fromTo(slides[currentslide], {rotateX: "90%"}, {rotateX: "0", duration: 1}, ">"); 

    setTimeout(() => {
    out2.style.display = "flex";
    }, 1000);
}
);

slidehead[2].addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.fromTo(slides[currentslide], {rotateX: "0"}, {rotateX: "90%", duration: 1}); 
    tl.fromTo(slides[currentslide], {rotateX: "90%"}, {rotateX: "0", duration: 1}, ">"); 

    setTimeout(() => {
    out3.style.display = "flex";
    }, 1000);
}
);

slidehead[3].addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.fromTo(slides[currentslide], {rotateX: "0"}, {rotateX: "90%", duration: 1}); 
    tl.fromTo(slides[currentslide], {rotateX: "90%"}, {rotateX: "0", duration: 1}, ">"); 

    setTimeout(() => {
    out4.style.display = "flex";
    }, 1000);
}
);

slidehead[4].addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.fromTo(slides[currentslide], {rotateX: "0"}, {rotateX: "90%", duration: 1}); 
    tl.fromTo(slides[currentslide], {rotateX: "90%"}, {rotateX: "0", duration: 1}, ">"); 

    setTimeout(() => {
    out5.style.display = "flex";
    }, 1000);
}
);
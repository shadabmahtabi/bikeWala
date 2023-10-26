// Nav ka dropdown menu 
let menu = document.querySelector('#navMenu');
let dropdown = document.querySelector('.dropdown');
let second = document.querySelector('#second');
let nav2Drop = document.querySelector('#nav2Dropdown');
let li = document.querySelector('.bg');
let flag = 0;
let flag2 = 0;
menu.addEventListener('click', ()=>{
    if(flag === 0){
        dropdown.style.opacity = '1';
        dropdown.style.pointerEvents = 'initial';
        dropdown.style.marginTop = '0';
        menu.innerHTML = '<i class="ri-close-line"></i>';
        flag = 1;
    }
    else{
        dropdown.style.opacity = '0';
        dropdown.style.pointerEvents = 'none';
        dropdown.style.marginTop = '-5%';
        menu.innerHTML = '<i class="ri-menu-3-line"></i>';
        second.style.opacity = '0';
        second.style.pointerEvents = 'none';
        second.style.marginTop = '-5%';
        flag = 0;
    }
})
nav2Drop.addEventListener('click', ()=>{
    if(flag2 === 0){
        second.style.opacity = '1';
        second.style.pointerEvents = 'initial';
        second.style.marginTop = '0';
        flag2 = 1;
    }
    else{
        second.style.opacity = '0';
        second.style.pointerEvents = 'none';
        second.style.marginTop = '-5%';
        flag2 = 0;
    }
})
// li.addEventListener('click', ()=>{
//     li.style.backgroundColor = '#fff';
// })





// ButtonRotate
let button = document.querySelector('#button');
let iconRotate = document.querySelector('#iconRotate');

button.addEventListener('mouseenter', ()=>{
    button.style.transform = 'rotate(0deg)';
    iconRotate.style.transform = 'rotate(0deg)';
})
button.addEventListener('mouseleave', ()=>{
    button.style.transform = 'rotate(-45deg)';
    iconRotate.style.transform = 'rotate(45deg)';  
})

// CommentBox by me
let input = document.querySelector('#input');
let comment = document.querySelector('.comment');
let items = [];
let cluster = "";
let submit = document.getElementById('submit').addEventListener('click', ()=>{
    if(input.value === ''){}
    else{
        items.push(input.value);
        console.log(items);
        // comment.innerHTML = input.value;
        input.value = '';  
        cluster = "";      
        for(i=0; i<items.length; i++){
            cluster += `
            <div class="trow">
            <div class="serialNo">${i+1}</div>
            <div class="comment">${items[i]}</div>
            <div class="action">
            <button id="deleteButton" onclick="deleted()">Delete</button>
            </div>
            </div>
            `;
        }

        tableBody.innerHTML = cluster;
    }
})

// GSAP Animations
gsap.from("#cl1el1>img",{
    scrollTrigger: {
        trigger: "#section2",
        start: "top 60%",
    },
    x: "-60%",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})
gsap.from("#cl2>img",{
    scrollTrigger: {
        trigger: "#section2",
        start: "top 60%",
    },
    y: "70%",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})
gsap.from("#cl3el1>img",{
    scrollTrigger: {
        trigger: "#section2",
        start: "top 60%",
    },
    y: "-70%",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})
gsap.from("#cl3el2>img",{
    scrollTrigger: {
        trigger: "#section2",
        start: "top 60%",
    },
    x: "101%",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})
gsap.from(".frame",{
    scrollTrigger: {
        trigger: "#section2",
        start: "top 60%",
    },
    opacity: 0,
    duration: 4,
})
gsap.from(".bikeAnimate",{
    scrollTrigger: {
        trigger: "#section4",
        start: "top 80%",
    },
    x: "-101%",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})

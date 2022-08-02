const img_1 = document.querySelector(".img_1");

window.addEventListener("scroll", function() {
    if(scrollY > 300) {
        img_1.style.opacity = "1"
        
    } else {
        img_1.style.opacity = "0"
    }
})

const img_2 = document.querySelector(".img_2");

window.addEventListener("scroll", function() {
    if(scrollY > 450) {
        img_2.style.opacity = "1"
        
    } else {
        img_2.style.opacity = "0"
    }
})

const img_3 = document.querySelector(".img_3");

window.addEventListener("scroll", function() {
    if(scrollY > 600) {
        img_3.style.opacity = "1"
        
    } else {
        img_3.style.opacity = "0"
    }
})

const img_4 = document.querySelector(".img_4");

window.addEventListener("scroll", function() {
    if(scrollY > 750) {
        img_4.style.opacity = "1"
        
    } else {
        img_4.style.opacity = "0"
    }
})
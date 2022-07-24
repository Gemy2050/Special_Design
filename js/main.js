// Handle Setting Box Toggle
let settingBox = document.querySelector(".setting-box");

document.querySelector(".toggle-setting .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
    settingBox.classList.toggle("open");
}

document.querySelector(".landing-page").onclick = function() {
    settingBox.classList.remove("open");
    document.querySelector(".toggle-setting .fa-gear").classList.remove("fa-spin");
}


// Switch Colors
let colorLi = document.querySelectorAll(".colors-list li");
colorLi.forEach(li => {
    li.addEventListener("click", (e)=> {
        // set property on root node
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        window.localStorage.setItem("color", e.target.dataset.color);
        colorLi.forEach(color => {
            color.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
document.documentElement.style.setProperty('--main-color', window.localStorage.getItem("color"));



// Random Background Image
function Random() {
    let landing = document.querySelector(".landing-page");
    let imgArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
    let id = setInterval(() => {
    let randomindex = Math.floor(Math.random() * imgArray.length);
    let randomImage = imgArray[randomindex];
    landing.style.backgroundImage = `url(../images/${randomImage}.jpg)`;

    if(noButton.classList.contains("active"))
    landing.style.backgroundImage = `url(../images/img4.jpg)`;
    else
    landing.style.backgroundImage = `url(../images/${randomImage}.jpg)`;
}, 3000);
}
Random();

// Handle Burger Icon Action
let borgerIcon = document.querySelector(".header-area i");
let nav_links = document.querySelector(".header-area .links");
let close = document.querySelector(".header-area .close");
let count = 0;
borgerIcon.onclick = () => {
    count++;
    if (count % 2 == 0) {
        nav_links.style.display = "none";
        document.querySelector(".toggle-setting").style.visibility = "visible";
    }
        
    else {
        nav_links.style.display = "block";
        document.querySelector(".toggle-setting").style.visibility = "hidden";
    }
};




let yesButton = document.querySelector(".option-box .yes");
let noButton = document.querySelector(".option-box .no");

yesButton.onclick = function() {
    yesButton.classList.add("active");
    noButton.classList.remove("active");
}
noButton.onclick = function() {
    yesButton.classList.remove("active");
    noButton.classList.add("active");
}
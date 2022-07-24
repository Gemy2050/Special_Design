// Handle Setting Box Toggle
let settingBox = document.querySelector(".setting-box");

document.querySelector(".toggle-setting .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
    settingBox.classList.toggle("open");
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
let landing = document.querySelector(".landing-page");
let imgArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
setInterval(() => {
    let randomindex = Math.floor(Math.random() * imgArray.length);
    let randomImage = imgArray[randomindex];
    landing.style.backgroundImage = `url(../images/${randomImage}.jpg)`;
}, 10000);

// Handle Burger Icon Action
let borgerIcon = document.querySelector(".header-area i");
let nav_links = document.querySelector(".header-area .links");
let close = document.querySelector(".header-area .close");
let count = 0;
borgerIcon.onclick = () => {
    count++;
    if (count % 2 == 0) 
        nav_links.style.display = "none";
    else 
        nav_links.style.display = "block";
};


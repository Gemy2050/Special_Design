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


// Handle Random Backgrounds Or No
let yesButton = document.querySelector(".random-background .yes");
let noButton = document.querySelector(".random-background .no");
let backgroundOption = true;

document.querySelectorAll(".random-background span").forEach(el=> {

    el.addEventListener("click", (e) => {
        document.querySelectorAll(".random-background span").forEach(sp => {
            sp.classList.remove("active");
            
        });
        e.target.classList.add("active");

        if(yesButton.classList.contains("active")) {
            backgroundOption = true;
            Random();
        } else if(noButton.classList.contains("active")) {
            backgroundOption = false;
            clearInterval(backgroundInterval);
        }
    });

});

// Random Background Function
let landing = document.querySelector(".landing-page");
let imgArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
let backgroundInterval, randomImage;
function Random() {

    if(backgroundOption == true) {
            backgroundInterval = setInterval(() => {
            let randomindex = Math.floor(Math.random() * imgArray.length);
            randomImage = imgArray[randomindex];
            landing.style.backgroundImage = `url(../images/${randomImage}.jpg)`;
        }, 2000);
    }

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


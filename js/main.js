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
let count = 0;
borgerIcon.onclick = () => {
    count++;
    if (count % 2 == 0) nav_links.style.display = "none";
    else nav_links.style.display = "block";
};

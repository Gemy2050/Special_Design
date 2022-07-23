// Random Background Image

let landing = document.querySelector(".landing-page");
let imgArray = ["img1", "img2", "img3", "img4", "img5", "img6"];
setInterval(() => {
    let randomindex = Math.floor(Math.random() * imgArray.length);
    let randomImage = imgArray[randomindex];
    landing.style.backgroundImage = `url(../images/${randomImage}.jpg)`;
}, 10000);

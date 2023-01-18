window.onscroll = function () {
  widthProgress();
};

// Handle Setting Box Toggle
let settingBox = document.querySelector(".setting-box");

document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
};


document.querySelectorAll("body > div:not(.setting-box)").forEach(el=> {
  el.onclick = function() {
    settingBox.classList.remove("open");
    document.querySelector(".toggle-setting .fa-gear").classList.remove("fa-spin");
  }
});


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
  } else {
    nav_links.style.display = "block";
    document.querySelector(".toggle-setting").style.visibility = "hidden";
  }
};


// Switch Colors
let colorLi = document.querySelectorAll(".colors-list li");
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set property on root node
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    window.localStorage.setItem("color", e.target.dataset.color);
    colorLi.forEach((color) => {
      color.classList.remove("active");
    });
    e.target.classList.add("active");
  });

  if (window.localStorage.getItem("color") == li.dataset.color)
    li.classList.add("active");
  else li.classList.remove("active");
});
document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color"));

// Handle Random Backgrounds Or No
let yesButton = document.querySelector(".random-background .yes");
let noButton = document.querySelector(".random-background .no");
let backgroundOption = true;

document.querySelectorAll(".random-background span").forEach((el) => {
  el.addEventListener("click", (e) => {
    document.querySelectorAll(".random-background span").forEach((sp) => {
      sp.classList.remove("active");
    });
    e.target.classList.add("active");

    if (yesButton.classList.contains("active")) {
      backgroundOption = true;
      window.localStorage.setItem("random", true);
      window.localStorage.setItem("active", "yes");
      Random();
    } else if (noButton.classList.contains("active")) {
      backgroundOption = false;
      window.localStorage.setItem("random", false);
      window.localStorage.setItem("active", "no");
      clearInterval(backgroundInterval);
    }
  });
});

// Random Background Function
let landing = document.querySelector(".landing-page");
let imgArray = [ "img3", "img4", "img5", "img6", "01", "02", "03", "04", "05", "07", "08", "10"];
let backgroundInterval, randomImage;
function Random() {
  if (backgroundOption == true) {
    backgroundInterval = setInterval(() => {
      let randomindex = Math.floor(Math.random() * imgArray.length);
      randomImage = imgArray[randomindex];
      landing.style.backgroundImage = `url(../images/${randomImage}.jpg)`;
    }, 10000);
  }
}
Random();

if (localStorage.getItem("active") == "yes") {
  yesButton.classList.add("active");
  noButton.classList.remove("active");
} else {
  noButton.classList.add("active");
  yesButton.classList.remove("active");
  clearInterval(backgroundInterval);
}


// Handle Dark Mode
let enableDark = document.querySelector(".dark-mode .yes");
let disableDark = document.querySelector(".dark-mode .no");

  document.querySelectorAll(".dark-mode span").forEach((el) => {
    el.addEventListener("click", (e) => {
      document.querySelector(".dark-mode .active").classList.remove("active");
      e.target.classList.add("active");
      if(enableDark.classList.contains("active")) {
        window.localStorage.setItem("dark", true)
      } else {
        window.localStorage.setItem("dark", false);
      }
      darkMode();
    });
  });

function darkMode() {
      if (window.localStorage.getItem("dark") == "true") {
        document.documentElement.style.setProperty("--main-background", "#222");
        document.documentElement.style.setProperty(
          "--main-background-alt",
          "#191919"
        );
        document.body.style.color = "white";
        enableDark.classList.add("active");
        disableDark.classList.remove("active");
      } else {
        document.documentElement.style.setProperty("--main-background", "#fff");
        document.documentElement.style.setProperty(
          "--main-background-alt",
          "#ddd"
        );
        document.body.style.color = "black";
        enableDark.classList.remove("active");
        disableDark.classList.add("active");
      }

}
darkMode();



// Animate Skills Width
function widthProgress() {
  let skillSection = document.querySelector(".our-skills");
  let skills = document.querySelectorAll(".our-skills .skill-progress span");
  if (window.scrollY >= skillSection.offsetTop - 150) {
    skills.forEach((skill) => {
      skill.style.width = `${skill.dataset.width}`;
    });
  }
}


// Create Images Popup
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
  img.addEventListener("click", ()=> {

  let overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  document.body.appendChild(overlay);

  let popupBox = document.createElement("div");
  popupBox.className = "popup-box";

  let popupImage = document.createElement("img");
  popupImage.src = img.src;

  if(img.alt !== null) {
    let imgHeading = document.createElement("h3");
    let imgText = document.createTextNode(img.alt);
    imgHeading.appendChild(imgText);

    popupBox.appendChild(imgHeading);
  }

  popupBox.appendChild(popupImage);
  document.body.appendChild(popupBox);

  let closeButton = document.createElement("span");
  let closeButtonText = document.createTextNode("X");
  closeButton.appendChild(closeButtonText);
  closeButton.className = "close-button";

  popupBox.appendChild(closeButton);

  });
});

document.addEventListener("click", function(e) {
  if(e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});



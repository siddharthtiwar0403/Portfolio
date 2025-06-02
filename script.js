var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
var overlay = document.getElementById("overlay");
function openmenu() {
  sidemenu.classList.add("show");
  overlay.style.display = "block";
}
function closemenu() {
  sidemenu.classList.remove("show");
  overlay.style.display = "none";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxJ4Q8zCDxM2r2YHIH7zOKThCkbR5oM4nuxjImvFVekSocZtEaeMbvJQ6b55U9MZQ1H/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Imformation sent to Siddharth Tiwari";
      setTimeout(function () {
        msg.innerHTML = " ";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

var typed = new Typed("#element", {
  strings: [
    "Web Designer !!",
    "UI/UX Designer !!",
    " Full Stack Developer !!",
    "Graphic Designer !!",
  ],
  typeSpeed: 50,
});

// my work section
  const workList = document.getElementById("workList");
  const scrollAmount = document.querySelector(".work").offsetWidth + 40;

  function scrollLeftBtn() {
    workList.style.transition = 'transform 0.5s ease-in-out';
    workList.style.transform = `translateX(-${scrollAmount}px)`;
    setTimeout(() => {
      const first = workList.firstElementChild;
      workList.appendChild(first);
      workList.style.transition = 'none';
      workList.style.transform = 'translateX(0)';
    }, 500);
  }

  function scrollRightBtn() {
    const last = workList.lastElementChild;
    workList.insertBefore(last, workList.firstElementChild);
    workList.style.transition = 'none';
    workList.style.transform = `translateX(-${scrollAmount}px)`;
    setTimeout(() => {
      workList.style.transition = 'transform 0.5s ease-in-out';
      workList.style.transform = 'translateX(0)';
    }, 10);
  }
  setInterval(scrollLeftBtn, 3000);

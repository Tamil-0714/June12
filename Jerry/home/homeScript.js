let typed = new Typed(".near-name", {
  strings: [
    "Tyrannosaurus Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Diplodocus",
    "Allosaurus",
    "Ankylosaurus",
    "Pterodactyl",
    "Spinosaurus",
    "Apatosaurus",
    "Iguanodon",
    "Carnotaurus",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

window.addEventListener("DOMContentLoaded", () => {
  const square = document.querySelector(".testimonial-slide");
  const width = square.offsetWidth;
  square.style.height = `${width}px`;
});

var swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "cube",
  cubeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      // translate: ["-5%", 0, -200],
      translate: ["-120%", 0, -500],
      // rotate: [0, 100, 0],
      mine: 10,
    },
    next: {
      origin: "right center",
      // translate: ["5%", 0, -200],
      translate: ["120%", 0, -500],
      // rotate: [0, -100, 0],
    },
  },
});
let circles = document.querySelectorAll(".inside-cirle");
swiper6.on("slideChange", () => {
  console.log(swiper6.activeIndex);
  if (swiper6.activeIndex - 1 != -1)
    circles[swiper6.activeIndex - 1].classList.remove("present");
  circles[swiper6.activeIndex].classList.add("present");
  if(swiper6.activeIndex+1 < circles.length)
    circles[swiper6.activeIndex+1].classList.remove("present");
});

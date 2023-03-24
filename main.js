const $card = document.querySelector(".card");
const el = document.querySelector(".change");
const link = document.querySelectorAll(".anchor_links");
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

  $card.querySelector(".glow").style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener("mouseenter", () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener("mousemove", rotateToMouse);
});

$card.addEventListener("mouseleave", () => {
  document.removeEventListener("mousemove", rotateToMouse);
  $card.style.transform = "";
  $card.style.background = "";
});

// Fadeout image
const toggleButton = document.querySelector(".toggle");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

// Fading Toggle Function
function fade() {
  image1.classList.toggle("opacity");
  image2.classList.toggle("opacity");
  console.log("Hamimeru");
}
// Dark Mode Function
function ModeChange() {
  el.classList.toggle("bg-light");
  el.classList.toggle("color-light");
  el.classList.toggle("bg-dark");
  el.classList.toggle("color-dark");
  link.forEach(function (link) {
    link.classList.toggle("color-light");
    link.classList.toggle("color-dark");
  });
}
// Call the fadeOutImage function on image1 and the fadeInImage function on image2 after a delay
toggleButton.addEventListener("click", () => {
  setTimeout(fade, 100);
  setTimeout(ModeChange, 110);
});

// Toggle Color
// el.addEventListener("click", () => {
//   el.classList.add("bg-light");
//   el.classList.remove("bg-dark");
// });

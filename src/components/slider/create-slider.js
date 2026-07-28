import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";
import { projects } from "./projects.js";

loadStyle("./src/components/slider/styles.css");
let currentSlide = 0;
const maxSlides = projects.length;

function createSlider() {
  const slider = document.createElement("section");
  slider.className = "slider";

  const prevButton = createButton({
    className: "slider-btn slider-btn-prev",
    onClick: () => {
      const slideWidth = sliderWindow.clientWidth;
      prevButton.disabled = true;
      moveLastSlideToFront(slideWidth);
      currentSlide = currentSlide - 1;
      track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    },
  });
  prevButton.setAttribute("aria-label", "Previous slide");

  const nextButton = createButton({
    className: "slider-btn slider-btn-next",
    onClick: () => {
      const slideWidth = sliderWindow.clientWidth;
      nextButton.disabled = true;
      currentSlide = currentSlide + 1;
      track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    },
  });
  nextButton.setAttribute("aria-label", "Next slide");

  const sliderWindow = document.createElement("div");
  sliderWindow.className = "slider-window";

  const track = document.createElement("div");
  track.className = "slider-track";

  projects.forEach((project) => {
    const image = document.createElement("img");
    image.className = "slide-image";
    image.src = project.image;
    image.alt = project.title;
    track.append(image);
  });

  sliderWindow.append(track);

  const dots = document.createElement("div");
  dots.className = "slider-dots";

  const navigationBar = document.createElement("div");
  navigationBar.className = "navigation-bar";
  navigationBar.append(prevButton, dots, nextButton);

  slider.append(navigationBar, sliderWindow);

  track.addEventListener("transitionend", () => {
    nextButton.disabled = false;
    prevButton.disabled = false;
    const slideWidth = sliderWindow.clientWidth;
    moveFirstSlideToEnd(slideWidth);
    moveLastSlideToFront(slideWidth);
  });

  function moveLastSlideToFront(width) {
    if (currentSlide === 0) {
      track.style.transition = "none";
      track.prepend(track.lastElementChild);
      currentSlide = currentSlide + 1;
      track.style.transform = `translateX(-${currentSlide * width}px)`;
      track.offsetHeight;
      track.style.transition = "transform 0.35s steps(12)";
    }
  }

  function moveFirstSlideToEnd(width) {
    if (currentSlide === maxSlides - 1) {
      track.style.transition = "none";
      track.append(track.firstElementChild);
      currentSlide = currentSlide - 1;
      track.style.transform = `translateX(-${currentSlide * width}px)`;
      track.offsetHeight;
      track.style.transition = "transform 0.35s steps(12)";
    }
  }

  return slider;
}

export { createSlider };

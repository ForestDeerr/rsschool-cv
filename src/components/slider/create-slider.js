import { createButton } from "../utils/create-button.js";
import { loadStyle } from "../utils/load-style.js";
import { projects } from "./projects.js";

loadStyle("./src/components/slider/styles.css");
let currentSlide = 0;
let targetProjectIndex = null;
const maxSlides = projects.length;

function createSlider() {
  const dotElements = [];
  const slider = document.createElement("section");
  slider.className = "slider";

  const prevButton = createButton({
    className: "slider-btn slider-btn-prev",
    onClick: () => {
      prevSlide();
    },
  });
  prevButton.setAttribute("aria-label", "Previous slide");

  const nextButton = createButton({
    className: "slider-btn slider-btn-next",
    onClick: () => {
      nextSlide();
    },
  });
  nextButton.setAttribute("aria-label", "Next slide");

  const sliderWindow = document.createElement("div");
  sliderWindow.className = "slider-window";

  const track = document.createElement("div");
  track.className = "slider-track";

  const sliderTitlePanel = document.createElement("div");
  sliderTitlePanel.className = "slider-title-panel";

  const sliderTitle = document.createElement("div");
  sliderTitle.className = "slider-title";

  const dots = document.createElement("div");
  dots.className = "slider-dots";

  sliderTitlePanel.append(sliderTitle, dots);

  projects.forEach((project, index) => {
    const image = document.createElement("img");
    image.className = "slide-image";
    image.src = project.image;
    image.alt = project.title;
    image.dataset.index = index;
    track.append(image);

    const dot = document.createElement("div");
    dot.className = "dot active";

    dot.addEventListener("click", () => {
      targetProjectIndex = index;
      goToSlide(targetProjectIndex);
    });

    dotElements.push(dot);
    dots.append(dot);
  });

  sliderWindow.append(track);

  const navigationBar = document.createElement("div");
  navigationBar.className = "navigation-bar";
  navigationBar.append(prevButton, sliderTitlePanel, nextButton);

  slider.append(navigationBar, sliderWindow);

  track.addEventListener("transitionend", () => {
    const slideWidth = sliderWindow.clientWidth;
    moveFirstSlideToEnd(slideWidth);
    moveLastSlideToFront(slideWidth);

    if (targetProjectIndex !== null) {
      if (getCurrentProjectIndex() !== targetProjectIndex) {
        goToSlide(targetProjectIndex);
        return;
      }
      targetProjectIndex = null;
    }

    nextButton.disabled = false;
    prevButton.disabled = false;
    updateSliderTitle();
    updateActiveDot();
  });

  updateSliderTitle();
  updateActiveDot();

  function nextSlide() {
    const slideWidth = sliderWindow.clientWidth;
    nextButton.disabled = true;
    currentSlide = currentSlide + 1;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateSliderTitle();
    updateActiveDot();
  }

  function prevSlide() {
    const slideWidth = sliderWindow.clientWidth;
    prevButton.disabled = true;
    moveLastSlideToFront(slideWidth);
    currentSlide = currentSlide - 1;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateSliderTitle();
    updateActiveDot();
  }

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

  function goToSlide(index) {
    if (index > getCurrentProjectIndex()) {
      nextSlide();
    } else if (index < getCurrentProjectIndex()) {
      prevSlide();
    }
  }

  function getCurrentProjectIndex() {
    return Number(track.children[currentSlide].dataset.index);
  }

  function updateSliderTitle() {
    const index = getCurrentProjectIndex();
    sliderTitle.textContent = projects[index].title;
  }

  function updateActiveDot() {
    const index = getCurrentProjectIndex();
    dotElements.forEach((dot) => {
      dot.classList.remove("active");
    });
    dotElements[index].classList.add("active");
  }

  return slider;
}

export { createSlider };

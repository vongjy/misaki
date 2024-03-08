const box = document.querySelector(".box");
const boxStartRotation = gsap.getProperty(box, "rotation");

const boxTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: box,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
});

boxTimeline.to(box, {
  keyframes: {
    rotation: [
      () => {
        return gsap.getProperty(box, "rotation");
      },
      // 0,
      20,
      -20,
      10,
      -10,
      boxStartRotation,
    ],
    easeEach: "power1.inOut",
  },
  duration: 1,
});

box.addEventListener("mouseenter", () => {
  boxTimeline.invalidate().restart();
});

function spoilerReveal(element, color) {
  element.style.color = color;
}

const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-40%",
    end: "40%",
    scrub: true,
  },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255, 255, 255, 0.4)" },
  { color: "rgba(255, 255, 255, 1)", stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-20%",
    end: "60%",
    scrub: true,
  },
});

tlHRemove.to(".highlight", { color: "rgba(255, 255, 255, 0.4)", stagger: 1 });

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "20%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: -50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
    start: "0%",
    end: "100%",
  },
});

const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-image-container');

let currentSwatch = 'blue';
let topIndex = 2;
swatches.forEach((swatch, index) => {
  const coords = slides[index].getBoundingClientRect();
  swatch.addEventListener('click', (e) => {
    const swatchName = e.target.getAttribute('swatch');
    const closeup = document.querySelector(`.${swatchName}`);
    if (currentSwatch === swatchName) return;
    gsap.set(closeup, { zIndex: topIndex });
    gsap.fromTo(closeup, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.to(gallery, { x: -coords.x, duration: 1, ease: 'backout(1)' });
    topIndex++;
    currentSwatch = swatchName;
  });
})

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '150%',
    scrub: true,
    pin: true,
  },
});
tlVideo.fromTo('.product-video', { currentTime: 0 }, { currentTime: 3, duration: 1 });
tlVideo.fromTo('.product-info-container h3', { opacity: 0 }, { opacity: 1, stagger: 0.25, duration: 0.5 }, '<');

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.sixth-page',
    start: '-25%',
    end: '50%',
    scrub: true, 
  },
});

tlParallax.fromTo('.portrait-container', { y: 0, scale: 0.9 }, { y: -80, scale: 1 }, '<');
tlParallax.fromTo('.phone-video', { scale: 0.8, y: 0 }, { scale: 1, y: 120 }, '<');

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroller-stroll",
    pin: true,
    scrub: 1,
    start: "center center",
    end: "1000%",
  },
});

tl.to(".screens-stroll", {
  x: "-20%",
  duration: 4,
});

tl.to(
  ".screens-stroll",
  {
    scale: 0.85,
    duration: 1,
  },
  "-=1"
);

tl.to(".screens-stroll", {
  scale: 1,
  duration: 3,
});

tl.to(".screens-stroll", {
  x: "-40%",
  duration: 4,
});

tl.to(".walking-sabre", {
  x: "+=500px",
  duration: 2,
});

tl.to(".tigers-image", {
  y: "100%",
  duration: 3,
});

tl.to(".jumping-sabre", {
  y: "-=600px",
  x: "+=300px",
  duration: 2,
});

tl.to(".screens-stroll", {
  x: "-80%",
  duration: 4,
});

tl.to(
  ".buffalo",
  {
    scale: 0.8,
    duration: 3,
  },
  "-=4"
);

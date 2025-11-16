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

tl.to(
  ".screens-stroll",
  {
    x: "-20%",
    duration: 4,
  },
  "savane"
);

tl.fromTo(
  ".savane",
  { scale: 1 },
  {
    scale: 0.6,
    duration: 3,
  },
  "savane"
);

tl.fromTo(
  ".savane",
  { scale: 0.6 },
  {
    scale: 1,
    duration: 2,
  },
  "savane+=3"
);

tl.to(
  ".screens-stroll",
  {
    x: "-40%",
    duration: 4,
  },
  "-=2",
  "tigres"
);

tl.fromTo(
  ".tigers-image",
  {},
  {
    y: "100%",
    duration: 3,
  },
  "tigres"
);

tl.fromTo(
  ".jumping-sabre",
  {},
  {
    y: "-=600px",
    x: "+=300px",
    duration: 2,
  },
  "tigres+=2"
);

tl.to(".screens-stroll", {
  x: "-60%",
  duration: 4,
});
tl.to(".screens-stroll", {
  x: "-80%",
  duration: 4,
});
tl.to(
  ".screens-stroll",
  {
    y: "-200%",
    duration: 8,
  },
  "corpse-down"
);
tl.fromTo(".autumn", { opacity: 0 }, { opacity: 1, duration: 3 }, "autumn");

tl.fromTo(
  ".autumn",
  { scale: 1.5 },
  {
    scale: 1,
    duration: 0.5,
  },
  "autumn"
);

tl.fromTo(".winter", { opacity: 0 }, { opacity: 1, duration: 3 });
/*
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
*/

/*
tl.to(".screens-stroll", {
  x: "-25%",
  duration: 4,
});
*/

/*
 */

/*
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
*/

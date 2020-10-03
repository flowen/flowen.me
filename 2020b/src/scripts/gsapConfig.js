import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("flowIn", "0.895, 0.03, 0.685, 0.22");
CustomEase.create("flowOut", "0.165, 0.84, 0.44, 1");
CustomEase.create("flowInOut", "0.64, 0.04, 0.35, 1");

// Durations
export const dFast = 0.125;
export const dNormal = 0.25;
export const dSlow = 0.5;
export const dSlower = 1;

// Defaults
gsap.defaults({
  ease: "flowOut",
  duration: dNormal
});

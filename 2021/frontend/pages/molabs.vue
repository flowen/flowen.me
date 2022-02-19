<template>
  <section class="project-page">
    <h1 class="project-page__title" data-splitting="chars">
      <div class="rotate">
        <div class="scale">MO</div>
      </div>
    </h1>
    <h2 class="project-page__subtitle">Multiverse organism</h2>

    <div class="project-page__project-url">
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <a href="https://molabs.ai/" target="_blank" rel="noopener noreferrer">
        Open the live website
      </a>
    </div>

    <p class="project-page__description">
      Early startup around MO - Metaverse Organism.<br />
      Mysterious, cute-looking creature from a secret lab.<br />
      <br />
      Worked on the prototype in a Ruby environment, using three.js, and react-spring to create
      components and UIs.<br />
      Finalized by migrating the product to react-three-fiber in Nextjs.
    </p>

    <figure>
      <figcaption>SO UHMM, there's this egg you can tickle:</figcaption>
      <video class="video" autoplay loop muted playsinline poster="~assets/video/molabs/poster.jpg">
        <source src="~assets/video/molabs/molabs.mp4" type="video/mp4" />
      </video>
    </figure>

    <h3>page__summary</h3>
    <dl class="project-page__summary">
      <dd>For:</dd>
      <dt><a href="https://molabs.ai//">molabs.ai</a></dt>
      <dd>Created:</dd>
      <dt>Frontend UI with interactive 3D model</dt>
      <dd>Tech:</dd>
      <dt>threejs, react, react-spring, react-three-fiber, zustand</dt>
    </dl>

    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/Footer";
import mountSplitting from "@/mixins/mountSplitting";
import gsap from "gsap";

export default {
  name: "Intheyear2024",
  components: { Footer },
  mixins: [mountSplitting],
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      const title = el.querySelector(".project-page__title");

      gsap
        .timeline({ onComplete: done })
        .addLabel("start")
        .to(el, { opacity: 1 }, "start")
        .to(el, { duration: 1.5, y: 0 }, "start")
        .add(() => title.classList.add("js--show"), "-=1");
    },
    leave: function (el, done) {
      const video = el.querySelector(".video");
      video.pause();

      gsap.timeline({ onComplete: done }).to(el, {
        duration: 1.5,
        ease: "power4.in",
        yPercent: -100,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

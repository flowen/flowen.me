<template>
  <section class="project-page">
    <h1 class="project-page__title" data-splitting="chars">
      <div class="rotate">
        <div class="scale">Theatre JS Audiovisuals</div>
      </div>
    </h1>
    <h2 class="project-page__subtitle">Made for TheatreJS</h2>

    <div class="project-page__project-url">
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <a href="https://theatrejs-demo.netlify.app/" target="_blank" rel="noopener noreferrer"
        >It's you experience this live with good headphones</a
      >
    </div>

    <p class="project-page__description"></p>

    <!-- <figure>
      <figcaption>k k, just 1 for teh layouts:</figcaption>
      <video class="video" autoplay loop muted playsinline>
        <source src="~assets/img/intheyear2024/mschf.mp4" type="video/mp4" />
      </video>
    </figure> -->

    <h3>page__summary</h3>
    <dl class="project-page__summary">
      <dd>For:</dd>
      <dt><a href="https://www.theatrejs.com/">TheatreJS</a></dt>
      <dd>Created:</dd>
      <dt>
        Art directed and coded an audio-visual experience for Aria, the developer behind TheatreJS.
        I hired
        <a href="http://mert.audio" target="_blank" rel="nooper nofollow noreferrer">Mert</a> to
        create the audio.
      </dt>
      <dd>Tech:</dd>
      <dt>Three.js, Web audio API, particle-systems</dt>
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
      gsap.timeline({ onComplete: done }).to(el, {
        duration: 1.5,
        ease: "power4.in",
        yPercent: -100,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-page {
  transform: translateY(200vh);

  .no-js & {
    transform: translateY(0);
  }
}
figcaption {
  margin-bottom: 1.25vh;
}
</style>

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
        >It's best you experience this with good headphones</a
      >
    </div>

    <p class="project-page__description">
      Theatre.js is a JavaScript animation library with a GUI. It animates the DOM, WebGL, and any
      other JavaScript variable.
      <br /><br />
      Aria, the developer behind TheatreJS, contacted me to create a creative demo and show the
      capabilities of TheatreJS. I was free to create anything. <br /><br />
      I asked Mert to create the audio and help with art-direction.
    </p>

    <figure style="margin-left: 15vw">
      <video class="video" autoplay loop muted playsinline>
        <source src="~assets/img/theatrejs/wip-1.mp4" type="video/mp4" />
      </video>
      <figcaption>WIP: experimenting with particle-system</figcaption>
    </figure>

    <figure>
      <video class="video" autoplay loop muted playsinline>
        <source src="~assets/img/theatrejs/wip-2.mp4" type="video/mp4" />
      </video>
      <figcaption>Sneak peak of TheatreJS's power</figcaption>
    </figure>

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

<style lang="scss">
.project-page {
  transform: translateY(200vh);

  .no-js & {
    transform: translateY(0);
  }

  figure {
    margin: 0 0 12.5vh;
  }

  figcaption {
    margin-bottom: 1.25vh;
  }

  .video {
    margin-bottom: 0;
  }
}
</style>

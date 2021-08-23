<template>
  <client-only>
    <section class="project-page">
      <h1 class="project-page__title" data-splitting="chars">
        <div class="rotate">
          <div class="scale">Problem.studio</div>
        </div>
      </h1>
      <h2 class="project-page__subtitle">A longing for something fun</h2>

      <div class="project-page__project-url">
        <img src="~assets/img/arrow.svg" alt="arrow" />
        <a href="https://problem.studio" target="_blank" rel="noopener noreferrer">
          Open the live website
        </a>
      </div>

      <p class="project-page__description">
        WE FIX YOUR #1 PROBLEM: YOUR WEBSITE IS BORING AF. A coding &amp; animation studio by Rou
        Hun Fan &amp;
        <a href="https://sander.fish" target="_blank" rel="noopener noreferrer">Sander Visser</a>.
        <br />
        A brutalist take on websites mixed with funny animations and interactions.
        <br />
        Because most sites are so boring these days. We longed for something different. An approach
        that makes a different kind of impact.
      </p>

      <figure>
        <figcaption>Fun interactions were the main goal:</figcaption>
        <video
          class="video"
          autoplay
          loop
          muted
          playsinline
          poster="~assets/video/problemstudio/poster.jpg"
        >
          <source src="~assets/video/problemstudio/interaction.mp4" type="video/mp4" />
        </video>
      </figure>

      <h3>page__summary</h3>
      <dl class="project-page__summary">
        <dd>For:</dd>
        <dt><a href="https://problem.studio/">Problem Studio</a></dt>
        <dd>Created:</dd>
        <dt>Static frontend with lots of animations, sounds and tricky styling</dt>
        <dd>Tech:</dd>
        <dt>React, Gatsby, Greensock, Serverless functions, Netlify</dt>
        <dd>Press:</dd>
        <dt>
          <a
            href="https://www.awwwards.com/sites/problem-studio"
            target="_blank"
            rel="noopener noreferrer"
            >Awwwards</a
          >
          <a
            href="https://www.awwwards.com/inspiration/problem-studio-contact-page-emoji-brutalism-interaction"
            target="_blank"
            rel="noopener noreferrer"
            >Brutalism interaction</a
          >
          <a
            href="https://www.awwwards.com/inspiration/whoopee-cushion-sound-interaction-problem-studio"
            target="_blank"
            rel="noopener noreferrer"
            >Whoopie cushion sound interaction</a
          >
        </dt>
      </dl>

      <Footer />
    </section>
  </client-only>
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

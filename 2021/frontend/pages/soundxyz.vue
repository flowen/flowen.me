<template>
  <section class="project-page">
    <h1 class="project-page__title" data-splitting="chars">
      <div class="rotate">
        <div class="scale">sound.xyz</div>
      </div>
    </h1>
    <h2 class="project-page__subtitle">Web3's answer for underpaid Spotify artists</h2>

    <div class="project-page__project-url">
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <a href="https://sound.xyz" target="_blank" rel="noopener noreferrer">
        Open the live website
      </a>
    </div>

    <p class="project-page__description">
      A quick 6 week rendes-vouz working on the launch MVP of sound.xyz.<br />
      Worked on the prelaunch of sound.xyz. The NFT platform for artists to actually earn money vs
      bs Spotify streaming pennies by selling parts of their song as NFTs in which in a
      Soundcloud-manner the owners of the NFT can add a comment.
    </p>

    <figure>
      <figcaption>Previous homepage:</figcaption>
      <video
        class="video"
        autoplay
        loop
        muted
        playsinline
        poster="~assets/video/soundxyz/poster.jpg"
      >
        <source src="~assets/video/soundxyz/soundxyz.mp4" type="video/mp4" />
      </video>
    </figure>

    <h3>page__summary</h3>
    <dl class="project-page__summary">
      <dd>For:</dd>
      <dt><a href="https://sound.xyz/">Sound.xyz</a></dt>
      <dd>Created:</dd>
      <dt>Frontend</dt>
      <dd>Tech:</dd>
      <dt>React, Nextjs, Framer, Typescript</dt>
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

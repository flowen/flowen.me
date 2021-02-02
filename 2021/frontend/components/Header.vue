<template>
  <transition :css="false" appear @enter="enter" @leave="leave">
    <header class="header">
      <h1><a href="/">R&ndash;H&ndash;F</a></h1>
      <nav ref="nav" class="nav">
        <NuxtLink to="/about/" data-a-scale> about</NuxtLink>
        <NuxtLink to="/projects/intheyear2024" data-a-scale>intheyear2024</NuxtLink>
        <br />
        <a data-a-scale to="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me"
          >E-mail</a
        >
        <a data-a-scale to="https://twitter.com/flowen_nl">Twitter</a>
        <a data-a-scale to="https://t.me/flowen">Telegram</a>
      </nav>
    </header>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Header",
  methods: {
    enter: function (el, done) {
      gsap
        .timeline({ onComplete: done })
        .to(el, {
          scale: 1,
        })
        .to(this.$refs.nav.children, {
          scale: 1,
          stagger: 0.05,
        });
      done();
    },
    leave: function (el, done) {
      console.log("leave");
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: z("header");
  position: fixed;
  top: var(--margin);
  right: var(--margin);
  display: flex;
  flex-direction: column;
  text-align: right;

  .nav {
    display: flex;
    flex-direction: column;
  }

  h1 a {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--yellow);
    -webkit-text-stroke-width: 1px;
    margin: 0 0 1vh;
    font-size: clamp(72px, 4.25vw, 104px);
  }

  a {
    color: var(--yellow);
    text-decoration: none;
    font-family: var(--font-title);
    font-size: clamp(12px, 5vw, 24px);
  }
}
</style>

<template>
  <transition :css="false" appear @enter="enter" @beforeleave="leave">
    <header class="header" data-a-scale>
      <h1 ref="title" data-a-split>
        <NuxtLink to="/" class="translate">
          <div class="rotate">
            <div class="scale" v-html="title"></div>
          </div>
        </NuxtLink>
      </h1>

      <nav ref="nav" class="nav">
        <NuxtLink to="/projects/intheyear2024" class="nav__project-link" data-a-scale
          >in the year 2024</NuxtLink
        >
        <br />
        <a
          data-a-scale
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me"
          >E-mail</a
        >
        <a
          data-a-scale
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/flowen_nl"
          >Twitter</a
        >
        <a data-a-scale target="_blank" rel="noopener noreferrer" href="https://t.me/flowen"
          >Telegram</a
        >
        <br />
        <NuxtLink to="/about/" data-a-scale>about</NuxtLink>
      </nav>
    </header>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Header",
  computed: {
    title: function () {
      const text = `R&ndash;H&ndash;F`;

      if (typeof window !== `undefined` || typeof document !== `undefined`) {
        const Splitting = require("splitting");
        return Splitting.html({ content: text, by: "chars" });
      }

      return null;
    },
  },
  methods: {
    enter: function (el, done) {
      gsap
        .timeline({ onComplete: done })
        .delay(0.75)
        .to(el, {
          scale: 1,
        })
        .add(() => this.$refs.title.classList.add("js--show"))
        .to(
          this.$refs.nav.children,
          {
            scale: 1,
            stagger: 0.05,
          },
          "-=.25"
        );
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

    &__project-link {
      font-size: clamp(26px, 5vw, 44px);
    }
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
    font-size: clamp(16px, 5vw, 24px);
    transition: letter-spacing var(--d-slow) var(--ease-out);

    &:hover {
      letter-spacing: 5px;
    }
  }
}
</style>

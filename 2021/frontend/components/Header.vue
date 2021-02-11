<template>
  <transition :css="false" appear @enter="enter" @leave="leave">
    <header class="header" data-a-scale>
      <h1 ref="title" data-splitting="chars">
        <NuxtLink exact to="/" class="rotate">
          <div class="scale" v-html="splitTitle">R&ndash;H&ndash;F</div>
        </NuxtLink>
      </h1>

      <nav ref="nav" class="nav">
        <br />
        <NuxtLink to="/intheyear2024/" class="nav__project-link" data-a-scale
          >intheyear2024.com</NuxtLink
        >
        <NuxtLink to="/theatrejs/" class="nav__project-link" data-a-scale
          >Theatrejs AV demo</NuxtLink
        >
        <br />

        <nuxt-link data-a-scale to="/contact/">contact</nuxt-link>
        <nuxt-link data-a-scale to="/about/">about</nuxt-link>
      </nav>
    </header>
  </transition>
</template>

<script>
import gsap from "gsap";
import charsplitTitle from "@/mixins/charsplitTitle";

export default {
  name: "Header",
  mixins: [charsplitTitle(`R&ndash;H&ndash;F`)],
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
    },
    leave: function (el, done) {
      gsap
        .timeline({ onComplete: done })
        .to(el, {
          scale: 0,
        })
        .to(
          this.$refs.nav.children,
          {
            scale: 0,
            stagger: 0.05,
          },
          "-=.25"
        );
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

    &[aria-current="page"],
    &:hover {
      letter-spacing: 5px;
    }
  }
}
</style>

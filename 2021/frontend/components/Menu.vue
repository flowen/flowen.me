<template>
  <transition :css="false" appear @enter="enter" @leave="leave">
    <nav ref="nav" class="nav">
      <nuxt-link to="/soundxyz/" class="nav__project-link" data-a-scale>sound.xyz</nuxt-link>
      <nuxt-link to="/molabs/" class="nav__project-link" data-a-scale>molabs.ai</nuxt-link>
      <nuxt-link to="/fauxmegle/" class="nav__project-link" data-a-scale>fauxmegle.com</nuxt-link>
      <nuxt-link to="/intheyear2024/" class="nav__project-link" data-a-scale>
        intheyear2024.com
      </nuxt-link>
      <nuxt-link to="/problem-studio/" class="nav__project-link" data-a-scale>
        problem.studio
      </nuxt-link>
      <nuxt-link to="/theatrejs/" class="nav__project-link" data-a-scale>
        Theatrejs AV demo
      </nuxt-link>

      <small class="nav__hint">Select a project</small>

      <br />

      <nuxt-link data-a-scale to="/about/">about</nuxt-link>
      <nuxt-link data-a-scale to="/contact/">contact</nuxt-link>
    </nav>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Menu",
  methods: {
    enter: function (el, done) {
      const navLinks = this.$refs.nav.querySelectorAll("[data-a-scale]");

      gsap
        .timeline({ onComplete: done })
        .delay(0.75)
        .to(el, { scale: 1 })
        .to(navLinks, { scale: 1, stagger: 0.05 }, "-=.25");
    },
    leave: function (el, done) {
      const navLinks = this.$refs.nav.querySelectorAll("[data-a-scale]");

      gsap
        .timeline({ onComplete: done })
        .to(el, { scale: 0 })
        .to(navLinks, { scale: 0, stagger: 0.05 }, "-=.25");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  margin: var(--margin) 0 0;

  &__hint {
    opacity: 0;
    margin: 12px 0 3px;
    text-transform: none;
    animation: blink 1.5s running;
    animation-timing-function: steps(1);
    animation-iteration-count: 3;
    animation-delay: 3s;

    .no-js & {
      opacity: 1;
    }

    @keyframes blink {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    &::after {
      content: "☝️";
      font-size: 18px;
    }
  }

  a {
    color: var(--yellow);
    text-transform: lowercase;
    text-decoration: none;
    font-size: clamp(18px, 5vw, 28px);
    font-family: var(--font-title);

    &::before {
      content: "→";
      display: inline-block;
      vertical-align: 3px;
      font-size: 18px;
      color: var(--off-white);
      opacity: 0;
      transform: translateX(-12px);
      transition: transform var(--d-slow) var(--ease-out), opacity var(--d-slow) var(--ease-out);
    }

    &:hover::before,
    &[aria-current="page"]::before {
      opacity: 1;
      transform: translateX(-6px);
    }
  }
}
</style>

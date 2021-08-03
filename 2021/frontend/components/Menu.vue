<template>
  <transition :css="false" appear @enter="enter" @leave="leave">
    <nav ref="nav" class="nav">
      <br />

      <small class="nav__label">Select a project</small>

      <br />

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
      gsap
        .timeline({ onComplete: done })
        .delay(0.75)
        .to(el, { scale: 1 })
        .to(this.$refs.nav.children, { scale: 1, stagger: 0.05 }, "-=.25");
    },
    leave: function (el, done) {
      gsap
        .timeline({ onComplete: done })
        .to(el, { scale: 0 })
        .to(this.$refs.nav.children, { scale: 0, stagger: 0.05 }, "-=.25");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;

  &__label {
    margin-right: calc(var(--margin) / 2 * -1);
    text-transform: none;

    &::before,
    &::after {
      content: "⭣";
      font-size: 20px;
      vertical-align: -4px;
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

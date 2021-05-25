<template>
  <transition :css="false" appear @enter="enter" @leave="leave">
    <nav ref="nav" class="nav">
      <br />

      <small class="nav__label"
        >Select a project <span role="img" aria-label="down">🔽</span></small
      >
      <nuxt-link to="/fauxmegle/" class="nav__project-link" data-a-scale>fauxmegle.com</nuxt-link>
      <nuxt-link to="/intheyear2024/" class="nav__project-link" data-a-scale>
        intheyear2024.com
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
    text-transform: none;
  }
  &__project-link {
    font-size: clamp(18px, 5vw, 28px);
    text-transform: lowercase;
  }
}
</style>

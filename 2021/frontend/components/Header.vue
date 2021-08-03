<template>
  <transition :css="false" appear @enter="enter" @leave="leave">
    <header class="header" data-a-scale>
      <h1 ref="title" class="title" data-splitting="chars">
        <NuxtLink exact to="/" class="rotate">
          <div class="scale" v-html="splitTitle">R&ndash;H&ndash;F</div>
        </NuxtLink>
      </h1>

      <Menu />
    </header>
  </transition>
</template>

<script>
import gsap from "gsap";
import charsplitTitle from "@/mixins/charsplitTitle";
import Menu from "@/components/Menu";

export default {
  name: "Header",
  components: { Menu },
  mixins: [charsplitTitle(`R&ndash;H&ndash;F`)],
  methods: {
    enter: function (el, done) {
      gsap
        .timeline({ onComplete: done })
        .delay(0.75)
        .to(el, { scale: 1 })
        .add(() => this.$refs.title.classList.add("js--show"));
    },
    leave: function (el, done) {
      gsap.timeline({ onComplete: done }).to(el, { scale: 0 });
    },
  },
};
</script>

<style lang="scss">
.header {
  z-index: z("header");
  position: fixed;
  top: var(--margin);
  right: var(--margin);
  display: flex;
  flex-direction: column;
  text-align: right;

  .title a {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--yellow);
    -webkit-text-stroke-width: 1px;
    margin: 0 0 1vh;
    font-size: clamp(72px, 4.25vw, 104px);
  }
}
</style>

<template>
  <div>
    <MouseCursor />
    <div class="logo">
      <h1>R&ndash;H&ndash;F</h1>
      <nav class="nav">
        <a href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me">E-mail</a>
        <a href="https://twitter.com/flowen_nl">Twitter</a>
        <a href="https://t.me/flowen">Telegram</a>
        <!-- <a href="/projects/">Projects</a>
        <a href="/blog/">Blog</a> -->
      </nav>
    </div>

    <FanStamp />

    <nuxt />
  </div>
</template>

<script>
import FanStamp from "@/components/FanStamp.vue";
import MouseCursor from "@/components/MouseCursor.vue";

export default {
  components: { FanStamp, MouseCursor },
};
</script>

<style lang="scss">
.logo {
  z-index: z("logo");
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

  h1 {
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

.fan-stamp {
  position: fixed;
  right: var(--margin);
  bottom: var(--margin);

  @media screen and (max-width: 599px) {
    display: none;
  }
}
</style>

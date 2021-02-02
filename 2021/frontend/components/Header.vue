<template>
  <header class="header">
    <h1><a href="/">R&ndash;H&ndash;F</a></h1>
    <nav class="nav">
      <NuxtLink to="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me"
        >E-mail</NuxtLink
      >
      <NuxtLink to="https://twitter.com/flowen_nl">Twitter</NuxtLink>
      <NuxtLink to="https://t.me/flowen">Telegram</NuxtLink>
      <NuxtLink to="/projects/">Projects</NuxtLink>
      <NuxtLink to="/projects/intheyear2024">intheyear2024</NuxtLink>
      <NuxtLink to="/about/">about</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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

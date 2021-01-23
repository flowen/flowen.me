<template>
  <main class="main">
    <Intro />
    <!-- <Testimonials />
    <SalesCopy />
    <Projects />
    <ContactHero /> -->
  </main>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Testimonials from "@/components/Testimonials.vue";
import SalesCopy from "@/components/SalesCopy.vue";
import Projects from "@/components/Projects.vue";
import ContactHero from "@/components/ContactHero.vue";

export default {
  nane: "Index",
  components: {
    Intro,
    ContactHero,
    Testimonials,
    SalesCopy,
    Projects,
  }
};
</script>

<style lang="scss" scoped></style>

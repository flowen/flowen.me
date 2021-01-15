<template>
  <main class="main">
    <Header />
    <Footer />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.main {
  @media only screen and (min-width: 1200px) {
    position: relative;
    width: 50%;
  }
}
</style>

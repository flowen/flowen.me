<template>
  <section>
    <ContactHero />
    <FindMe />

    <p>
      A good friend and I also run a small coding studio and
      <a href="https://problem.studio"> we fix problems 💙 in proper fashion </a>. We’re a tiny
      full-stack team that operates on quick scale and with a focus on quality.
    </p>

    <p>
      Campaign &amp; micro-sites, jam-stack, motion and interactivity. I often work in
      multidisciplinary teams to build websites and apps. Involved in all steps of the process, from
      early ideation to release and beyond. Integrating front-end code into backend frameworks or
      headless solutions. I've been told I'm a strong communicator between PM, design and backend
      developers.
    </p>

    <p>I dream in CSS</p>

    <div>
      <a href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me">E-mail</a>
      <a href="https://twitter.com/flowen_nl">Twitter</a>
      <a href="https://linkedin.com/in/flowen">LinkedIn</a>
    </div>

    <FanStamp />
  </section>
</template>

<script>
import ContactHero from "@/components/ContactHero.vue";
import FindMe from "@/components/FindMe.vue";
import FanStamp from "@/components/FanStamp.vue";
export default {
  components: {
    ContactHero,
    FindMe,
    FanStamp,
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="about">
    <Testimonial
      quote="Rou Hun does it all. Armed with a startup mentality. Not only did he design our application, he also assisted us by managing our team of developers, perform Manual frontend-testing and occasionally jumped in the code &amp; styles himself."
      citee="Michael Freund, Lead innovation"
      :citee-image="require('~/assets/img/testimonial-michael.jpg')"
      citee-company="Richner Stutz"
      citee-company-u-r-l="https://richnerstutz.ch/en/"
    />

    <SalesCopy />

    <Testimonial
      quote="Rou Hun is a multi-skilled powerhouse. When I hire him to code the front-end I know I'm saving time on design instructions & decisions. There's no friction in collaboration and he adds extra value to our business and operations this way"
      citee="Daniel Heitz, Cofounder"
      :citee-image="require('~/assets/img/testimonial-daniel.jpg')"
      citee-company="Gebrueders Heitz"
      citee-company-u-r-l="https://gebruederheitz.de/"
    />

    <ContactHero />

    <FanStamp />
  </div>
</template>

<script>
import Testimonial from "~/components/Testimonial.vue";
import SalesCopy from "@/components/SalesCopy.vue";
import ContactHero from "@/components/ContactHero.vue";

import FanStamp from "@/components/FanStamp.vue";

export default {
  components: {
    Testimonial,
    SalesCopy,
    ContactHero,
    FanStamp,
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;

  section,
  .fan-stamp {
    margin: 15vh auto;
  }
}
</style>

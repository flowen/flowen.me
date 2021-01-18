<template>
  <section class="testimonial">
    <h1>Testimonial</h1>

    <div>
      <blockquote class="quote">
        <q>
          {{ quote }}
        </q>

        <cite>
          {{ citee }} @
          <a :href="citeeCompanyURL">{{ citeeCompany }}</a>
        </cite>
      </blockquote>

      <img :src="citeeImage" :alt="citee" />
    </div>

    <!--<div>
      <blockquote class="quote">
        <q>
          Rou Hun does it all. Armed with a startup mentality. Not only did he
          design our application, he also assisted us by managing our team of
          developers, perform Manual frontend-testing and occasionally jumped in
          the code &amp; styles himself.
        </q>

        <cite>
          Michael Freund, Lead innovation @
          <a href="https://richnerstutz.ch/en/">Richner Stutz</a>
        </cite>
      </blockquote>
      <img src="~assets/img/testimonial-michael.jpg" alt="Michael Freund" />
    </div>

     <div>
      <blockquote>
        <q>
          Rou Hun is a multi-skilled powerhouse. When I hire him to code the
          front-end I know I'm saving time on design instructions &amp;
          decisions. There's no friction in collaboration and he adds extra
          value to our business and operations this way
        </q>

        <cite>
          Daniel Heitz, Cofounder @
          <a href="https://gebruederheitz.de">Gebrueders Geheitz</a>
        </cite>
      </blockquote>
      <img src="~assets/img/testimonial-daniel.jpg" alt="Daniel Heitz" />
    </div> -->
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    quote: {
      type: String,
      default: "quote",
      required: true
    },
    citee: {
      type: String,
      default: "citee",
      required: true
    },
    citeeImage: {
      type: String,
      default: "~assets/img/testimonial-michael.jpg",
      required: true
    },
    citeeCompany: {
      type: String,
      default: "citeeCompany",
      required: true
    },
    citeeCompanyURL: {
      type: String,
      default: "https://google.com",
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
}
</style>

<template>
  <section class="testimonial">
    <img
      ref="img"
      class="testimonial__citee-img"
      :src="citeeImage"
      :alt="citee"
      width="80"
      height="80"
    />

    <div>
      <h1 class="testimonial__title" data-splitting="lines">Testimonial</h1>
      <blockquote class="testimonial__blockquote">
        <q data-splitting="lines">{{ quote }}</q>

        <cite>
          {{ citee }} @
          <a target="_blank" rel="noopener noreferrer" :href="citeeCompanyUrl">{{
            citeeCompany
          }}</a>
        </cite>
      </blockquote>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Testimonial",
  props: {
    quote: {
      type: String,
      default: null,
      required: true,
    },
    citee: {
      type: String,
      default: null,
      required: true,
    },
    citeeImage: {
      type: String,
      default: null,
      required: true,
    },
    citeeCompany: {
      type: String,
      default: null,
      required: true,
    },
    citeeCompanyUrl: {
      type: String,
      default: null,
      required: true,
    },
  },
  mounted() {
    const img = this.$refs.img;
    gsap.timeline({ duration: 1 }).to(img, { x: 0, y: 0 }).to(img, { opacity: 1 }, "-=.5");
  },
};
</script>

<style lang="scss">
.testimonial {
  display: grid;
  grid-template-columns: minmax(80px, 120px) minmax(60%, 1fr);
  grid-gap: 2.5vw;
  align-items: center;
  width: clamp(280px, 75vw, 70vw);
  max-width: 840px;
  margin: 5vh auto;

  &__title {
    color: var(--off-white);
  }

  &__citee-img {
    overflow: hidden;
    width: clamp(80px, 10vw, 120px);
    height: clamp(80px, 10vw, 120px);
    margin: 14px;
    border-radius: 100%;
    border: 1px solid #fff;

    transform: translate(-12.5vh, 22.5vw);
    opacity: 0;

    .no-js & {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  &__blockquote {
    q,
    cite {
      display: block;
      margin: 1vh 0;
      font-size: clamp(16px, 5vw, 24px);
    }

    q::before,
    q::after {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 499px) {
    display: block;
  }
}
</style>

<template>
  <section class="testimonial">
    <img class="testimonial__citee-img" :src="citeeImage" :alt="citee" width="80" height="80" />

    <div>
      <h1 class="testimonial__title">Testimonial</h1>
      <blockquote class="testimonial__blockquote">
        <q>
          {{ quote }}
        </q>

        <cite>
          {{ citee }} @
          <a :href="citeeCompanyURL">{{ citeeCompany }}</a>
        </cite>
      </blockquote>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    quote: {
      type: String,
      default: "quote",
      required: true,
    },
    citee: {
      type: String,
      default: "citee",
      required: true,
    },
    citeeImage: {
      type: String,
      default: "",
      required: true,
    },
    citeeCompany: {
      type: String,
      default: "citeeCompany",
      required: true,
    },
    citeeCompanyURL: {
      type: String,
      default: "https://google.com",
      required: true,
    },
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
  margin: 5vh auto;

  &__title {
    color: var(--off-white);
  }

  &__citee-img {
    overflow: hidden;
    width: clamp(80px, 10vw, 120px);
    height: clamp(80px, 10vw, 120px);
    border-radius: 100%;
    border: 1px solid #fff;
  }

  &__blockquote {
    q,
    cite {
      display: block;
      margin: 1vh 0;
      font-size: clamp(16px, 5vw, 24px);
    }
  }

  @media screen and (max-width: 499px) {
    display: block;
  }
}
</style>

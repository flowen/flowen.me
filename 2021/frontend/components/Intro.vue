<template>
  <section class="intro">
    <div class="logo">
      <h1>R&ndash;H&ndash;F</h1>
      <a href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me"
        >E-mail</a
      >
      <a href="https://twitter.com/flowen_nl">twitter</a>
    </div>

    <p class="about h1">
      ROUHUN FAN <small>works as a</small> <br />
      Freelance developer <small>specialized in </small> <br />
      Frontend - Animation - Interaction <br />
      and loves to work with agencies, studios <small>anywhere</small><br />
      and individuals all over the world
    </p>

    <div class="availability h1">15.01.2021 <small>availability</small></div>

    <figure class="climbing">
      <img src="~assets/img/climbing.jpg" alt="Climbing" />

      <figcaption>
        Hi
      </figcaption>
    </figure>

    <FanStamp />
  </section>
</template>

<script>
import FanStamp from "@/components/FanStamp.vue";

export default {
  components: { FanStamp }
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  margin: 10px 10px 30vh;
  min-height: 98vh;

  > * {
    position: absolute;
  }

  h1,
  .h1 {
    font-size: clamp(44px, 4.25vw, 72px);
  }

  small {
    font-size: clamp(12px, 5vw, 24px);
    text-transform: lowercase;
  }

  .fan-stamp {
    @media screen and (max-width: 599px) {
      display: none;
    }
  }
}

.logo {
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: right;

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

.about {
  z-index: z("intro-about");
  left: 0;
  bottom: 0;
  margin-bottom: 0;
}

.availability h1 {
  position: absolute;
  font-family: var(--font-title);
  color: var(--yellow);
}

.climbing {
  z-index: z("intro-climbing");
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);

  .figcaption {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

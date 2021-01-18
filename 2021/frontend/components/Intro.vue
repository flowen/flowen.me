<template>
  <section class="intro">
    <p class="about h1">
      RouHun Fan <small>works as a</small> <br />
      Freelance developer <small>specialized in </small> <br />
      Frontend - Animation - Interaction <br />
      and loves to work with agencies, studios <small>anywhere</small><br />
      and individuals all over the world.
    </p>

    <div class="availability h1">Availability <small>from</small> 1 feb</div>

    <figure class="climbing">
      <img src="~assets/img/climbing.jpg" alt="Climbing" width="590" height="394" />

      <figcaption class="chats">Hi</figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chats: ["hi", "Always reaching for the top", "yo", "climb w me", "its lonely at the top"],
    };
  },
  created() {
    // use gsap text plugin to animate per character for the chats array
  },
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  margin: var(--margin);
  height: calc(var(--wh) - var(--margin) * 2);
  display: flex;
  justify-content: center;

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
}

.about {
  z-index: z("intro-about");
  left: 0;
  bottom: 0;
  margin-bottom: 0;
}

.availability {
  top: 0;
  left: 0;
  h1 {
    font-family: var(--font-title);
    color: var(--yellow);
  }
}

.climbing {
  z-index: z("intro-climbing");
  position: relative;
  max-width: 50%;
  margin-top: 15vh;

  img {
    transform: rotate(-7deg);
  }

  figcaption {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    color: var(--magenta);
  }
}
</style>

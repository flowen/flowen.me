<template>
  <section class="intro">
    <div class="logo">
      <h1>R&ndash;H&ndash;F</h1>
      <nav class="nav">
        <a href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me">E-mail</a>
        <a href="https://twitter.com/flowen_nl">Twitter</a>
        <a href="https://t.me/flowen">Telegram</a>
        <!-- <a href="/projects/">Projects</a>
        <a href="/blog/">Blog</a> -->
      </nav>
    </div>

    <p class="about h1">
      RouHun Fan <small>works as a</small> <br />
      Freelance developer <small>specialized in </small> <br />
      Frontend - Animation - Interaction <br />
      and loves to work with agencies, studios <small>anywhere</small><br />
      and individuals all over the world
    </p>

    <div class="availability h1">15.01.2021 <small>availability</small></div>

    <figure class="climbing">
      <img src="~assets/img/climbing.jpg" alt="Climbing" width="590" height="394" />

      <figcaption class="speakin">
        Hi
      </figcaption>
    </figure>

    <FanStamp />
  </section>
</template>

<script>
import FanStamp from "@/components/FanStamp.vue";

export default {
  components: { FanStamp },
  data() {
    return {
      chats: ["hi", "Always reaching for the top", "yo", "climb w me", "its lonely at the top"]
    };
  },
  created() {
    // use gsap text plugin to animate per character for the chats array
  }
};
</script>

<style lang="scss" scoped>
.intro {
  --margin: 2.5vw;
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

  .fan-stamp {
    @media screen and (max-width: 599px) {
      display: none;
    }
  }
}

.logo {
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

.fan-stamp {
  right: 0;
  bottom: 0;
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

<template>
  <section class="intro">
    <p class="about h1" data-animation>
      RouHun Fan <small>works as a</small> <br />
      Freelance developer <small>specialized in </small> <br />
      Frontend - Animation - Interaction <br />
      and loves to work with agencies, studios <small>anywhere</small><br />
      and individuals all over the world.
    </p>

    <div class="availability h1">Availability <small>from</small> 1 feb</div>

    <div class="climbing">
      <img src="~assets/img/climbing.jpg" alt="Climbing" width="590" height="394" />

      <div ref="chatting" class="chatting"></div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  data() {
    return {
      chats: [
        "hi",
        "Always reach for the top, as they say",
        "yolo",
        "climb w me",
        "its lonely at the top",
      ],
      masterTL: gsap.timeline({ repeat: -1, paused: true, ease: "linear" }),
    };
  },
  beforeMount() {
    if (process.client) {
      gsap.registerPlugin(TextPlugin);
    }
  },
  mounted() {
    const domChat = this.$refs.chatting;

    this.chats.forEach((chat) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });

      tl.to(domChat, chat.length * 0.1, {
        text: chat,
      });
      this.masterTL.add(tl);
    });

    gsap.to(domChat, 0.3, {
      delay: 1,
      opacity: 1,
      onComplete: () => this.masterTL.play(),
    });
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
    font-size: clamp(22px, 4.25vw, 72px);
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

  .chatting {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0) rotate(-7deg);
    color: var(--magenta);
    opacity: 0;
    text-align: center;
  }
}
</style>

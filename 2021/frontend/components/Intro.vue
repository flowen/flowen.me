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
        "Hi, I 💙 helping businesses with code &amp; design",
        "Rou Hun is pronounced as Lowen",
        "🏔👨‍💻🚂🏋🈯✍️🐈🎧☕🥩",
        "It's lonely at the top #messageme",
        "BTC to da moooooooon!~~",
        "📍 Birmingham",
        "Been working remotely the last 5+ years",
        "Where's my Bitcoin Emoji?",
        "Yolo means Yo Lo(wen) to me",
      ],
      masterTL: gsap.timeline({ repeat: -1, paused: true }),
    };
  },
  beforeMount() {
    if (process.client) {
      gsap.registerPlugin(TextPlugin);
    }
  },
  mounted() {
    const availability = document.querySelector(".availability");
    const about = document.querySelector(".about");
    const climbing = document.querySelector(".climbing");

    gsap.set(availability, { scale: 0 });
    gsap.set(about, { scale: 0 });
    gsap.set(climbing, { rotate: -14.4, scale: 0 });

    gsap
      .timeline({ onComplete: () => this.masterTL.play() })
      .delay(0.3)
      .to(availability, {
        duration: 0.35,
        ease: "power2.out",
        rotate: 0,
        scale: 1,
      })
      .to(
        about,
        {
          duration: 0.35,
          ease: "power2.out",
          rotate: 0,
          scale: 1,
        },
        "-=.2"
      )
      .to(
        climbing,
        {
          duration: 0.35,
          ease: "power2.out",
          rotate: 0,
          scale: 1,
        },
        "-=.2.5"
      );

    const domChat = this.$refs.chatting;

    this.chats.forEach((chat) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2, ease: "none" });

      tl.to(domChat, chat.length * 0.05, {
        text: chat,
      });
      this.masterTL.add(tl);
    });

    gsap.to(domChat, 0.25, {
      delay: 0.7,
      opacity: 1,
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
    font-size: clamp(22px, 7.25vh, 62px);
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
  max-width: 80%;
  margin-top: 8vh;

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

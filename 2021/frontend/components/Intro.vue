<template>
  <transition
    :css="false"
    appear
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <section class="intro">
      <p ref="about" class="about h1" data-a-scale>
        RouHun Fan <small>works as a</small> <br />
        Freelance developer <small>specialized in </small> <br />
        Frontend - Animation - Interaction <br />
        and loves to work with agencies, studios <small>anywhere</small><br />
        and individuals all over the world.
      </p>

      <div ref="availability" class="availability h1" data-a-scale>
        Availability <small>from</small> 1 feb
      </div>

      <div class="climbing">
        <img ref="me" src="~assets/img/climbing.jpg" alt="Climbing" width="590" height="394" />

        <div ref="chatting" class="chatting"></div>
      </div>
    </section>
  </transition>
</template>

<script>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  data() {
    return {
      chats: [
        "Hi, I 💙 helping businesses with code &amp; design",
        "Rou Hun <br> is pronounced as <br> Lo wen",
        "This site is W.I.P. ad infinitum",
        "🏔👨‍💻🚂🏋🈯✍️🐈🎧☕🥩",
        "It's lonely at the top #messageme",
        "BTC to da moooooooon!~~",
        "📍 Birmingham, UK & Utrecht, NL",
        "Been working remotely the last 5+ years",
        "Where's my Bitcoin Emoji?",
        "'Yo Lo' is how some peeps greet me",
        "Bottom right is my family's namestamp: Fan",
      ],
      masterTL: gsap.timeline({ repeat: -1, paused: true }),
    };
  },
  beforeMount() {
    if (process.client) {
      gsap.registerPlugin(TextPlugin);
    }
  },
  methods: {
    beforeLeave: function (el) {
      console.log("beforeLeave");
    },
    afterLeave: function (el) {
      console.log("afterLeave");
    },
    leaveCancelled: function (el) {
      console.log("leaveCancelled");
    },
    leave: function (el, done) {
      console.log("leave");
      this.masterTL.kill();

      const availability = this.$refs.availability;
      const about = this.$refs.about;
      const me = this.$refs.me;

      gsap
        .timeline({ onComplete: done })
        .to(availability, {
          rotate: -14.4,
          scale: 0,
        })
        .to(
          about,
          {
            rotate: -14.4,
            scale: 0,
          },
          "-=.2"
        )
        .to(
          me,
          {
            rotate: -14.4,
            scale: 0,
          },
          "-=.2.5"
        );
    },
    enter: function (el, done) {
      const availability = this.$refs.availability;
      const about = this.$refs.about;
      const me = this.$refs.me;

      gsap
        .timeline({
          onComplete: () => {
            setTimeout(() => {
              this.masterTL.play();
              done();
            }, 200);
          },
        })
        .delay(0.3)
        .to(availability, {
          rotate: 0,
          scale: 1,
        })
        .to(
          about,
          {
            rotate: 0,
            scale: 1,
          },
          "-=.2"
        )
        .to(
          me,
          {
            rotate: -14.4,
            y: 0,
          },
          "-=.7"
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
  },
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  margin: var(--margin);
  height: calc(var(--wh) - var(--margin) * 2);
  display: flex;

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
  width: 50vw;
  max-width: 80%;
  margin: 8vh auto;

  img {
    width: 100%;
    transform: rotate(0) translateY(200vh);

    .no-js & {
      transform: translateY(0);
    }
  }

  .chatting {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0) rotate(-7deg);
    color: var(--magenta);
    opacity: 0;
    text-align: center;
    font-size: clamp(18px, 5vw, 24px);
    font-weight: 800;
  }
}

@media screen and (max-width: 499px) {
  .intro {
    h1,
    .h1 {
      font-size: clamp(18px, 7.25vh, 24px);
    }
  }
}
</style>

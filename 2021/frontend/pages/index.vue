<template>
  <main class="main">
    <section class="intro">
      <p class="intro__about h1" data-a-scale>
        RouHun Fan <small>works 10+ years as a </small> <br />
        Freelance developer <small>specialized in </small> <br />
        Frontend - Animation - Interaction <small>💙</small><br />
        and loves to work with agencies, studios <small>remotely</small><br />
        and individuals all over the world. <small>🌍</small>
      </p>

      <div class="intro__availability h1" data-a-scale>Availability <small>from</small> 1 June</div>

      <div class="intro__climbing">
        <img
          ref="me"
          class="intro__me"
          src="~assets/img/climbing.jpg"
          alt="Climbing"
          width="590"
          height="394"
        />

        <div class="intro__chatting"></div>
      </div>
    </section>
  </main>
</template>

<script>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      const availability = el.querySelector(".intro__availability");
      const about = el.querySelector(".intro__about");
      const me = el.querySelector(".intro__me");

      gsap
        .timeline({
          onComplete: () => {
            setTimeout(() => {
              masterTL.play();
              done();
            }, 200);
          },
        })
        .delay(0.3)
        .to(availability, { rotate: 0, scale: 1 })
        .to(about, { rotate: 0, scale: 1 }, "-=.2")
        .to(me, { rotate: -14.4, y: 0 }, "-=.7");

      const domChat = el.querySelector(".intro__chatting");
      const masterTL = gsap.timeline({ repeat: -1, paused: true });
      const chats = [
        "Hi, I 💙 helping businesses with code &amp; design",
        "Rou Hun <br> is pronounced as <br> LoWen",
        "📍 Birmingham, UK & Utrecht, NL",
        "🏔👨‍💻🚂🏋🈯✍️🐈🎧☕🥩",
        "It's lonely at the top #messageme",
        "Been working remotely the last 5+ years",
        "Bottom right is my family's namestamp: Fan",
        "BTC to da moooooooon!~~",
      ];

      chats.forEach((chat) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2, ease: "none" });

        tl.to(domChat, chat.length * 0.05, {
          text: chat,
        });
        masterTL.add(tl);
      });

      gsap.to(domChat, 0.25, {
        delay: 0.7,
        opacity: 1,
      });
    },
    leave: function (el, done) {
      const availability = el.querySelector(".intro__availability");
      const about = el.querySelector(".intro__about");
      const climbing = el.querySelector(".intro__climbing");

      gsap
        .timeline({ defaults: { ease: "power4.in" }, onComplete: done })
        .addLabel("start")
        .to(availability, { scale: 0 }, "start")
        .to(about, { scale: 0 }, "start")
        .to(climbing, { y: "-100vh" }, "start+=.2");
    },
  },
  beforeMount() {
    if (process.client) {
      gsap.registerPlugin(TextPlugin);
    }
  },
};
</script>

<style lang="scss">
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
    --min: 22px;
    --max: 72px;
    font-size: clamp(var(--min), 6.5vw, var(--max));

    @media (max-aspect-ratio: 3/5) {
      font-size: 36px;
    }
  }

  small {
    font-size: clamp(12px, 5vw, 24px);
    text-transform: lowercase;
  }
}

.intro__about {
  z-index: z("intro-about");
  left: 0;
  bottom: 0;
  margin-bottom: 0;
  mix-blend-mode: exclusion;
}

.intro__availability {
  top: 0;
  left: 0;

  h1 {
    font-family: var(--font-title);
    color: var(--yellow);
  }
}

.intro__climbing {
  z-index: z("intro-climbing");
  position: relative;
  width: 50vw;
  max-width: 80%;
  margin: 8vh auto;

  @media (max-aspect-ratio: 1000/1414) {
    width: 100%;
    margin-top: 20vh;
  }

  img {
    width: 100%;
    transform: rotate(0) translateY(200vh);

    .no-js & {
      transform: translateY(0);
    }
  }
}

.intro__chatting {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0) rotate(-14.4deg);
  color: var(--magenta);
  opacity: 0;
  text-align: center;
  font-size: clamp(12px, 2.5vw, 24px);
  font-weight: 600;
  width: 80%;
}
</style>

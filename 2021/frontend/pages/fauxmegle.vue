<template>
  <client-only>
    <section class="project-page">
      <h1 class="project-page__title" data-splitting="chars">
        <div class="rotate">
          <div class="scale">Drop #46: fauxmegle.com</div>
        </div>
      </h1>
      <h2 class="project-page__subtitle">Made for MSCHF</h2>

      <div class="project-page__project-url">
        <img src="~assets/img/arrow.svg" alt="arrow" />
        <a href="https://fauxmegle.com" target="_blank" rel="noopener noreferrer">
          Open the live website
        </a>
      </div>

      <p class="project-page__description">
        In the universe of the modern internet, the shitty metaverse in which we live our lives,
        clout is the equivalent of a natural resource. It is both commodity and currency. By this
        same token, celebrities function like mines or natural mineral deposits: they are sources of
        clout that can be tapped via proximity. As a guy* on the internet once said: move content
        from one platform to another; get famous. Celebrity encounters are pseudo-chance occurrences
        that can (and must!) be leveraged. When we encounter a celebrity we are compelled to post
        video or screenshots of the encounter far and wide, to shout at the top of our lungs that
        fame has rubbed off on us, and by our action to make it in some small way true. The labor of
        clout production is the process of finding content in the wild. Omegle is Pokemon Snap,
        where Pikachu is an influencer, and the Tall Grass is a waving sea of genitalia.
      </p>

      <figure>
        <figcaption>This is not an advert:</figcaption>
        <video
          class="video"
          autoplay
          loop
          muted
          playsinline
          poster="~assets/video/fauxmegle/poster.jpg"
        >
          <source src="~assets/video/fauxmegle/fauxmegle.mp4" type="video/mp4" />
        </video>
      </figure>

      <p>
        A MILLION YEARS AGO PEOPLE LAMENTED THAT REAL LIFE HAD BECOME A PERFORMANCE DONE PURELY AS
        THE GROUNDWORK FOR THE ONLINE REPRESENTATION OF THAT LIFE. TODAY, WITH OUR BRAINS GROWN
        LARGE ENOUGH TO SIT ON, OUR ACTIONS ONLINE ARE ALSO A PERFORMANCE DONE FOR THE PURPOSE OF
        ONLINE RE-PRESENTATION. AS A PARTING THOUGHT, LET US MARVEL AT THE LASTING APPEAL OF JANKY
        WEB PLATFORMS. HOW DID OMEGLE SURVIVE TO FIND NEW LIFE WITH A NEW GENERATION, WHEN CHAT
        ROULETTE AND SO MANY OTHER RANDOM CONNECTION PLATFORMS OF SIMILAR PREMISE FELL BY THE
        WAYSIDE? CLEARLY THIS IS NOT THE PRODUCT OF FINESSE OR UNIQUE CAPABILITY. THE SITE WAS
        CREATED BY A TEENAGER IN THE LATE AUGHTS, AND LOOKS AND FEELS EXACTLY AS IT ALWAYS DID: LIKE
        A WEBSITE CREATED BY A TEENAGER IN THE LATE AUGHTS. AND YET HERE IT IS, THE WILDS IN WHICH
        TIKTOK CONTENT IS BORN. FAUXMEGLE IS MSCHF DROP #46. *

        <br /><br />
        * fauxmegle.com manifesto
      </p>

      <h3>page__summary</h3>
      <dl class="project-page__summary">
        <dd>For:</dd>
        <dt>
          <a href="https://mschf.com/fauxmegle" target="_blank" rel="noopener noreferrer">MSCHF</a>
        </dt>
        <dd>Created:</dd>
        <dt>Static frontend in Nuxt</dt>
        <dd>Tech:</dd>
        <dt>Vue, Nuxt, styling web 1.0 websites is hard</dt>
      </dl>

      <Footer />
    </section>
  </client-only>
</template>

<script>
import Footer from "@/components/Footer";
import mountSplitting from "@/mixins/mountSplitting";
import gsap from "gsap";

export default {
  name: "Fauxmegle",
  components: { Footer },
  mixins: [mountSplitting],
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      const title = el.querySelector(".project-page__title");

      gsap
        .timeline({ onComplete: done })
        .addLabel("start")
        .to(el, { opacity: 1 }, "start")
        .to(el, { duration: 1.5, y: 0 }, "start")
        .add(() => title.classList.add("js--show"), "-=1");
    },
    leave: function (el, done) {
      const video = el.querySelector(".video");
      video.pause();

      gsap.timeline({ onComplete: done }).to(el, {
        duration: 1.5,
        ease: "power4.in",
        yPercent: -100,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
figcaption {
  margin-bottom: 0;
}
</style>

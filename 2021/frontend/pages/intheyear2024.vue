<template>
  <section class="project-page">
    <h1 class="project-page__title" data-splitting="chars">
      <div class="rotate">
        <div class="scale">Drop #38: In the year 2024</div>
      </div>
    </h1>
    <h2 class="project-page__subtitle">Made for MSCHF</h2>

    <div class="project-page__project-url">
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <a href="https://intheyear2024.com" target="_blank" rel="noopener noreferrer">
        Open the live website
      </a>
    </div>

    <p class="project-page__description">
      A crowd-sourced domain-squatting webshop. Visitors were able to buy shares of a squatted
      domain for $1 per share with a 100 shares per URL. This is just one of the many crazy concepts
      MSCHF creates and I was honored to build it for them this time.<br />
      MSCHF releases (a drop) every 2 weeks and thus work in a high-pressure environment. I was
      asked to create the frontend in a week and a custom backend in another. Although I had my
      doubts if I could do it, with some help in the form of boiler-code, I preceeded to continue
      and the immense pressure actually helped me achieve to build a custom backend &ndash;
      something I don't usually do &ndash; within a a week with AWS (notably DynamoDB, Lambda
      functions and Stripe) that I had never worked with before.
      <br /><br />

      Unfortunately, due to company registration, we were unable to get a Stripe API key.
      Last-minute the shop was changed to Shopify. The backend was now used to manage the frontend
      sold-out states manually. The shares were all soldout in 45min and had tops ±5000 visitors
      realtime on the site.
    </p>

    <figure>
      <figcaption>k k, just 1 for teh layouts:</figcaption>
      <video class="video" autoplay loop muted playsinline>
        <source src="~assets/video/intheyear2024/mschf.mp4" type="video/mp4" />
      </video>
    </figure>

    <h3>page__summary</h3>
    <dl class="project-page__summary">
      <dd>For:</dd>
      <dt><a href="https://mschf.xyz">MSCHF</a></dt>
      <dd>Created:</dd>
      <dt>Static frontend with custom backend and payment system</dt>
      <dd>Tech:</dd>
      <dt>Vue, Nuxt, AWS, DynamoDB, Lambda fn, S3 buckets, Stripe Checkout</dt>
      <dd>Press:</dd>
      <dt>
        <a
          href="https://mashable.com/article/mschf-in-the-year-2024-election-campaign-domain-squatting"
          target="_blank"
          rel="noopener noreferrer"
          >Mashable</a
        >
        <a
          href="https://www.forbes.com/sites/curtissilver/2021/01/25/in-the-year-2024-these-domains-might-get-you-paid/"
          target="_blank"
          rel="noopener noreferrer"
          >Forbes</a
        >
        <a
          href="https://domainnamewire.com/2021/01/26/mschfs-latest-marketing-stunt-uses-domain-names-to-target-presidential-candidates/"
          target="_blank"
          rel="noopener noreferrer"
          >Domainname wire</a
        >
        <a
          href="https://www.dailydot.com/debug/mschf-in-the-year-2024/"
          target="_blank"
          rel="noopener noreferrer"
          >Daily dot</a
        >
      </dt>
    </dl>

    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/Footer";
import mountSplitting from "@/mixins/mountSplitting";
import gsap from "gsap";

export default {
  name: "Intheyear2024",
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
.project-page {
  transform: translateY(200vh);

  .no-js & {
    transform: translateY(0);
  }
}
figcaption {
  margin-bottom: 1.25vh;
}
</style>

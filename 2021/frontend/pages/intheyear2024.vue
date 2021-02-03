<template>
  <section class="project-page">
    <h1 class="project-page__title" data-a-split data-splitting="chars">
      <div class="rotate">
        <div class="scale">Drop #38: In the year 2024</div>
      </div>
    </h1>
    <h2 class="project-page__subtitle">Made for MSCHF</h2>

    <div class="project-page__project-url">
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <a href="https://intheyear2024.com" target="_blank" rel="noopener noreferrer"
        >I can post screenshots &amp; videos, but it's best you see the actual product live</a
      >
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
      <figcaption>k k, just 1 for layout's sake:</figcaption>
      <video class="video" autoplay loop muted plays-inline>
        <source src="~assets/img/intheyear2024/mschf.mp4" type="video/mp4" />
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
      </dt>
    </dl>

    <p>Still working on this website, expect more work to come soon or else hit me up!</p>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Intheyear2024",
  scrollToTop: true,
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      const title = el.querySelector(".project-page__title");
      gsap
        .timeline({ onComplete: done })
        .addLabel("start")
        .to(
          el,
          {
            opacity: 1,
          },
          "start"
        )
        .to(
          el,
          {
            duration: 1.5,
            y: 0,
          },
          "start"
        )
        .add(() => title.classList.add("js--show"), "-=1");
    },
    leave: function (el, done) {
      gsap.timeline({ onComplete: done }).to(el, {
        duration: 1,
        yPercent: -50,
        opacity: 0,
      });
    },
  },
  mounted() {
    if (typeof window !== `undefined` || typeof document !== `undefined`) {
      const Splitting = require("splitting");
      Splitting();
    }
  },
};
</script>

<style lang="scss" scoped>
.project-page {
  opacity: 0;
  transform: translateY(200vh);

  .no-js & {
    opacity: 1;
    transform: translateY(0);
  }
}
figcaption {
  margin-bottom: 1.25vh;
}
</style>

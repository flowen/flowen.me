<template>
  <section class="project-page">
    <h1 class="project-page__title">In the year 2024</h1>
    <h2 class="project-page__subtitle">Made for MSCHF</h2>

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

    <!-- <NuxtLink to="/projects/intheyear2024">intheyear 2024</NuxtLink>
    <NuxtLink to="/projects/theatrejs">Theatre.js</NuxtLink>
    <NuxtLink to="/projects/jaarbeurs">Jaarbeurs</NuxtLink>
    <NuxtLink to="/projects/mirabeau">Mirabeau</NuxtLink>
    <NuxtLink to="/projects/principlesofwealth">principlesofwealth</NuxtLink> -->
  </section>
</template>

<script>
export default {
  name: "Intheyear2024",
  // head() {},
  // scrollToTop: true
};
</script>

<style lang="scss">
.project-page {
  &__description {
  }

  &__summary {
  }
}
</style>

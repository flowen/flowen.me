<template>
  <section class="yes-this-is-my-sales-copy-my-fellow-dev">
    <article>
      <p>
        Perhaps You’re not sure why these popular frameworks like React, Vue, etc. are necessary for
        your business goals?
      </p>
      <p>Find animations beautiful but you’re unable to justify its costs?</p>

      <p>Struggling to communicate your business goals to a (team of) developer(s)?</p>

      <p>
        Not sure if the quality of the interface of your new app is as good as you’re being told?
      </p>

      <p>Need an assessment or looking for unbiased, nonpartisan advice?</p>

      <p>You're in luck. <a href="">That's exactly what I can help you with.</a></p>
    </article>

    <figure>
      <img src="~assets/img/sweatin-in-taiwan.jpg" alt="Sweatin in Taiwan" />
      <figcaption>Sweatin’ my ass off, hoping I'm in symmetry</figcaption>
    </figure>
  </section>
</template>

<style lang="scss" scoped>
.yes-this-is-my-sales-copy-my-fellow-dev {
  display: flex;
  justify-content: center;
  align-items: center;
}

article {
  position: relative;
  z-index: z("copy");
  width: clamp(300px, 50vw, 650px);
  margin-left: -10vw;
  padding-right: 5vw;
  font-size: clamp(16px, 4vw, 24px);

  a {
    color: var(--off-white);
  }
}

figure {
  order: -1;
  width: 55vw;
  margin: 0 0 0 5vw;
  transform: rotate(-4.21deg);
}

img {
  margin: 0 0 2.5vh;
}

figcaption {
  font-size: 11px;
}
</style>

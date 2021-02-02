<template>
  <section class="contact-hero">
    <figure>
      <img src="~assets/img/creative-coder-hero.jpg" alt="Creative coding visuals nerd hero" />
    </figure>

    <div>
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <p>
        Let me solve your <br />
        design and frontend <br />
        challenges.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-hero {
  display: flex;
  justify-content: center;
  align-items: center;

  figure {
    margin: 0 5vw 0 0;

    img {
      max-width: 40vw;
      transform: rotate(-7.62deg);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 -5vw;
  }

  p {
    margin: 0 0 0 2.5vw;
    font-family: var(--font-title);
    font-size: clamp(24px, 8vw, 72px);
    color: var(--yellow);
  }
}
</style>

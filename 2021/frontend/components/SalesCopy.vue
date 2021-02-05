<template>
  <section class="yes-this-is-my-sales-copy-my-fellow-dev">
    <article>
      <p>
        Perhaps You’re not sure why these popular frameworks like React, Vue, etc. are necessary for
        your business goals?
      </p>

      <p>Find animations beautiful but you’re unable to justify its costs?</p>

      <p>Struggling to communicate your business goals to a (team of) developer(s)?</p>

      <p>Need an assessment or looking for unbiased, nonpartisan advice?</p>

      <p>Or just looking for an addition to your team on design and frontend?</p>

      <p>
        You're in luck.
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me?subject=[inquiry for work]&body=Tell me about your project in 3 sentences: %0D%0A%0D%0ATell me when you consider your project a success: %0D%0A%0D%0ADo you have wireframes, designs, other assets ready? %0D%0A%0D%0AHow did you find me:"
        >
          Let me help you out.
        </a>

        <br />
        <br />

        <small>
          ps: I give a 10% discount when paid in bitcoin. Would love to work with any
          crypto-startups.
        </small>
      </p>
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

  @media screen and (max-width: 499px) {
    display: block;
  }
}

article {
  position: relative;
  z-index: z("copy");
  width: clamp(300px, 50vw, 650px);
  margin-left: -15vw;
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

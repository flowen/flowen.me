<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="mailto:b34ff8ed-85b6-49ff-877f-c72d181b4396@flowen.anonaddy.me?subject=[inquiry for work]&body=Tell me about your project in 3 sentences: %0D%0A%0D%0ATell me when you consider your project a success: %0D%0A%0D%0ADo you have wireframes, designs, other assets ready? %0D%0A%0D%0AHow did you find me:"
    class="contact-hero"
  >
    <figure>
      <img src="~assets/img/creative-coder-hero.jpg" alt="Creative coding visuals nerd hero" />
    </figure>

    <div>
      <img src="~assets/img/arrow.svg" alt="arrow" />
      <p>
        E-mail me and let me solve <br />
        your design and <br />
        frontend challenges.
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.contact-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    figure {
      img {
        transform: rotate(-4deg);
      }
    }

    div {
      transform: translateX(10px);
    }
  }

  figure {
    margin: 0 5vw 0 0;

    img {
      max-width: 40vw;
      transform: rotate(-7.62deg);
      transition: transform var(--d-normal) var(--ease-in-out);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 -5vw;
    transition: transform var(--d-normal) var(--ease-in-out);
  }

  p {
    margin: 0 0 0 2.5vw;
    font-family: var(--font-title);
    font-size: clamp(24px, 8vw, 72px);
    color: var(--yellow);
  }

  a {
    transition: letter-spacing var(--d-slow) var(--ease-out);
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>

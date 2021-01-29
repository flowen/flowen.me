<template>
  <div class="experiments">
    <input class="toggle" type="checkbox" />
    <div class="title" data-animation>
      <div class="translate">
        <div class="rotate">
          <div class="scale" v-html="title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiment",
  computed: {
    title: function () {
      const text = `Rou Hun Fan <br> Developer`;

      if (typeof window !== `undefined` || typeof document !== `undefined`) {
        const Splitting = require("splitting");
        return Splitting.html({ content: text, by: "chars" });
      }

      return null;
    },
  },
};
</script>

<style lang="scss">
.experiments {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.toggle {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  width: 20px;
  height: 20px;
}

[data-animation] {
  --multi: 0.5s;
  --tsa: 0;
  --sat: 0%;
  --lgt: 0%;
  font-size: 12vw;
  font-family: var(--font-title);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--yellow);
  -webkit-text-stroke-width: 1px;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 var(--tsa) hsl(61, var(--sat), var(--lgt));
  transition: text-shadow 10s var(--ease-out);

  .char {
    display: inline-block;
    transform: scale(0);
    transform-origin: center center;
    animation-delay: calc(var(--char-index) * 0.035s);
  }
}

.toggle:checked + [data-animation] {
  --sat: 84%;
  --lgt: 68%;
  --tsa: 5vw;

  .char {
    animation-play-state: running;
    animation-fill-mode: forwards;
  }

  .rotate {
    animation: rotate calc(0.1s + var(--multi)) ease-out forwards;
    animation-delay: calc(var(--char-index) * 0.035s);
  }

  .scale .char {
    animation: scale calc(0.2s + var(--multi)) ease-out forwards;
    animation-delay: calc(var(--char-index) * 0.035s);
    transform-origin: center bottom;

    &:nth-child(4),
    &:nth-child(6) {
      animation-duration: 0.4s;
    }
    &:nth-child(3),
    &:nth-child(7) {
      animation-duration: 0.2s;
    }
  }

  .translate {
    animation: translate 0.2s ease-out infinite alternate paused;
    animation-delay: calc(var(--char-index) * 0.035s);
  }
}

@keyframes translate {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(-15%, -30%);
  }
  40% {
    transform: translate(-23%, -21%);
  }
  80% {
    transform: translate(6%, -2%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  30% {
    transform: rotate(7deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  70% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes scale {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(0.1);
  }
  70% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>

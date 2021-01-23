<template>
  <div class="experiments">
    <input class="toggle" type="checkbox" />
    <div class="cyberpunk">
      <div class="translate">
        <div class="rotate">
          <div class="scale" v-html="cyberpunk"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiment",
  computed: {
    cyberpunk: function () {
      const text = `Cyberpunk`;

      if (typeof window !== `undefined` || typeof document !== `undefined`) {
        const Splitting = require("splitting");
        return Splitting.html({ content: text, by: "chars" });
      }

      return null;
    },
  },
};
</script>

<style>
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

.cyberpunk {
  --multi: 0.5s;
  --sat: 0%;
  --lgt: 0%;
  font-size: 35vw;
  font-family: var(--font-title);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px var(--yellow);
  -webkit-text-stroke-width: 5px;
  text-transform: uppercase;
  text-shadow: 0 0 5vw hsl(61, var(--sat), var(--lgt));
  transition: text-shadow var(--slowest) var(--ease-out);
}

.cyberpunk .char {
  /* --scale: 1;
  --translate-x: 0;
  --translate-y: 0;
  --rot: 0deg;

  transition: transform 0.5s ease-in-out;
  transition-delay: calc(var(--char-index) * 0.035s);
  transform: translate(var(--translate-x), var(--translate-y)) rotate(var(--rot))
  scale(var(--scale)); */
  display: inline-block;
  transform-origin: center center;
  animation-delay: calc(var(--char-index) * 0.035s);
}

.toggle + .cyberpunk .char {
  transform: scale(0);
}

.toggle:checked + .cyberpunk {
  --sat: 84%;
  --lgt: 68%;
}

.toggle:checked + .cyberpunk .char {
  animation-play-state: running;
  animation-fill-mode: forwards;
}

.toggle:checked + .cyberpunk .rotate {
  animation: rotate calc(0.1s + var(--multi)) ease-out forwards;
  animation-delay: calc(var(--char-index) * 0.035s);
}

.toggle:checked + .cyberpunk .scale .char {
  animation: scale calc(0.2s + var(--multi)) ease-out forwards;
  animation-delay: calc(var(--char-index) * 0.035s);
  transform-origin: center bottom;
}

.toggle:checked + .cyberpunk .translate {
  animation: translate 0.2s ease-out infinite alternate paused;
  animation-delay: calc(var(--char-index) * 0.035s);
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

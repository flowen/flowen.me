<template>
  <div ref="cursor" class="mousecursor"></div>
</template>

<script>
export default {
  name: "Mousecursor",
  mounted() {
    setTimeout(this.$refs["cursor"].classList.add("show"), 2500);
    document.addEventListener("click", this.handleClick);
    document.addEventListener("mouseenter", this.show);
    document.addEventListener("mouseleave", this.hide);
  },
  beforeDestroy() {
    this.$refs["cursor"].classList.remove("show");

    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("mouseenter", this.show);
    document.removeEventListener("mouseleave", this.hide);
  },
  methods: {
    show() {
      this.$refs["cursor"].classList.add("show");
    },
    hide() {
      this.$refs["cursor"].classList.remove("show");
    },
    handleClick() {
      this.$refs["cursor"].classList.add("-click");
      // timeout should be at least as long as the 'pulse' animation
      setTimeout(() => this.$refs["cursor"].classList.remove("-click"), 400);
    },
  },
};
</script>

<style lang="scss">
.mousecursor {
  --radius: 3.5vw;
  --border: 1px;
  z-index: z("on-top");
  pointer-events: none;
  position: fixed;
  top: unquote("calc(var(--radius) / -2)");
  left: unquote("calc(var(--radius) / -2)");
  opacity: 0;
  width: var(--radius);
  height: var(--radius);
  border: var(--border) solid rgba(255, 255, 255, 0.2);
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(var(--mx), var(--my));
  transition: transform var(--d-fast) var(--ease-out), opacity var(--d-slow);

  &.preloading {
    animation: preloading 0.35s infinite;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before,
    &::after {
      animation: pulse 0.35s infinite;
    }
  }

  &.show {
    opacity: 1;
  }

  &::before,
  &::after {
    content: " ";
    position: absolute;
    top: unquote("calc(var(--border) * -1)");
    left: unquote("calc(var(--border) * -1)");
    width: var(--radius);
    height: var(--radius);
    border-radius: 100%;
    box-shadow: 0 0 1px var(--radius) var(--yellow);
    opacity: 0;
  }

  &::before {
    border: 1px solid var(--yellow);
  }

  &::after {
    box-shadow: inset 0 0 0 var(--radius) var(--yellow);
  }

  &.-click::before {
    animation: pulse 0.5s;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0.4;
      transform: scale(0.2);
    }
    100% {
      opacity: 0;
      transform: scale(0.6);
    }
  }

  @keyframes preloading {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 0;
      transform: scale(2.4);
    }
  }
}
</style>

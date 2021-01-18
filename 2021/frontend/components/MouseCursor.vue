<template>
  <div class="mousecursor"></div>
</template>

<script>
export default {
  name: "Mousecursor",
};
</script>

<style lang="scss">
.mousecursor {
  --radius: 6vw;
  --border: 2px;
  z-index: z("on-top");
  pointer-events: none;
  position: fixed;
  top: calc(var(--radius) / -2);
  left: calc(var(--radius) / -2);
  /* opacity: 0; */
  width: var(--radius);
  height: var(--radius);
  border: var(--border) solid rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(var(--mx), var(--my));
  transition: transform var(--d-normal) var(--ease-out);

  &::before {
    content: "";
    position: absolute;
    top: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    width: var(--radius);
    height: var(--radius);
    border-radius: 100%;
    box-shadow: 0 0 0 var(--radius) rgba(var(--yellow), 1);
    opacity: 0;
  }

  &.-click::before {
    animation: pulse 0.35s;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    70% {
      opacity: 0.4;
      transform: scale(0.4);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
}
</style>

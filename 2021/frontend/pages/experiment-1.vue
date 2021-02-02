<template>
  <div class="experiments">
    <input class="toggle" type="checkbox" />
    <div class=""></div>
    <div class="title js--show" data-a-split>
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

<style lang="scss" scoped>
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

[data-a-split] {
  font-size: 12vw;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--yellow);
  -webkit-text-stroke-width: 1px;
  text-align: center;
  font-family: var(--font-title);
}
</style>

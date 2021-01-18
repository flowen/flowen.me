<template>
  <div class="fan-stamp">
    <Fan class="fan" />
    <Fan class="fan" />
    <Fan class="fan" />
    <Fan class="fan" />
  </div>
</template>

<script>
import Fan from "../assets/img/fan.svg?inline";
export default {
  components: { Fan },
};
</script>

<style lang="scss" scoped>
.fan-stamp {
  --w: 20vw;
  width: clamp(86px, var(--w), 172px);
  height: clamp(86px, var(--w), 172px);

  display: flex;
  flex-wrap: wrap;
  padding: 4px 5px;
  border: 1px solid var(--dark-grey);

  .fan {
    width: 50%;
    height: 50%;
    border: 1px solid var(--magenta);
  }
}
</style>

export default {
  mounted() {
    if (typeof window !== `undefined` || typeof document !== `undefined`) {
      const Splitting = require("splitting");
      Splitting();
    }
  },
};

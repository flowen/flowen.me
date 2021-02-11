const charsplitTitle = (title = "", title2 = "") => ({
  computed: {
    splitTitle: function () {
      if (title.length === 0) return;

      if (typeof window !== `undefined` || typeof document !== `undefined`) {
        const Splitting = require("splitting");
        return Splitting.html({ content: title, by: "chars" });
      }

      return null;
    },
    splitTitle2: function () {
      if (title2.length === 0) return;

      if (typeof window !== `undefined` || typeof document !== `undefined`) {
        const Splitting = require("splitting");
        return Splitting.html({ content: title2, by: "chars" });
      }

      return null;
    },
  },
});

export default charsplitTitle;

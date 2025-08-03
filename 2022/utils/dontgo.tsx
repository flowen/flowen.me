import dontGo from "dont-go";

import isClient from "./isClient";

if (isClient) {
  dontGo({
    title: [
      "🌶️",
      "🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️ 🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️",
      "🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️ 🌶️",
    ],
    interval: 150,
  });
}

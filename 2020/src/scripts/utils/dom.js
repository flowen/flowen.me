const dom = {
  el: (el) => document.querySelector(el),
  nl: (el) => document.querySelectorAll(el),
  arr: (arr) => Array.from(el.nodelist(arr)),

  html: () => document.documentElement,
  body: () => document.body,
}

export default dom

const dom = {
  html: document.documentElement,
  body: document.body,

  el: el => document.querySelector(el),
  nodelist: el => document.querySelectorAll(el),
  arr: el => Array.from(dom.nodelist(el)),
  find: (parent, el) => parent.querySelector(el),

  contains: el => document.body.contains(dom.el(el))
};

export default dom;

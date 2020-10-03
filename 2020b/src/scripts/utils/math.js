export const distance = (x1, x2, y1, y2) => {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.hypot(a, b);
};

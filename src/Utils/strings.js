export const camelizeCSSVariables = (str) => {
  return str
    .slice(2, str.length)
    .replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
};

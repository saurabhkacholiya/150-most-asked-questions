function $(selector) {
  const element = document.querySelector(selector);
  return {
    css: function (props, value) {
      if (value === undefined) {
        if (element === null) {
          return undefined;
        }
        const styleValue = element.style[props];
        return styleValue ? styleValue : undefined;
      }

      if (element !== null) {
        element.style[props] = value;
      }

      return this;
    },
  };
}

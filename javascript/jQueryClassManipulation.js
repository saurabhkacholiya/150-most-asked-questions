function classNameTokenSet(className) {
  return new Set(className.trim().split(" ").filter(Boolean));
}

export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    toggleClass: function (className, state) {
      if (element === null) return;

      const classes = classNameTokenSet(className);
      const elementClasses = classNameTokenSet(element.className);

      classes.forEach((cls) => {
        const shouldRemove =
          state === undefined ? elementClasses.has(cls) : !state;

        shouldRemove ? elementClasses.delete(cls) : elementClasses.add(cls);
      });

      element.className = Array.from(elementClasses).join(" ");
      return this;
    },

    addClass: function (className) {
      this.toggleClass(className, true);
      return this;
    },

    removeClass: function (className) {
      this.removeClass(className, false);
      return this;
    },
  };
}

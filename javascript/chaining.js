const Query = {
  elements: [],

  select(selector) {
    this.elements = document.querySelectorAll(selector);
    return this;
  },

  addClass(className) {
    this.elements.forEach((element) => element.classList.add(className));
    return this;
  },

  removeClass(className) {
    this.elements.forEach((element) => element.classList.remove(className));
    return this;
  },

  setText(text) {
    this.elements.forEach((element) => (element.textContent = text));
    return this;
  },
};

// Without chaining:
Query.select(".item");
Query.addClass("highlight");
Query.setText("Updated Text");

// With chaining:
Query.select(".item").addClass("highlight").setText("Updated Text");

export default function getElementsByTagName(element, tagNameProps) {
  const tagName = tagNameProps.toUpperCase();
  const elementArr = [];

  function traverse(el) {
    if (el === null) {
      return;
    }
    if (el.tagName === tagName) {
      elementArr.push(el);
    }
    for (const child of el.children) {
      travers(child);
    }
  }

  for (const child of element.children) {
    traverse(child);
  }

  return elementArr;
}

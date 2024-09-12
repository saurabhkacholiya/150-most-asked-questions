function jsonStringify(value) {
  if (Array.isArray(value)) {
    const returnArr = value.map((item) => jsonStringify(item));
    return `[${returnArr.join(",")}]`;
  }

  if (typeof value === "object" && value !== null) {
    const returnObject = Object.entries(value).map(
      ([key, value]) => `"${key}":${jsonStringify(value)}`
    );
    return `{${returnObject.join(",")}}`;
  }

  if (typeof value === "string") {
    return `"${value}"`;
  }

  return String(value);
}

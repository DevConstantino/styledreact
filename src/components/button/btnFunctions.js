const shadowColor = (color) => {
  const dummyShadow = [
    color[color.length - 1].replace(/ /g, '').replace('1)', '0.5)'),
    color[color.length - 1]
      .replace(/ /g, '')
      .replace(/[0-9](?=\.)\.[0-9]/, '0.5'),
  ];
  return dummyShadow.filter(
    (elem) => elem !== color[color.length - 1].replace(/ /g, '')
  );
};

const undefinedCheck = (prop) => {
  if (prop === undefined) {
    prop = '';
  }
  return prop
};

export { shadowColor, undefinedCheck };

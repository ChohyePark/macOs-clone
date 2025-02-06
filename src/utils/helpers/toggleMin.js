const toggleMin = (container) => {
  const target = document.getElementById(container);
  if (target.classList.contains(container)) {
    target.classList.remove(container);
    target.classList.add(`${container}-minimized`);
  } else if (target.classList.contains(`${container}-minimized`)) {
    target.classList.remove(`${container}-minimized`);
    target.classList.add(container);
  }
};

export default toggleMin;

const toggleVis = (container) => {
  const target = document.getElementById(container);
  if (target.classList.contains(container)) {
    target.classList.remove(container);
    target.classList.add(`${container}-closed`);
  } else if (target.classList.contains(`${container}-closed`)) {
    target.classList.remove(`${container}-closed`);
    target.classList.add(container);
  } else if (target.classList.contains(`${container}-minimized`)) {
    target.classList.remove(`${container}-minimized`);
    target.classList.add(container);
  }
};

export default toggleVis;

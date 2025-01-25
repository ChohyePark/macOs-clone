const togglePopUpMin = () => {
  const target = document.getElementById('pop-up');
  if (target?.classList.contains('pop-up')) {
    target.classList.remove('pop-up');
    target.classList.add('pop-up-minimized');
  } else if (target?.classList.contains('pop-up-minimized')) {
    target.classList.remove('pop-up-minimized');
    target.classList.add('pop-up');
  }
};

export default togglePopUpMin;

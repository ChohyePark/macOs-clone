const toggleRundayVis = () => {
  const target = document.getElementById('runday-container');
  if (target.classList.contains('runday-container')) {
    target.classList.remove('runday-container');
    target.classList.add('runday-container-closed');
  } else if (target.classList.contains('runday-container-closed')) {
    target.classList.remove('runday-container-closed');
    target.classList.add('runday-container');
  } else if (target.classList.contains('runday-container-minimized')) {
    target.classList.remove('runday-container-minimized');
    target.classList.add('runday-container');
  }
};

export default toggleRundayVis;

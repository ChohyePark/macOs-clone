const toggleRundayMin = () => {
  const target = document.getElementById('runday-container');
  if (target.classList.contains('runday-container')) {
    target.classList.remove('runday-container');
    target.classList.add('runday-container-minimized');
  } else if (target.classList.contains('runday-container-minimized')) {
    target.classList.remove('runday-container-minimized');
    target.classList.add('runday-container');
  }
};

export default toggleRundayMin;

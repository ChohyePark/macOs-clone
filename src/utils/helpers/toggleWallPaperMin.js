const toggleWallPaperMin = () => {
  const target = document.getElementById('wallpaper-container');
  if (target.classList.contains('wallpaper-container')) {
    target.classList.remove('wallpaper-container');
    target.classList.add('wallpaper-container-minimized');
  } else if (target.classList.contains('wallpaper-container-minimized')) {
    target.classList.remove('wallpaper-container-minimized');
    target.classList.add('wallpaper-container');
  }
};

export default toggleWallPaperMin;

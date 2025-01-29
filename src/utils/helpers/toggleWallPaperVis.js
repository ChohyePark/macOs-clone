const toggleWallpaperVis = () => {
  const target = document.getElementById('wallpaper-container');
  if (target.classList.contains('wallpaper-container')) {
    target.classList.remove('wallpaper-container');
    target.classList.add('wallpaper-container-closed');
  } else if (target.classList.contains('wallpaper-container-closed')) {
    target.classList.remove('wallpaper-container-closed');
    target.classList.add('wallpaper-container');
  } else if (target.classList.contains('wallpaper-container-minimized')) {
    target.classList.remove('wallpaper-container-minimized');
    target.classList.add('wallpaper-container');
  }
};

export default toggleWallpaperVis;

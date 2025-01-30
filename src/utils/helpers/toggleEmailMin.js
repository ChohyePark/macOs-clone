const toggleEmailMin = () => {
  const target = document.getElementById('email-container');
  if (target.classList.contains('email-container')) {
    target.classList.remove('email-container');
    target.classList.add('email-container-minimized');
  } else if (target.classList.contains('email-container-minimized')) {
    target.classList.remove('email-container-minimized');
    target.classList.add('email-container');
  }
};

export default toggleEmailMin;

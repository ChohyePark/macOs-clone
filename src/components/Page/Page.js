import Dock from '../Dock/Dock';
import { store } from '../../App';
import { useContext, useEffect, useState } from 'react';
import './Page.scss';
import LoadingWindow from '../LoadingWindow/LoadingWindow';

export default function Page({ children }) {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    const handleClickOutside = () => {
      dispatch({ type: 'section/SELECT', payload: undefined });
    };

    document.addEventListener('mousedown', handleClickOutside);
    const boot = sessionStorage.getItem('boot');
    let wallpaper = JSON.parse(localStorage.getItem('wallpaper'));

    console.log('wallpaper', wallpaper);
    if (boot !== null && boot !== undefined) {
      dispatch({ type: 'state/BOOT', payload: boot.status });
    }

    if (wallpaper !== null && wallpaper !== undefined) {
      console.log(wallpaper);
      let updatedWallpaper = {
        open: true,
        name: wallpaper.name,
        surname: wallpaper.surname,
        preview: wallpaper.preview,
        src: wallpaper.src,
      };
      dispatch({ type: 'state/LOCAL', payload: updatedWallpaper });
      const page = document.getElementById('page');
      const url = require(
        `../../resources/images/wallpaper/${wallpaper.surname}.jpg`,
      );
      page.style.backgroundImage = `url(${url})`;
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (state.booting) {
      return;
    }

    sessionStorage.setItem('boot', JSON.stringify({ status: state.booting }));

    localStorage.setItem('wallpaper', JSON.stringify(state.settings.wallpaper));
  }, [state]);

  return (
    <div className="page" id="page">
      {state.booting ? <LoadingWindow /> : children}
    </div>
  );
}

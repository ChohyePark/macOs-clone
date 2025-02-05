import './EmailMenu.scss';
import toggleEmailMin from '../../utils/helpers/toggleEmailMin';
import toggleEmailVis from '../../utils/helpers/toggleEmailVis';
import { store } from '../../App';
import PopUp from '../PopUp/PopUp';
import { useContext, useEffect, useRef } from 'react';
import EmailSound from '../../resources/audio/GreenDay_LastNightOnEarth.mp3';
import { type } from '@testing-library/user-event/dist/type';

export default function EmailMenu() {
  const [state, dispatch] = useContext(store);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      playSound();
    }, 600);

    audioRef.current = new Audio(EmailSound);
    audioRef.current.volume = 0.7;

    const playSound = () => {
      const email = document.getElementById('email-container');
      if (
        email.classList.contains('email-container') &&
        state.settings.email.open
      ) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [state.settings.email.open]);

  const closeEmailPopUp = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    toggleEmailVis();
    dispatch({ type: 'email/TOGGLE' });
  };

  const minimizedEmailPopUp = () => {
    toggleEmailMin();
    dispatch({ type: 'email/TOGGLE' });
  };

  return (
    <div className="email-container-closed" id="email-container">
      <PopUp
        togglePopUpMin={minimizedEmailPopUp}
        togglePopUpClose={closeEmailPopUp}
        height="150px"
      >
        <div className="email-menu">
          <div className="line"></div>
          <div className="content">
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
            <div className="content-line"></div>
          </div>
        </div>
      </PopUp>
    </div>
  );
}

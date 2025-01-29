import './Dock.scss';
import { useContext } from 'react';
import { store } from '../../App';
import finder from '../../resources/images/webp/finder.png';
import appleMusic from '../../resources/images/webp/applemusic.png';
import calendar from '../../resources/images/webp/calendar.png';
import discord from '../../resources/images/webp/discord.png';
import github from '../../resources/images/webp/github.png';
import netflix from '../../resources/images/webp/netflix.png';
import photos from '../../resources/images/webp/photos.png';
import vscode from '../../resources/images/webp/vscode.png';
import runday from '../../resources/images/webp/rundaylogo.png';
import toggleWallpaperVis from '../../utils/helpers/toggleWallPaperVis';
import toggleRundayVis from '../../utils/helpers/toggleRundayVis';

export default function Dock() {
  const [state, dispatch] = useContext(store);

  const handleMouseEnter = (e) => {
    dispatch({ type: 'dock/SELECT', payload: e.currentTarget.id });
  };

  const handleMouseLeave = () => {
    dispatch({ type: 'dock/RESET' });
  };

  const openWallPaperPopUp = () => {
    if (state.settings.wallpaper.open) {
      toggleWallpaperVis();
    }
    dispatch({ type: 'wallpaper/TOGGLE' });
  };

  const openRundayPopUp = () => {
    toggleRundayVis();

    dispatch({ type: 'runday/TOGGLE' });
  };

  return (
    <div className="dock">
      <div className="dock-box">
        <div
          className={`dock-item ${
            state.dockItem === '1'
              ? 'distance-1'
              : state.dockItem === '2'
                ? 'distance-2'
                : ''
          }`}
          id="0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="finder" src={finder} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '0'
              ? 'distance-1'
              : state.dockItem === '2'
                ? 'distance-1'
                : state.dockItem === '3'
                  ? 'distance-2'
                  : ''
          }`}
          id="1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="apple music" src={appleMusic} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '1'
              ? 'distance-1'
              : state.dockItem === '3'
                ? 'distance-1'
                : state.dockItem === '4'
                  ? 'distance-2'
                  : state.dockItem == '0'
                    ? 'distance-2'
                    : ''
          }`}
          id="2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openRundayPopUp}
        >
          <img alt="calendar" src={runday} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '2'
              ? 'distance-1'
              : state.dockItem === '4'
                ? 'distance-1'
                : state.dockItem === '5'
                  ? 'distance-2'
                  : state.dockItem === '1'
                    ? 'distance-2'
                    : ''
          }`}
          id="3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="discord" src={discord} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '3'
              ? 'distance-1'
              : state.dockItem === '5'
                ? 'distance-1'
                : state.dockItem === '6'
                  ? 'distance-2'
                  : state.dockItem === '2'
                    ? 'distance-2'
                    : ''
          }`}
          id="4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="github" src={github} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '4'
              ? 'distance-1'
              : state.dockItem === '6'
                ? 'distance-1'
                : state.dockItem === '7'
                  ? 'distance-2'
                  : state.dockItem === '3'
                    ? 'distance-2'
                    : ''
          }`}
          id="5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="netflix" src={netflix} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '5'
              ? 'distance-1'
              : state.dockItem === '7'
                ? 'distance-1'
                : state.dockItem === '4'
                  ? 'distance-2'
                  : ''
          }`}
          id="6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={openWallPaperPopUp}
        >
          <img alt="photos" src={photos} className="dock-icon" />
        </div>
        <div
          className={`dock-item ${
            state.dockItem === '6'
              ? 'distance-1'
              : state.dockItem === '5'
                ? 'distance-2'
                : ''
          } `}
          id="7"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="vscode" src={vscode} className="dock-icon" />
        </div>
      </div>
    </div>
  );
}

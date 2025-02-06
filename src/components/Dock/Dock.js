import './Dock.scss';
import { useContext } from 'react';
import { store } from '../../App';
import finder from '../../resources/images/webp/finder.png';
import appleMusic from '../../resources/images/webp/applemusic.png';
import discord from '../../resources/images/webp/discord.png';
import github from '../../resources/images/webp/github.png';
import netflix from '../../resources/images/webp/netflix.png';
import photos from '../../resources/images/webp/photos.png';
import vscode from '../../resources/images/webp/vscode.png';
import runday from '../../resources/images/webp/rundaylogo.png';
import email from '../../resources/images/webp/email.png';
import toggleVis from '../../utils/helpers/toggleVis';

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
      toggleVis('wallpaper-container');
    }
    dispatch({ type: 'wallpaper/TOGGLE' });
  };

  const openRundayPopUp = () => {
    toggleVis('runday-container');
    dispatch({ type: 'runday/TOGGLE' });
  };

  const openEmailPopUp = () => {
    toggleVis('email-container');
    dispatch({ type: 'email/TOGGLE' });
  };

  const openNewTab = (url) => {
    if (!url) return;
    window.open(url, '_blank');
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
          onClick={openEmailPopUp}
        >
          <img alt="email" src={email} className="dock-icon" />
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
          <img alt="runday" src={runday} className="dock-icon" />
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
          onClick={() => {
            openNewTab('https://discord.com/');
          }}
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
          onClick={() => {
            openNewTab('https://github.com/ChohyePark');
          }}
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
          onClick={() => {
            openNewTab('https://www.netflix.com/');
          }}
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
          onClick={() => {
            openNewTab('https://code.visualstudio.com/');
          }}
        >
          <img alt="vscode" src={vscode} className="dock-icon" />
        </div>
      </div>
    </div>
  );
}

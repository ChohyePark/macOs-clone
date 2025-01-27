import './WallPaPerMenu.scss';
import React, { useContext } from 'react';
import { store } from '../../App';
import wallpapers from '../../utils/helpers/getWallPapers';
import PopUp from '../PopUp/PopUp';

export default function WallPaperMenu() {
  const [state, dispatch] = useContext(store);

  const changeWallpaper = (wallpaper) => {
    dispatch({
      type: 'wallpaper/CHANGE',
      payload: {
        name: wallpaper.name,
        surname: wallpaper.surname,
        prview: `../../resources/images/wallpaper/preview_${wallpaper.surname}.jpg`,
        src: `../../resources/images/wallpaper/${wallpaper.surname}.jpg`,
      },
    });

    const page = document.getElementById('page');
    const url = require(
      `../../resources/images/wallpaper/${wallpaper.surname}.jpg`,
    );
    page.style.backgroundImage = `url(${url})`;
  };

  return (
    <PopUp>
      <div className="wallpaper-menu">
        <div className="wallpaper-selector">
          <h2>Dynamic WallPapers</h2>
          <div className="grid">
            {wallpapers.map((item, i) => {
              return (
                <div
                  className="item-container"
                  onClick={() => changeWallpaper(item)}
                >
                  <img
                    className="image-wrapper"
                    src={require(
                      `../../resources/images/wallpaper/preview_${item.surname}.jpg`,
                    )}
                  />
                  <h2>{item.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PopUp>
  );
}

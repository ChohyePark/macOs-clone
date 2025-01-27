import './WallPaPerMenu.scss';
import wallpapers from '../../utils/helpers/getWallPapers';
import PopUp from '../PopUp/PopUp';

export default function WallPaperMenu() {
  return (
    <PopUp>
      <div className="wallpaper-menu">
        <div className="wallpaper-selector">
          <h2>Dynamic WallPapers</h2>
          <div className="grid">
            {wallpapers.map((item, i) => {
              return (
                <div className="item-container">
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

import './EmailMenu.scss';
import toggleEmailMin from '../../utils/helpers/toggleEmailMin';
import toggleEmailVis from '../../utils/helpers/toggleEmailVis';
import PopUp from '../PopUp/PopUp';

export default function EmailMenu() {
  return (
    <div className="email-container-closed" id="email-container">
      <PopUp
        togglePopUpMin={toggleEmailMin}
        togglePopUpClose={toggleEmailVis}
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

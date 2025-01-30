import './EmailMenu.scss';
import toggleEmailMin from '../../utils/helpers/toggleEmailMin';
import toggleEmailVis from '../../utils/helpers/toggleEmailVis';
import PopUp from '../PopUp/PopUp';

export default function EmailMenu() {
  return (
    <div className="email-container" id="email-container">
      <PopUp
        togglePopUpMin={toggleEmailMin}
        togglePopUpClose={toggleEmailVis}
        height="200px"
      ></PopUp>
    </div>
  );
}

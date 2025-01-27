import './PopUp.scss';
import { ReactComponent as Close } from '../../resources/images/svg/close.svg';
import { ReactComponent as Minimize } from '../../resources/images/svg/minimize.svg';
import { ReactComponent as Stretch } from '../../resources/images/svg/stretch.svg';
import Draggable from 'react-draggable';
import togglePopUpMin from '../../utils/helpers/togglePopUpMin';

export default function PopUp({ children }) {
  return (
    <Draggable>
      <div className="pop-up" id="pop-up">
        <section className="pop-up-handle" id="pop-up-handle">
          <div className="dots">
            <div className="dot red">
              <Close className="close" />
            </div>
            <div className="dot yellow" onClick={togglePopUpMin}>
              <Minimize className="minimize" />
            </div>
            <div className="dot green">
              <Stretch className="stretch" />
            </div>
          </div>
        </section>
        <section className="pop-up-content">{children}</section>
      </div>
    </Draggable>
  );
}

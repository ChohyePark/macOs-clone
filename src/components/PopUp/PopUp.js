import './PopUp.scss';
import { ReactComponent as Close } from '../../resources/images/svg/close.svg';
import { ReactComponent as Minimize } from '../../resources/images/svg/minimize.svg';
import { ReactComponent as Stretch } from '../../resources/images/svg/stretch.svg';
import Draggable from 'react-draggable';

export default function PopUp({ children }) {
  return (
    <Draggable>
      <div className="pop-up">
        <section className="handle">
          <div className="dots">
            <div className="dot red">
              <Close className="close" />
            </div>
            <div className="dot yellow">
              <Minimize className="minimize" />
            </div>
            <div className="dot green">
              <Stretch className="stretch" />
            </div>
          </div>
        </section>
      </div>
    </Draggable>
  );
}

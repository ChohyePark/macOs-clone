import { useContext } from 'react';
import { store } from '../../App';
import finder from '../../resources/images/webp/finder.png';
import './Dock.scss';

export default function Dock() {
  const [state, dispatch] = useContext(store);

  const handleMouseEnter = (e) => {
    dispatch({ type: 'dock/SELECT', payload: e.target.id });
  };

  const handleMouseLeave = () => {
    dispatch({ type: 'dock/RESET' });
  };

  return (
    <div className="dock">
      <div className="dock-box">
        <div
          className="dock-item"
          id="0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img alt="finder" src={finder} className="dock-icon"></img>
        </div>
        <div className="dock-item"></div>
        <div className="dock-item"></div>
        <div className="dock-item"></div>
        <div className="dock-item"></div>
        <div className="dock-item"></div>
        <div className="dock-item"></div>
        <div className="dock-item"></div>
      </div>
    </div>
  );
}

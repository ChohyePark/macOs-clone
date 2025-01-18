import { useContext } from 'react';
import { store } from '../../App';
import './Dock.scss';

export default function Dock() {
  const [state, dispatch] = useContext(store);

  const handleMouseEnter = (e) => {
    dispatch({ type: 'dock/SELECT', payload: e.target.id });
  };
  return (
    <div className="dock">
      <div className="dock-box">
        <div className="dock-item" id="0" onMouseEnter={handleMouseEnter}></div>
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

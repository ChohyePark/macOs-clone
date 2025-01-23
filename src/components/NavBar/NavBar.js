import './NavBar.scss';
import { ReactComponent as SettingIcon } from '../../resources/images/svg/settings.svg';
import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import appleLogo from '../../resources/images/applelogo.png';
import { use } from 'react';

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    dispatch({ type: 'date/SET' });
  }, []);
  return (
    <div className="nav-bar">
      <div className="logo section">
        <img alt="logo" src={appleLogo} />
      </div>
      <div className="finder section">Finder</div>
      <div className="file section">File</div>
      <div className="edit section">Edit</div>
      <div className="view section">View</div>
      <div className="go section">Go</div>
      <div className="window section">Window</div>
      <div className="help section">Help</div>
      <div className="right">
        <SettingIcon className="setting" />
        <h3 className="date">{state.date !== undefined && state.date[0]}</h3>
        <h3 className>{state.date !== undefined && state.date[1]}</h3>
      </div>
    </div>
  );
}

import './NavBar.scss';
import { ReactComponent as SettingIcon } from '../../resources/images/svg/settings.svg';
import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import appleLogo from '../../resources/images/applelogo.png';
import DropDown from '../DropDown/DropDown';

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  const dispatchAction = (e) => {
    dispatch({ type: 'section/SELECT', payload: e.target.id });
  };

  useEffect(() => {
    dispatch({ type: 'date/SET' });
  }, []);

  setInterval(() => {
    dispatch({
      type: 'date/SET',
    });
  }, 60000);
  return (
    <div className="nav-bar">
      <div className="logo section" id="logo" onClick={dispatchAction}>
        <img alt="logo" src={appleLogo} />
      </div>
      <div className="finder section" id="finder" onClick={dispatchAction}>
        Finder
        {state.section === 'finder' && <DropDown />}
      </div>
      <div className="file section" id="file" onClick={dispatchAction}>
        File
        {state.section === 'file' && <DropDown />}
      </div>
      <div className="edit section" id="edit" onClick={dispatchAction}>
        Edit
        {state.section === 'edit' && <DropDown />}
      </div>
      <div className="view section" id="view" onClick={dispatchAction}>
        View
        {state.section === 'view' && <DropDown />}
      </div>
      <div className="go section" id="go" onClick={dispatchAction}>
        Go
        {state.section === 'go' && <DropDown />}
      </div>
      <div className="window section" id="window" onClick={dispatchAction}>
        Window
        {state.section === 'window' && <DropDown />}
      </div>
      <div className="help section" id="help" onClick={dispatchAction}>
        Help
        {state.section === 'help' && <DropDown />}
      </div>
      <div className="right">
        <SettingIcon className="setting" />
        <h3 className="date">{state.date !== undefined && state.date[0]}</h3>
        <h3 className>{state.date !== undefined && state.date[1]}</h3>
      </div>
    </div>
  );
}

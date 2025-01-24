import Dock from '../Dock/Dock';
import { store } from '../../App';
import { useContext, useEffect, useState } from 'react';
import './Page.scss';
import LoadingWindow from '../LoadingWindow/LoadingWindow';

export default function Page({ children }) {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    const handleClickOutside = () => {
      dispatch({ type: 'section/SELECT', payload: undefined });
    };

    document.addEventListener('mousedown', handleClickOutside);

    const boot = sessionStorage.getItem('boot');

    if (boot !== null && boot !== undefined) {
      dispatch({ type: 'state/BOOT', payload: boot.status });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (state.booting) {
      return;
    }
    sessionStorage.setItem('boot', JSON.stringify({ status: state.booting }));
  }, [state]);

  return (
    <div className="page">{state.booting ? <LoadingWindow /> : children}</div>
  );
}

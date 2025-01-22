import Dock from '../Dock/Dock';
import { useEffect, useState } from 'react';
import './Page.scss';
import LoadingWindow from '../LoadingWindow/LoadingWindow';

export default function Page({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3350);

    return () => clearTimeout(timer);
  }, []);

  return <div className="page">{isLoading ? <LoadingWindow /> : children}</div>;
}

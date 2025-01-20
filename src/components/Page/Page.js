import Dock from '../Dock/Dock';
import './Page.scss';
import LoadingWindow from '../LoadingWindow/LoadingWindow';

export default function Page({ children }) {
  return (
    <div className="page">
      <Dock></Dock>
      {/* <LoadingWindow></LoadingWindow> */}
    </div>
  );
}

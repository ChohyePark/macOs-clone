import './LoadingWindow.scss';
import appleLogo from '../../resources/images/applelogo.png';
import { motion } from 'framer-motion';


export default function LoadingWindow() {
  const animations = {
    initial: { width: "0px" },
    animate: { width: "150px" },
  };
  return (
    <div className="loading-window">
      <img
      alt="logo"
      className="logo"
      src={appleLogo}
      ></img>
      <div className="bar-container">
        <div className="bar-background">
          <motion.div
          className="bar"
          initial="initial"
          animate="animate"
          variants={animations} // 애니메이션 정의
          transition={{ ease: "easeInOut", duration: 2.1, delay: 0.4 }}/>
        </div>
      </div>
    </div>
  );
}
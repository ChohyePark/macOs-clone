import './EmailMenu.scss';
import toggleMin from '../../utils/helpers/toggleMin';
import toggleVis from '../../utils/helpers/toggleVis';
import { store } from '../../App';
import PopUp from '../PopUp/PopUp';
import { useContext, useEffect, useRef } from 'react';
import EmailSound from '../../resources/audio/GreenDay_LastNightOnEarth.mp3';

export default function EmailMenu() {
  const [state, dispatch] = useContext(store);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      playSound();
    }, 600);

    audioRef.current = new Audio(EmailSound);
    audioRef.current.volume = 0.7;

    const playSound = () => {
      const email = document.getElementById('email-container');
      if (
        email.classList.contains('email-container') &&
        state.settings.email.open
      ) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [state.settings.email.open]);

  const closeEmailPopUp = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    toggleVis('email-container');
    dispatch({ type: 'email/TOGGLE' });
  };

  const minimizedEmailPopUp = () => {
    toggleMin('email-container');
    dispatch({ type: 'email/TOGGLE' });
  };

  return (
    <div className="email-container-closed" id="email-container">
      <PopUp
        togglePopUpMin={minimizedEmailPopUp}
        togglePopUpClose={closeEmailPopUp}
        height="510px"
      >
        <div className="email-menu">
          <div className="line"></div>
          <div className="content">
            <div className="content-line"></div>
            <div className="content-line">
              안녕하세요, 제가 만든 서비스를 둘러봐주셔서 진심으로 감사드립니다.
            </div>
            <div className="content-line">
              혹시 스피커가 음소거되어 있다면, 소리를 조금만 키워주실 수
              있을까요?
            </div>
            <div className="content-line">
              지금 흘러나오는 노래는
              <span>Green Day - Last Night on Earth </span>입니다.
            </div>
            <div className="content-line">
              이노래는 제가 가장 좋아하는 곡이에요.
            </div>
            <div className="content-line">
              사실, 저는 사람들과 친해지기 위해 종종 좋아하는 노래를 묻곤
              합니다. 노래 취향을 알면 그사람을 더 잘 이해할 수 있다고
              생각하거든요.
            </div>
            <div className="content-line">
              아래 Dock 아이콘에는 런데이 아이콘이 보일 거예요. 클릭하시면 저의
              런데이 기록을 확인하실 수 있습니다.
            </div>
            <div className="content-line">
              그동안 저에게 맞는 운동을 찾기 위해 복싱, 웨이트, 요가, 주짓수
              등을 모두 경험해봤지만, 아무래도 저에게 최고의 운동은 러닝인 것
              같아요.
            </div>
            <div className="content-line">
              혹시 좋아하는 운동이 있으신가요? 운동을 선택하는 기준이 궁금해요.
            </div>
            <div className="content-line">
              저는 예전에 멋진 몸을 만드는 데 초점을 두고 운동을 선택했지만,
            </div>
            <div className="content-line">
              현재는 1. 꾸준히 할 수 있는지 2. 스트레스 관리에 도움이 되는지 3.
              스스로 성취감을 느낄수 있는지를 기준으로 운동을 선택해요.
            </div>
            <div className="content-line">
              이 세가지 기준에 부합하는 운동이 저에게는 러닝인 것 같아요.
            </div>
            <div className="content-line">
              그리고 아주 사적인 이야기지만, 힘든 시기에 아무것도 할 수 없다고
              느꼈을 때, 무력감을 벗어나게 도와준것도 러닝이었어요.
            </div>
            <div className="content-line">
              다시 노래 이야기로 돌아가서, 노래에
              <span>'Sending all my love to you'</span>
            </div>
            <div className="content-line">
              라는 가사가 나와요 가사 그대로, 이 짧은 편지에 제 모든 사랑을 담아
              보내요.
            </div>
            <div className="content-line">
              이 편지를 통해 저라는 사람을 이해하는 데 조금이나마 도움이 되기를
              바라며,
            </div>
            <div className="content-line">
              좋은 하루 보내세요. 그리고 행복하세요.
            </div>
            <div className="content-line"></div>
          </div>
        </div>
      </PopUp>
    </div>
  );
}

import './RundayMenu.scss';
import { store } from '../../App';
import { useContext } from 'react';
import PopUp from '../PopUp/PopUp';
import toggleRundayMin from '../../utils/helpers/toggleRundayMin';
import toggleRundayVis from '../../utils/helpers/toggleRundayVis';
import rundays from '../../utils/helpers/getRundays';

export default function RundayMenu() {
  return (
    <div className="runday-container-closed" id="runday-container">
      <PopUp
        togglePopUpMin={toggleRundayMin}
        togglePopUpClose={toggleRundayVis}
        height="380px"
      >
        <div className="runday-menu">
          <section className="record-section">
            <h2>전체 기록</h2>
            <div className="record-top">
              <p>1148.34</p>
              <p>거리(km)</p>
            </div>
            <div className="record-bottom">
              <div className="record-item">
                <p>166:17:51</p>
                <p>시간</p>
              </div>
              <div className="record-item">
                <p>7'47"</p>
                <p>페이스</p>
              </div>
              <div className="record-item">
                <p>62,152</p>
                <p>칼로리</p>
              </div>
            </div>
          </section>
          <section className="grid">
            {rundays.map((item, i) => {
              return (
                <div className="photo-wrapper">
                  <img
                    className="photo"
                    src={require(
                      `../../resources/images/runday/${item.surname}.jpg`,
                    )}
                  />
                </div>
              );
            })}
          </section>
        </div>
      </PopUp>
    </div>
  );
}

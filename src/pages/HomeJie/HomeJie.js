import React, { useState } from 'react';
import './HomeJie.scss';
import { ReactComponent as Itinerary } from '../../icon/itinerary_white.svg';
import { ReactComponent as Stay } from '../../icon/stay_white.svg';
import { ReactComponent as Ticket } from '../../icon/ticket_white.svg';
import { ReactComponent as Food } from '../../icon/food_white.svg';

function HomeJie() {
  const [homePageInput, setHomePageInput] = useState('美食');
  return (
    <>
      <div className="HomePage">
        <div className="HomePage_slogan">
          <div className="HomePage_slogan_Time">Time</div>
          <div className="HomePage_slogan_Travel">Travel</div>
        </div>
        <div className="HomePage_Selector">
          <div className="HomePage_Selector_Class">
            <div
              className={`${`d-flex`} ${
                homePageInput === '行程'
                  ? 'HomePage_Selector_Class_Btn_active'
                  : 'HomePage_Selector_Class_Btn'
              }`}
              onClick={() => {
                setHomePageInput('行程');
              }}
            >
              <p>行程</p>
              <div className="icon">
                <Itinerary></Itinerary>
              </div>
            </div>

            <div
              className={`${`d-flex`} ${
                homePageInput === '美食'
                  ? 'HomePage_Selector_Class_Btn_active'
                  : 'HomePage_Selector_Class_Btn'
              }`}
              onClick={() => {
                setHomePageInput('美食');
              }}
            >
              <p>美食</p>
              <div className="icon">
                <Food></Food>
              </div>
            </div>

            <div
              className={`${`d-flex`} ${
                homePageInput === '住宿'
                  ? 'HomePage_Selector_Class_Btn_active'
                  : 'HomePage_Selector_Class_Btn'
              }`}
              onClick={() => {
                setHomePageInput('住宿');
              }}
            >
              <p>住宿</p>
              <div className="icon">
                <Stay></Stay>
              </div>
            </div>

            <div
              className={`${`d-flex`} ${
                homePageInput === '票卷'
                  ? 'HomePage_Selector_Class_Btn_active'
                  : 'HomePage_Selector_Class_Btn'
              }`}
              onClick={() => {
                setHomePageInput('票卷');
              }}
            >
              <p>票卷</p>
              <div className="icon">
                <Ticket></Ticket>
              </div>
            </div>
          </div>
          {/* 行程 */}
          {homePageInput === '行程' ? (
            <div className="HomePage_Selector_Input_Group GroupForFood ">
              <div className="ForFood">
                <input
                  type="text"
                  placeholder="請輸入關鍵字"
                  style={{ width: '680px' }}
                ></input>
              </div>
              <div className="HomePage_Selector_Input_Group_Btn">
                <button>搜尋</button>
              </div>
            </div>
          ) : (
            ''
          )}
          {/* 美食 */}
          {homePageInput === '美食' ? (
            <div className="HomePage_Selector_Input_Group GroupForFood ">
              <div className="ForFood">
                <input
                  type="text"
                  placeholder="請輸入關鍵字"
                  style={{ width: '680px' }}
                ></input>
              </div>
              <div className="HomePage_Selector_Input_Group_Btn">
                <button>搜尋</button>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* 住宿 */}
          {homePageInput === '住宿' ? (
            <div className="HomePage_Selector_Input_Group">
              <div>
                <p>目的地</p>
                <input type="text" placeholder="請輸入關鍵字"></input>
              </div>
              <div>
                <p>入住時間</p>
                <input type="Date"></input>
              </div>
              <div>
                <p>退房時間</p>
                <input type="Date"></input>
              </div>
              <div>
                <p>房數</p>
                <select>
                  <option>一間</option>
                  <option>兩間</option>
                  <option>三間</option>
                  <option>四間</option>
                  <option>五間</option>
                </select>
              </div>
              <div className="HomePage_Selector_Input_Group_Btn">
                <button>搜尋</button>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* 票卷 */}
          {homePageInput === '票卷' ? (
            <div className="HomePage_Selector_Input_Group">
              <div>
                <p>目的地</p>
                <input type="text" placeholder="請輸入關鍵字"></input>
              </div>
              <div>
                <p>使用日</p>
                <input type="Date"></input>
              </div>
              <div>
                <p>數量</p>
                <select>
                  <option>一張</option>
                  <option>兩張</option>
                  <option>三張</option>
                  <option>四張</option>
                  <option>五張</option>
                  <option>六張</option>
                </select>
              </div>
              <div className="HomePage_Selector_Input_Group_Btn">
                <button>搜尋</button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default HomeJie;

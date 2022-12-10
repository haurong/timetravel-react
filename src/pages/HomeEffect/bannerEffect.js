import React from 'react';
import './bannerEffect.scss';
import SiteIcon from '../../icon/itinerary_white.svg';
import FoodIcon from '../../icon/food_white.svg';
import StayIcon from '../../icon/stay_white.svg';
import TicketIcon from '../../icon/ticket_white.svg';
import { useAllContext } from '../AllContext/AllContext';
import { Navigate, useNavigate, NavLink } from 'react-router-dom';

function BannerEffect() {
  const { pageSearchWord, setPageSearchWord } = useAllContext();
  const navigate = useNavigate();

  // const foodCate = {
  //   cate1: '特色小吃',
  //   cate2: '台式',
  //   cate3: '泰式',
  //   cate4: '日式',
  //   cate5: '飲品',
  //   cate6: '火鍋',
  //   cate7: '咖啡',
  //   cate8: '甜點',
  // };
  //TODO:輸入iuput後要跳轉頁面
  return (
    <>
      <div class="BannerEffect">
        <div class="site">
          <div className="hover-effect">
            <form className="d-flex BannerEffect-flex" role="search">
              <div className="input-group">
                <span className="icon" id="basic-addon1">
                  <img src={SiteIcon} alt="" />
                </span>
                <input
                  className="form-control search-border me-4"
                  type="search"
                  placeholder="搜尋"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
          <div class="sun-an">
            <div class="sun sun-1"></div>
            <div class="sun sun-2"></div>
            <div class="sun sun-3"></div>
            <div class="sun sun-4"></div>
            <div class="sun sun-5"></div>
          </div>
          <div className="effect-text site-text text-center">SITE</div>
          <div class="landscape landscape-1"></div>
          <div class="landscape landscape-2"></div>
          <div class="landscape landscape-3"></div>
          <div class="landscape landscape-4"></div>
          <div class="landscape landscape-5"></div>
          <div class="landscape landscape-6"></div>
          <div class="landscape landscape-7"></div>
          <div class="tree tree-1"></div>
          <div class="tree tree-2"></div>
          <div class="tree tree-3"></div>
          <div class="tree tree-4"></div>
          <div class="tree tree-5"></div>
          <div class="tree tree-6"></div>
          <div class="tree tree-7"></div>
          <div class="moon-1"></div>
          <div class="moon-2"></div>
          <div class="baloon">
            <div class="baloon-1">
              <div class="strip-1">
                <div class="strip-2"></div>
              </div>
              <div class="bottom-strip"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            <div class="basket">
              <span></span>
            </div>
          </div>
        </div>
        <div class="food">
          <div className="hover-effect">
            <form className="d-flex BannerEffect-flex" role="search">
              <div className="input-group">
                <span className="icon" id="basic-addon1">
                  <img src={FoodIcon} alt="" />
                </span>
                <input
                  className="form-control search-border me-4"
                  type="search"
                  placeholder="搜尋"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
          <div class="sun-an">
            <div class="sun sun-1"></div>
            <div class="sun sun-2"></div>
            <div class="sun sun-3"></div>
            <div class="sun sun-4"></div>
            <div class="sun sun-5"></div>
          </div>
          <div className="effect-text food-text text-center">FOOD</div>
          <div class="landscape landscape-1"></div>
          <div class="landscape landscape-2"></div>
          <div class="landscape landscape-3"></div>
          <div class="landscape landscape-4"></div>
          <div class="landscape landscape-5"></div>
          <div class="landscape landscape-6"></div>
          <div class="landscape landscape-7"></div>
          <div class="tree tree-1"></div>
          <div class="tree tree-2"></div>
          <div class="tree tree-3"></div>
          <div class="tree tree-4"></div>
          <div class="tree tree-5"></div>
          <div class="tree tree-6"></div>
          <div class="tree tree-7"></div>
          <div class="moon-1"></div>
          <div class="moon-2"></div>
          <div class="baloon">
            <div class="baloon-1">
              <div class="strip-1">
                <div class="strip-2"></div>
              </div>
              <div class="bottom-strip"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            <div class="basket">
              <span></span>
            </div>
          </div>
        </div>
        <div class="hotel">
          <div className="hover-effect">
            <NavLink to="/food">
              <form className="d-flex BannerEffect-flex" role="search">
                <div className="input-group">
                  <span className="icon" id="basic-addon1">
                    <img src={StayIcon} alt="" />
                  </span>
                  <input
                    className="form-control search-border me-4"
                    type="search"
                    placeholder="搜尋"
                    aria-label="Search"
                    value={pageSearchWord}
                    onChange={(e) => {
                      setPageSearchWord(e.target.value);
                      // navigate('/food');
                    }}
                  />
                </div>
              </form>
            </NavLink>
          </div>
          <div class="sun-an">
            <div class="sun sun-1"></div>
            <div class="sun sun-2"></div>
            <div class="sun sun-3"></div>
            <div class="sun sun-4"></div>
            <div class="sun sun-5"></div>
          </div>
          <div className="effect-text stay-text text-center">STAY</div>
          <div class="landscape landscape-1"></div>
          <div class="landscape landscape-2"></div>
          <div class="landscape landscape-3"></div>
          <div class="landscape landscape-4"></div>
          <div class="landscape landscape-5"></div>
          <div class="landscape landscape-6"></div>
          <div class="landscape landscape-7"></div>
          <div class="tree tree-1"></div>
          <div class="tree tree-2"></div>
          <div class="tree tree-3"></div>
          <div class="tree tree-4"></div>
          <div class="tree tree-5"></div>
          <div class="tree tree-6"></div>
          <div class="tree tree-7"></div>
          <div class="moon-1"></div>
          <div class="moon-2"></div>
          <div class="baloon">
            <div class="baloon-1">
              <div class="strip-1">
                <div class="strip-2"></div>
              </div>
              <div class="bottom-strip"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            <div class="basket">
              <span></span>
            </div>
          </div>
        </div>
        <div class="ticket">
          <div className="hover-effect">
            <form className="d-flex BannerEffect-flex" role="search">
              <div className="input-group">
                <span className="icon" id="basic-addon1">
                  <img src={TicketIcon} alt="" />
                </span>
                <input
                  className="form-control search-border me-4"
                  type="search"
                  placeholder="搜尋"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
          <div class="sun-an">
            <div class="sun sun-1"></div>
            <div class="sun sun-2"></div>
            <div class="sun sun-3"></div>
            <div class="sun sun-4"></div>
            <div class="sun sun-5"></div>
          </div>
          <div className="effect-text ticket-text text-center">TICKET</div>
          <div class="landscape landscape-1"></div>
          <div class="landscape landscape-2"></div>
          <div class="landscape landscape-3"></div>
          <div class="landscape landscape-4"></div>
          <div class="landscape landscape-5"></div>
          <div class="landscape landscape-6"></div>
          <div class="landscape landscape-7"></div>
          <div class="tree tree-1"></div>
          <div class="tree tree-2"></div>
          <div class="tree tree-3"></div>
          <div class="tree tree-4"></div>
          <div class="tree tree-5"></div>
          <div class="tree tree-6"></div>
          <div class="tree tree-7"></div>
          <div class="moon-1"></div>
          <div class="moon-2"></div>
          <div class="baloon">
            <div class="baloon-1">
              <div class="strip-1">
                <div class="strip-2"></div>
              </div>
              <div class="bottom-strip"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            <div class="line line-4"></div>
            <div class="basket">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerEffect;

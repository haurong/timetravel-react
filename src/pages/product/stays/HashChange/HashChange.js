import React, { useState } from 'react';
import './HashChange.scss';
function HashChange(props) {
  const hash_title = ['房型介紹', '注意事項', '商品說明', '旅客評價'];
  const [slideOut, setSlideOut] = useState(false);
  let part1 = props.allPart.part1 - 50;
  let part2 = props.allPart.part2 - 50;
  let part3 = props.allPart.part3 - 50;
  let part4 = props.allPart.part4 - 50;
  const [whichPart, setWhichPart] = useState('房型介紹');
  window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    let nowScroll = window.scrollY;
    // console.log(part1, part2, part3, part4);
    // 787 2478 4260 4761
    if (nowScroll < part1) {
      setSlideOut(false);
    } else if (nowScroll >= part1 && nowScroll < part2) {
      setSlideOut(true);
      setWhichPart('房型介紹');
    } else if (nowScroll >= part2 && nowScroll < part3) {
      setSlideOut(true);
      setWhichPart('注意事項');
    } else if (nowScroll >= part3 && nowScroll < part4) {
      setSlideOut(true);
      setWhichPart('商品說明');
    } else if (nowScroll >= part4) {
      setSlideOut(true);
      setWhichPart('旅客評價');
    }
  });

  // window.addEventListener('onhashchange', () => {
  //   window.history.pushState(0, 0, window.location.origin + '/stays');
  // });
  window.onhashchange = function () {
    window.history.pushState(0, 0, window.location.origin + '/stays');
  };
  return (
    <>
      <nav
        className={
          slideOut === true ? 'HashChange hash_slideOut' : 'HashChange'
        }
      >
        <div className="hashChange_slider">
          {hash_title.map((v, i) => {
            let str = `#Hotel_part${i + 1}`;
            return (
              <div key={i}>
                <a href={str}>{v}</a>
                <hr className={whichPart === v ? 'HashChange_active' : ''} />
              </div>
            );
          })}
        </div>
        {/* <div>
					<a href="#Hotel_part1">房型介紹</a>
					<hr />
				</div>
				<div>
					<a href="#Hotel_part2">商品說明</a>
					<hr />
				</div>
				<div>
					<a href="#Hotel_part3">注意事項</a>
					<hr />
				</div>
				<div>
					<a href="#Hotel_part4">旅客評價</a>
					<hr />
				</div> */}
      </nav>
    </>
  );
}

export default HashChange;

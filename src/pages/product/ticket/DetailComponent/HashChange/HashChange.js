import React, { useState } from 'react';
import '../../../stays/HashChange/HashChange.scss';
import { useHotelContext } from '../../../stays/Context/HotelContext';
// import { slideOut, setSlideOut } from '../Context/SlideOutContext';

function HashChange(props) {
  const hash_title = [
    '商品介紹',
    '注意說明',
    '體驗地點',
    '旅客評價',
    '回到頂部',
  ];
  const { slideOut, setSlideOut } = useHotelContext();
  // const [computerHashChangeFixed, setComputerHashChangeFixed] = useState(false);
  let part1 = props.allPart.part1;
  let part2 = props.allPart.part2 - 50;
  let part3 = props.allPart.part3 - 50;
  let part4 = props.allPart.part4 - 50;
  let part5 = props.allPart.part5;
  // let part5 = props.allPart.part4 - 500;
  const [whichPart, setWhichPart] = useState('商品介紹');
  console.log(window.screen.height);
  window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    let nowScroll = window.scrollY;
    let screen = window.screen.height;
    // console.log(part1, part2, part3, part4);
    // 787 2478 4260 4761
    if (nowScroll < part1) {
      setSlideOut(false);
    } else if (nowScroll >= part1 && nowScroll < part2) {
      setSlideOut(true);
      setWhichPart('商品介紹');
    } else if (nowScroll >= part2 && nowScroll < part3) {
      setSlideOut(true);
      setWhichPart('注意說明');
    } else if (nowScroll >= part3 && nowScroll < part4) {
      setSlideOut(true);
      setWhichPart('體驗地點');
    } else if (nowScroll >= part4) {
      setSlideOut(true);
      setWhichPart('旅客評價');
    }
    if (nowScroll + screen > part5) {
    }
  });

  // window.addEventListener('onhashchange', () => {
  //   window.history.pushState(0, 0, window.location.origin + '/stays');
  // });
  window.onhashchange = function () {
    window.history.pushState(
      0,
      0,
      window.location.origin + window.location.pathname
    );
    // console.log(window.location);
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
            let backToTop = '#Ticket_part0';
            let str = `#Ticket_part${i + 1}`;
            return (
              <div key={i} className="Computer_HashChange">
                <a href={v === '回到頂部' ? backToTop : str}>{v}</a>
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

import React, { useState } from 'react';
import './HashChange.scss';
import { useSlideOut } from '../stays/Context/SlideOutContext';
// import { slideOut, setSlideOut } from '../Context/SlideOutContext';

function HashChange(props) {
  const hash_title = [
    '商品介紹',
    '如何使用',
    '適用店家',
    '旅客評價',
    '回到頂部',
  ];
  const { slideOut, setSlideOut } = useSlideOut();
  // const [slideOut, setSlideOut] = useState(false);
  // const [computerHashChangeFixed, setComputerHashChangeFixed] = useState(false);
  let part1 = props.allPart.part1 - 50;
  let part2 = props.allPart.part2 - 50;
  let part3 = props.allPart.part3 - 50;
  let part4 = props.allPart.part4 - 50;

  const [whichPart, setWhichPart] = useState('商品介紹');
  window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    let nowScroll = window.scrollY;
    // console.log(part1, part2, part3, part4);
    // 787 2478 4260 4761
    if (nowScroll < part1) {
      setSlideOut(false);
    } else if (nowScroll >= part1 && nowScroll < part2) {
      // setComputerHashChangeFixed(true);
      setSlideOut(true);
      setWhichPart('商品介紹');
    } else if (nowScroll >= part2 && nowScroll < part3) {
      // setComputerHashChangeFixed(true);
      setSlideOut(true);
      setWhichPart('如何使用');
    } else if (nowScroll >= part3 && nowScroll < part4) {
      // setComputerHashChangeFixed(true);
      setSlideOut(true);
      setWhichPart('適用店家');
    } else if (nowScroll >= part4 ) {
      // setComputerHashChangeFixed(true);
      setSlideOut(true);
      setWhichPart('旅客評價');
    }
  });

  // window.addEventListener('onhashchange', () => {
  //   window.history.pushState(0, 0, window.location.origin + '/stays');
  // });
  window.onhashchange = function () {
    window.history.pushState(0, 0, window.location.origin + '/food/detail');
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
            let backToTop = '#Food_part0';
            let str = `#Food_part${i + 1}`;
            return (
              <div key={i} className="Computer_HashChange">
                <a href={v === '回到頂部' ? backToTop : str}>{v}</a>
                <hr className={whichPart === v ? 'HashChange_active' : ''} />
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default HashChange;

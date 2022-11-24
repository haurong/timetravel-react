import { useState } from 'react';
import './RankChoose.scss';
function RankChoose() {
  const Rank = ['五星', '四星', '三星', '二星', '一星'];
  const [isChecked, setIsChecked] = useState(false);
  const [RankChoose, setRankChoose] = useState(0);

  return (
    <div className="RankChoose">
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <span
          className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
          // This element is purely decorative so
          // we hide it for screen readers
          aria-hidden="true"
        />
        <span>
          三星
        </span>

        {/* {Rank.map((v, i) => {
        return (
          <div
            className="Rank_button"
            key={i}
            onClick={() => {
              setRankChoose(i);
            }}
          >
            <button className={RankChoose === i ? 'rankChooseActive' : ''}>
              {v}
            </button>

          </div>
        );
      })} */}

      </label>

      




    </div>
  );
}

export default RankChoose;

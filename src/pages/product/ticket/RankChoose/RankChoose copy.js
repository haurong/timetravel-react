import React, { useState } from 'react';
import './RankChoose.scss';
function RankChoose() {
  const Rank = ['五星', '四星', '三星', '二星', '一星'];
  const [RankChoose, setRankChoose] = useState(0);
  return (
    <div className="RankChoose">
      <h2>評分</h2>
      {Rank.map((v, i) => {
        return (
          <div
            className="Rank_button"
            key={i}
            onClick={() => {
              setRankChoose(i);
            }}
          >
            <input
              type="checkbox"
              className={RankChoose === i ? 'rankChooseActive' : ''}
            />
            <span>{v}</span>
          </div>
        );
      })}
    </div>
  );
}

export default RankChoose;

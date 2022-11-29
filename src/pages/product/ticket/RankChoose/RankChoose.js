import { useState } from 'react';
import './RankChoose.scss';
function RankChoose() {
  const Rank = ['五星', '四星', '三星', '二星', '一星'];
  const [Checked, setChecked] = useState('false');
  const [RankChoose, setRankChoose] = useState('');

  return (
    <div className="RankChoose">
      {Rank.map((v, i) => {
        return (
          <div
            className="RankCheckbox"
            key={i}
            onclick={() => {
              setRankChoose(i);
            }}
          >
            <input
            // type="checkbox"
            // {className=''}
            />
          </div>
        );
      })}
    </div>
  );
}

{
  /* <label>
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
        

        
      </label>
    </div> */
}

export default RankChoose;

import React, { useState, useEffect } from 'react';
//import { FOOD_COMMIT } from '../../../config';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Rate } from 'antd';
import CommitCard from './CommitCard';
import './Commit.scss';

function Commit({ rows }) {
  console.log({rows})
  return (
    <div>
      <div className="Comment_Top">
        <span className="Comment_top_span">4.3</span>
        <div className="RateAndNumber">
          <Rate
            disabled
            defaultValue={4}
            className="TimeTravel_Rate"
            style={{ zIndex: -1 }}
          />
          <p>5555555555</p>
        </div>
      </div>

      <CommitCard rows={rows} />
    </div>
  );
}

export default Commit;

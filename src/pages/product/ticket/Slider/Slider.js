import { buildQueries } from '@testing-library/react';
import { Slider, Switch } from 'antd';
import React, { useState } from 'react';

import './Slider.scss';

const App = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <>
      <div className="col-3">
        <h2>價格</h2>
        <Slider
          className="mySlider"
          range
          max="1200"
          defaultValue={[20, 500]}
          disabled={disabled}
          // tooltipVisible={true}
          placement
          getPopupContainer
          formatter
        />
      </div>
      {/* <Slider defaultValue={30} disabled={disabled} /> */}
      {/* Disabled: <Switch size="small" checked={disabled} onChange={onChange} /> */}
    </>
  );
};
export default App;

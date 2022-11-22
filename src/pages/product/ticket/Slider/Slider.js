import React from 'react';
import './Slider.scss';
import { Slider, InputNumber } from 'antd';
// import 'antd/dist/antd.css';
class App extends React.Component {
  state = {
    min: 100,
    max: 360,
  };

  onChange = (value) => {
    if (value[0] < value[1]) {
      this.setState({ min: value[0], max: value[1] });
    }
  };

  onChangeMin = (value) => {
    if (this.state.max > value) {
      this.setState({ min: value });
    }
  };
  onChangeMax = (value) => {
    if (this.state.min < value) {
      this.setState({ max: value });
    }
  };

  onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
  };
  render() {
    const { max, min } = this.state;
    return (
      <>
        <h2>價格</h2>

        <div className="range-input-number-main">
          <InputNumber
            className="min-input-main"
            min={0}
            max={500}
            value={min}
            onChange={this.onChangeMin}
          />
          <span className="range-span"> ～ </span>
          <InputNumber
            className="min-input-main"
            min={0}
            max={500}
            value={max}
            onChange={this.onChangeMax}
          />
        </div>
        <Slider
          className="mySlider"
          min={0}
          max={500}
          onChange={this.onChange}
          range={true}
          defaultValue={[min, max]}
          value={[min, max]}
        />
      </>
    );
  }
}
export default App;

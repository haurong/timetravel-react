import React from 'react';
import Cards from 'react-credit-cards';
import './../../../../../node_modules/react-credit-cards/lib/styles.scss';
export default class CreditCard extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" className="d-flex pb-5">
        <form className="col-lg-6">
          <div className="pb-3">
            <label
              onClick={() => {
                this.setState({
                  cvc: '123',
                  expiry: '0922',
                  name: 'Yagoo Tanigo',
                  number: '5241094510777318',
                });
              }}
            >
              <p>信用卡號碼</p>
            </label>
            <input
              className="input form-control"
              type="tel"
              name="number"
              placeholder="信用卡號碼"
              value={this.state.number}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="d-flex justify-content-between pb-3">
            <label>
              <p>信用卡到期日</p>
              <input
                className="input form-control"
                type="tel"
                name="expiry"
                value={this.state.expiry}
                placeholder="有效日期"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </label>
            <label>
              <p>安全碼</p>
              <input
                className="input form-control"
                type="tel"
                name="cvc"
                value={this.state.cvc}
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </label>
          </div>

          <label>
            <p>持卡人姓名</p>
            <input
              className="input form-control pb-3"
              type="tel"
              name="name"
              value={this.state.name}
              placeholder="持卡人姓名"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </label>
        </form>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
      </div>
    );
  }
}

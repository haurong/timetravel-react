import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
export default class CreditCardInput extends React.Component {
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
      <div className="d-flex">
        <div id="PaymentForm" className="col-lg-5">
          <form>
            <div className="card-input-wrap">
              <p>持卡人姓名</p>
              <input
                className="input"
                type="tel"
                name="name"
                placeholder="需與信用卡上姓名相同"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="card-input-wrap">
              <p>持卡人卡號</p>
              <input
                className="input"
                type="tel"
                name="number"
                placeholder="請輸入12碼卡號"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="d-flex">
              <div className="card-input-wrap">
                <p>有效期限</p>
                <input
                  className="input"
                  type="tel"
                  name="expiry"
                  placeholder="西元年/月"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="card-input-wrap">
                <p>安全碼CVC</p>
                <input
                  className="input"
                  type="tel"
                  name="cvc"
                  placeholder="XXX"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
        </div>
      </div>
    );
  }
}

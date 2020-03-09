import React, { Component } from 'react'

const visaRegEx = /[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}/;
class Cart extends Component {

  state = {
    name: "xxxxx",
    cardNumber: 'xxxx xxxx xxxx xxxx' ,
    expiry: "xx/xx",
  }

  handleChange = (o) => {
  o.target.value = o.target.value.match(/^[a-zA-Z_ ]+$/, "")
    if (o.target.value.length <= 20) {
      this.setState({
        name: o.target.value.toUpperCase()
      })
    }
  }
  
 
 NumberChange = (s) => {
   s.target.value = s.target.value.replace(/\D/, "")
        this.setState({
        cardNumber : s.target.value.replace(/(\d{4})(?=\d)/g, '$1 ')
      })
    }
   date = (c) => {
    c.target.value = c.target.value.replace(/\D/, "")
      if (c.target.value.substring(0, 2) < 13)
          this.setState({
              expiry: c.target.value.slice(0, 2) + '/' + c.target.value.slice(2)
          })
  }

  render() {
    return (
      <div className="maindiv">
      < div className = "credit-card" >
      <h1 className="credit-card-title">Company Name</h1>
      <div className="credit-card-chip">
      </div>
      <div className="credit-card-content">
        <div className="credit-card-text">
          <h2 className="credit-card-number">
          <p >{this.state.cardNumber}</p>
          </h2>
          <h2 className="credit-card-valid-thru">
{this.state.expiry}
          </h2>
          <h2 className="credit-card-holder-name">
  {this.state.name}
          </h2>
        </div>
        <div className="credit-card-logo">
          <img className="imgss" src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg" />
        </div>
      </div>
    </div >

 

      <div className="inputt">
        <input maxLength='16' onChange={this.NumberChange}  placeholder=" Card number"/>
        <input maxLength='20' onChange={this.handleChange} placeholder=" Name" />
        <input maxLength='4'  onChange={this.date}  placeholder="Valid thru"/>
      </div>
      </div>
    )
  }
}
export default Cart
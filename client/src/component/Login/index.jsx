import React, { Component } from 'react';
import './style.css';
import Logo from '../Logo'

export default class Login extends Component {
    state = {
        email:'',
        password:'',
        msg:''
    }
    onSubmit = event => {
        event.preventDefault();
        console.log(event.target.email.value);
        const requestInfo = {
          emailValue: event.target.email.value,
    
          passwordValue: event.target.password.value
        }
        fetch('/login', {
          method: 'POST',
          body: JSON.stringify(requestInfo),
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res=>res.json())
        .then(({msg}) => {
         this.setState({msg:'login successfully'});
        });
    }
  render(){
      return(
         <section className="login">
             <main className="login_main">
                <div className="header_logo">
                    <Logo className="login_logo" />
                    <span className="UN">UN</span>
                    <span className="OPS">OPS</span>
                </div>
                <form onSubmit={this.onSubmit} className="login_form">
                <label htmlFor="email" className="login_label">
                    <span className="text_labelEmail">
                        Email
                        <span className="required">*</span>
                    </span>
                    <input type="email" id="email" className="login_inputEmail"/>
                </label>
                <label htmlFor="password" className="login_label">
                    <span className="text_labelPassword">
                        password
                        <span className="required">*</span>
                    </span>
                    <input type="password" id="password" className="login_inputPass"/>
                </label>
                <input type="button" className="login__submit" value="Login" />
            <span className="message">{this.state.msg}</span>
                </form>
             </main>
         </section>
      )
  }
}
import React, { Component } from 'react';
import './style.css';
import Logo from '../Logo'

export default class Login extends Component {
  render(){
      return(
         <section className="login">
             <main className="login_main">
                <div className="header_logo">
                    <Logo className="login_logo" />
                    <span className="UN">UN</span>
                    <span className="OPS">OPS</span>
                </div>
                <form action="" className="login_form">
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
                    <input type="submit"  id="submit" className="send"/>
                </form>
             </main>
         </section>
      )
  }
}
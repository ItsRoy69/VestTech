import React, { Component } from 'react';
import './styles/Account.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import { Facebook, Google, Instagram, Youtube, Twitter, Linkedin, ArrowBarUp} from 'react-bootstrap-icons';
import Navbar from './components/Navbar.js';
import Faq from './components/Faq.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import SignIn from './components/Signin.js';
import SignUp from './components/Signup.js';
import Overlay from "./components/Overlay";


class Account extends Component {
  state = { signIn: true };
  toggleFormHandle = () => { this.setState({ signIn: !this.state.signIn });
  };
  render() {
    const { signIn } = this.state;
    let greeting, msg, signBtn, formMsg;

    if (this.state.signIn) {
      formMsg = "Sign in";
      greeting = "Hello Friend!";
      msg = "Let start your journey with us";
      signBtn = "Sign up";
    }
    else {
      formMsg = "Sign up";
      greeting = "Welcome Back!";
      msg = "Log in your account";
      signBtn = "Sign in";
    }

    const textBtn = this.state.signIn ? "Sign in" : "Sign up";
    return (
      <>
        <Navbar/>
          <div className="Account">
            <div style={ signIn ? { order: 1 } : { order: 2, borderRadius: "0 10px  10px 0" }} className="app-item form-area" >
              <div className="content-wrapper">
                <h1 className="main-heading form-heading">{formMsg}</h1>
                <ul className="social-link-wrapper">
                  <li className="social-link">
                    <Facebook logo={Facebook} />
                  </li>
                  <li className="social-link">
                    <Google logo={Google} />
                  </li>
                  <li className="social-link">
                    <Linkedin logo={Linkedin} />
                  </li>
                </ul>
                {this.state.signIn ? <SignIn /> : <SignUp />}
                <div class="submitBtn btn">{textBtn}</div>
              </div>
            </div>
            <div style={ signIn ? { order: 2 } : { order: 1, borderRadius: "10px 0 0 10px" }} class="app-item overlay-area">
              <div className="content-wrapper">
                <Overlay greeting={greeting} msg={msg} signBtn={signBtn} click={this.toggleFormHandle} />
              </div>
            </div>
          </div>
          <Contact/>
          <Footer/>
      </>
    );
  }
}


export default Account;

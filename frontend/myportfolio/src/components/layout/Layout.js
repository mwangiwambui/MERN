import React, { Component } from 'react';
// import Leftside from '/Leftside';
import Header from './Header';
import { Footer } from './Footer';


// import Home from '../Home'

// import {
//   Route, Switch, Redirect
// } from 'react-router-dom';
export class Layout extends Component {
  loading = () => 
  <div className="loading">
            <div className="gooey">
              <span className="dot"></span>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
        render(){
          return (
            <div>
              <Header></Header>
              {this.props.children}
              <Footer></Footer>
            </div>
          )
        }
}
import React, { Component, Suspense } from 'react';
import Leftside from '/Leftside';
import Header from './Header';
import Footer from './Footer';
import Home from '../Home'

import {
  Route, Switch, Redirect
} from 'react-router-dom';
export class Layout extends Component {
  loading = () => 
  <div class="loading">
            <div class="gooey">
              <span class="dot"></span>
              <div class="dots">
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
              <Footer></Footer>
            </div>
          )
        }
}
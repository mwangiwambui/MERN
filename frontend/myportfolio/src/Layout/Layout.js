import React, { Component, Suspense } from 'react';
import Leftside from '/Leftside';
import Header from './Header';
import Footer from './Footer';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import Hero from '../Components/Hero';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';
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
              <Hero></Hero>
              <Services></Services>
              <Portfolio></Portfolio>
              <Blog></Blog>
              <Contact></Contact>
              <Footer></Footer>
            </div>
          )
        }
}
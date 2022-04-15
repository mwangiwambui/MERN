import  React, { Component } from 'react'

export class Footer extends Component {
  render(){
    return(
      
      <footer class="text-center bg-dark position-re">
      <div class="container">
          <a class="logo" href="#">
              <img src="/assets/img/logo-light.png" alt="logo" />          
          </a>
          
          <div class="social">
              <a href="#0"><i class="icofont icofont-social-facebook"></i></a>
              <a href="#0"><i class="icofont icofont-social-twitter"></i></a>
              <a href="#0"><i class="icofont icofont-social-instagram"></i></a>
              <a href="#0"><i class="icofont icofont-brand-linkedin"></i></a>
              <a href="#0"><i class="icofont icofont-social-behance"></i></a>
          </div>

          <p>&copy; 2018 UI-ThemeZ. All Rights Reserved.</p>

      </div>

      <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve"><path style="" d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path></svg>
  </footer>
    )
  }
}
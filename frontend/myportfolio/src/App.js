// import logo from './logo.svg';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Hero from './components/Hero';
import Blog from './components/Blog';
import {Routes, Route } from "react-router-dom";
import Contact from './components/Contact';


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route exact path="/services" element={<Services/>}></Route>
        <Route exact path="/portfolio" element={<Portfolio/>}></Route>
        <Route exact path="/blog" element={<Blog/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes> */}
      <Hero />
      <Services />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}

export default App;

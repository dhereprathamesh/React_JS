import React from 'react';
import Aboutus from './components/About-Us_page/Aboutus';
import Nav from './components/Nav/Nav';
import Description from './components/Description/Description';
import Music from './components/Malone_Music/Music';
import Counter from './Counter';
import Bulb from './components/Bulb/Bulb';

import './App.css';

function App() {
  return (
    <div className="body-div">
      <Nav/>
    <Description/>
    <Music/>
    <Aboutus/>
    {/* <Counter/> */}
    {/* <Bulb/> */}
    </div>
  );
}

export default App;


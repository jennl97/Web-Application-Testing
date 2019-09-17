import React, {useState} from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';


function App(){
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);

  let isBall = () => {
    if(ball < 4){
      return setBall(ball + 1);
    } else if (ball === 4){
     return setBall(0);
    
    }
  }

  let isStrike = () => {
    if(strike < 3){
      return setStrike(strike + 1);

    } else if (strike === 3){
      return setStrike(0);
    }
  }

  let isHit = () => {
    setHit(hit + 1);
    setStrike(0);
    setBall(0);
    return;
  }

  let isFoul = () => {
    if(strike < 2){
      setFoul(foul + 1)
      setStrike(strike + 1);
      return;
    } else if (strike === 2){
       setStrike(strike);
       setFoul(foul);
       return;
    }
  }



 
     return (
      <div className="App">
        <div>
          <Display ball = {ball} strike = {strike} hit = {hit} foul = {foul}/>
        </div>
       <div>
         <Dashboard 
          isBall = {isBall}
          isStrike = {isStrike}
          isHit = {isHit}
          isFoul = {isFoul}
         />

       </div>
      
      </div>
    );

  }

export default App;

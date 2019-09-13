import React, { useState } from 'react';



// const addHIt = hit = hit + 1; 

const Dashboard = () => {
    
    //set state
    const [strike, setStrike] = useState(0);
    const [hit, setHit] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0)
 
    return(
        <div>
            <button>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button
            onClick={() => setHit(hit + 1)}            
            >Hit</button>
        </div>
    )
}

export default Dashboard;
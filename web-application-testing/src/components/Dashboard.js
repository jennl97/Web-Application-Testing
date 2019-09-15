import React from 'react';


const Dashboard = props =>{
    console.log("Dashboard: ", props);
      return(
        <div>
                <button onClick = {() => props.isStrike()}>Strike</button>
                <button onClick = {() => props.isBall()}>Ball</button>
                <button onClick={() => props.isFoul()}>Foul</button>
                <button onClick = {() => props.isHit()}>Hit</button>
            </div>
        )
    }


export default Dashboard;
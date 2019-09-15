import React from 'react';

const Display = (props) => {
    console.log("Display: ",props);

    return(
        <div className="display_container">
            <section className="scoreboard">
                <div className="display">
                    <div className="strike">
                        <h2>STRIKE</h2>
                        <div>{props.strike}</div>
                    </div>
                    <div className="ball">
                        <h2>BALL</h2>
                        <div>{props.ball}</div>
                    </div>
                    <div className="hit">
                        <h2>HIT</h2>
                        <div>{props.hit}</div>
                    </div>
                    <div className="foul">
                        <h2>FOUL</h2>
                        <div>{props.foul}</div>
                    </div>
                </div>

            </section>

        </div>
    )

}
export default Display;
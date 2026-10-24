import React from "react";
import './inputarea.css';
import { useState } from 'react';


 function Inputarea({players,names,runs,IsDisabled,setIsDisabled,lock,setlock}){

  const[playername,setplayername]=useState([]);
  const[playersrun,setplayersrun]=useState([]);


    return(
        <div className="inputbox">
         <div className="player-inputs">
            {players.map((player, index) => (
                <div key={index} className="player-input">
                    <label>{player}:</label>
                    <input  type="string" placeholder={`Name of ${player}`}
                     disabled={IsDisabled}
                     onChange={(e) => {
                const updatedNames = [...playername];
                updatedNames[index] = e.target.value;
                setplayername(updatedNames);
              }}
                    />
                </div>
            ))}
         </div>
         <div className="submit-button">
            <button onClick={()=>{names(playername); setIsDisabled(true);setlock(false)}}>Submit names</button>
         </div>
         <div className="run-inputs">
             {players.map((player, index) => (
                <div key={index} className="run-input">
                    <label>{player}:</label>
                    <input type="number" placeholder={`runs of ${player}`}
                    disabled={lock}
                    onChange={(e)=>{
                      const updatedRuns = [...playersrun];
                      updatedRuns[index] = parseInt(e.target.value);
                      setplayersrun(updatedRuns);
                    }} />
                </div>
            ))}
         </div>
         <div className="submit-button">
            <button onClick={()=>{runs(playersrun); setlock(true);}}>Lock runs</button>
         </div>
        </div>
    )
}

export default Inputarea;
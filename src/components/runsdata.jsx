import React from "react";
import './runsdata.css';
import { useState } from 'react';


function RunsData({players,rfort,setrfort,minusplayers,setlock,sum}) {
   
 const[idx,setidx]=useState([]);
  
  function selectPlayer(index) {
     setrfort(prev =>
    prev.map((run, i) =>
      i === index ? -run : run
    ))
  }
    return (
        <div className="data-box">
            <h1>Minus players</h1>
            <div className="runs-data">
                {players.map((player, index) => (
                    <div key={index} className="run">
                            <button className="minus-button"
                                    onClick={() => { selectPlayer(index);
                                                     setidx(prev => [...prev, index])   
                                                    }}
                                      disabled={idx.includes(index)||rfort.length<4 }                
                                    style={{ backgroundColor: idx.includes(index) ? 'red' : 'lightgreen' }}
                             >{player}
                            </button>   
                    </div>
                ))}
            </div>
            <button className="minus-button" 
                          onClick={()=>{
                                minusplayers(rfort);
                                 sum(rfort);
                                  setlock(false);
                                   setidx([]);
                                   }} 
                                   disabled={rfort.length<4}
                                   >submit runs</button>
            {/* <button className="Next-match">Next Match</button> */}
        </div>
    );
}
 
export default RunsData;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Inputarea from './components/inputarea.jsx';
import RunsData from './components/runsdata.jsx';

function App() {

 const[pfort,setpfort]=useState([]);
 const [rfort,setrfort]=useState([]);
 const [players,setplayers] =useState(["Player1","Player2","Player3","Player4"]);  
 const [scoredata,setscoredata] = useState([ ]);
const [permissionforname,setpermissionforname]=useState(true);
const [permissionforrun,setpermissionforrun]=useState(false);
 const [isDisabled, setisDisabled] = useState(false);
 const[lock,setlock] = useState(true);
 const[total,settotal]=useState([0,0,0,0]);

function playername(names){
  if(!permissionforname)return;
 if(names.length==4){
     setpfort(names);
 setpermissionforname(false);
 setpermissionforrun(true);
 }
 else{
  alert("Please enter all player names");
 }
}

function playersrun(run){
  if(!permissionforrun){
    alert("Please fill the players names first");
    return;
  }
  if(run.length==4){
  setrfort(run);
}
else{
  alert("Please enter all player runs");}
}

function minusplayers(runs){
  if(rfort.length<4)return;
  setscoredata([...scoredata,runs]);
  setrfort([]);
}

function sum(rfort){
  settotal(prev =>
    prev.map((value, index) => value + Number(rfort[index]))
  );
}

  return (
    <div>
   <h1>52 cards game scorer</h1>  
      <Inputarea players={players}
                 names={playername}
                  runs={playersrun}
                   IsDisabled={isDisabled}
                    setIsDisabled={setisDisabled}
                     lock={lock}
                      setlock={setlock}
                       />
      <RunsData players={pfort}
                 rfort={rfort} 
                 setrfort={setrfort}
                  minusplayers={minusplayers}
                   setlock={setlock} sum={sum}
                     />

    
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th>{pfort.length<4 ? players[0] : pfort[0]}</th>
            <th>{pfort.length<4 ? players[1] : pfort[1]}</th>
            <th>{pfort.length<4 ? players[2] : pfort[2]}</th>
            <th>{pfort.length<4 ? players[3] : pfort[3]}</th>
          </tr>
        </thead>
        <tbody>
          {scoredata.map((run, index) => (
            <tr key={index}>
              <td>{run[0]}</td>
              <td>{run[1]}</td>
              <td>{run[2]}</td>
              <td>{run[3]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>{total[0]}</th>
            <th>{total[1]}</th>
            <th>{total[2]}</th>
            <th>{total[3]}</th>
          </tr>
        </tfoot>
      </table>
    </div>

    

    </div>
  );
}

export default App
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Rules from './components/Rules'
import Play from './components/Play';
import Game from './components/Game';


function App() {

  const [showRules,changeShowRules]=useState(false);
  const [isPlaying,setIsPlaying]=useState(false);
  const [start,setStart]=useState(false);
  const [showWinner,setShowWinner]=useState(false)

  const categories={
    Animal:["🐶","🐱","🐵","🐷"],
    Food:["🍔","🍟","🍕","🍗"],
    Sports:["⚽️","🏀","🎱","🏐"]
  }
  const [players,changePlayers]=useState({p1:"Player1",p2:"Player2"})
  const [markers,changeMarkers]=useState({p1:"",p2:[]})

  return (
    <>
     {!isPlaying && !showRules&& <Home changeShowRules={changeShowRules} setIsPlaying={setIsPlaying}/>}
     {showRules&&<Rules changeShowRules={changeShowRules}/>}
     {!start&&isPlaying&&<Play players={players} changePlayers={changePlayers} categories={categories} markers={markers} changeMarkers={changeMarkers} setStart={setStart} />}
     {!showWinner&&start && <Game players={players}  markers={markers} setShowWinner={setShowWinner}/>}
     
    </>
  )
}

export default App

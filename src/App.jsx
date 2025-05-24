import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Rules from './components/Rules'
import Play from './components/Play';


function App() {

  const [showRules,changeShowRules]=useState(false);
  const [isPlaying,setIsPlaying]=useState(false);

  return (
    <>
     {!isPlaying && !showRules&& <Home changeShowRules={changeShowRules} setIsPlaying={setIsPlaying}/>}
     {showRules&&<Rules  changeShowRules={changeShowRules}/>}
     {isPlaying&&<Play/>}
    </>
  )
}

export default App

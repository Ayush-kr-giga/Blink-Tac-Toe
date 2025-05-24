import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Rules from './components/Rules'


function App() {

  const [showRules,changeShowRules]=useState(false);

  return (
    <>
     {!showRules&& <Home changeShowRules={changeShowRules} />}
     {showRules&&<Rules  changeShowRules={changeShowRules}/>}
    </>
  )
}

export default App

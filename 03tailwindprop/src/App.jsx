import { useState } from "react";

import "./App.css";
import Card from './component/card'

function App (){
  const [count ,setCounte] = useState()
  return(
    <>
    
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test </h1>
    <br />
    <Card username = "anurag" />
    
    </>
  )
}

export default App

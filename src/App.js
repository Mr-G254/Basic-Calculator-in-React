import React from "react";
import "./App.css"
import { Input,Button } from "./Components";
import { useState } from "react";

function App() {
  var[Math,setMath] = useState("");

  function updateInput(val){
    if(Math[0]==="="){
      setMath(val);
    }else{
      setMath(Math + val);
    }
    
  }

  function clearInput(){
    setMath("");
  }

  function calculate(){
    try {
      setMath("="+eval(Math));
    } catch (error) {
      alert("Invalid Input");
      setMath("");
    }
    
  }

  return(
    <body>
      <div className="App">
      <Input value={Math}/>

      <div className="Row">
        <Button text="1" func={updateInput}/>
        <Button text="2" func={updateInput}/>
        <Button text="3" func={updateInput}/>
        <Button text="+" func={updateInput}/>
      </div>

      <div className="Row">
        <Button text="4" func={updateInput}/>
        <Button text="5" func={updateInput}/>
        <Button text="6" func={updateInput}/>
        <Button text="-" func={updateInput}/>
      </div>

      <div className="Row">
        <Button text="7" func={updateInput}/>
        <Button text="8" func={updateInput}/>
        <Button text="9" func={updateInput}/>
        <Button text="*" func={updateInput}/>
      </div>

      <div className="Row">
        <Button text="0" func={updateInput}/>
        <Button text="C" func={clearInput}/>
        <Button text="=" func={calculate}/>
        <Button text="/" func={updateInput}/>

      </div>
      </div>
    </body>
  );
}

export default App
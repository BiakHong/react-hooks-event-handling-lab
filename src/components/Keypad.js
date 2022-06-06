// Code Keypad Component Here
import react from "react";
import ReactDOM from 'react-dom';


function handleChange() {
    console.log("Entering password...");
  }

function Keypad(){
    return <input type="password"  onChange={handleChange} />
}
export default Keypad;
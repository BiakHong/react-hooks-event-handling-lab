// Code EyesOnMe Component Here
import react from "react";
import ReactDOM from 'react-dom';



function EyesOnMe(){
    return <button onBlur={()=>console.log("Hey! Eyes on me!")} onFocus={()=>console.log("Good!")}>Eyes on me</button>;
}
export default EyesOnMe;
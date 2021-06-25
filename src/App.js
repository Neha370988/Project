import { useEffect, useRef, useState } from "react";
import "./styles.css";

const App = () => {
  const [name,setName] = useState(' ');
  const inputRef= useRef()
  const renderCount = useRef(0)

  useEffect (() =>{
   renderCount.current = renderCount.current + 1
})

  

return (
  <>
    <input ref = {inputRef} value={name} onChange = {e => setName(e.target.value)}/>
    <div> I am  {name}</div>
    <div>I Rendered {renderCount.current} times </div>
    
</>
);
  };


export default App;
import "../App.css";
import {useState} from "react";
function MyButton() {
    const [count, setCount] = useState(0);
    function increment() {
        return setCount(count+10)
    }
  
  return (
    <>
          <button className="buttonExample" onClick={increment}>Clicked {count} times</button>
         
     </>
    
  );
}
export default MyButton;

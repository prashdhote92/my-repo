import './App.css';
import FontIncrementer from "./components/HOC_Component/FontIncrementer";
import Clock from "./components/Clock/Clock";
import {useState} from "react";

function App() {
  const [componentIndex, setComponentIndex] = useState(1);

    function renderSwitch(componentIndex) {

        console.log('whole page rendering...')
        switch (componentIndex) {
            case 1:
                return (<div><FontIncrementer/></div>);
            case 2:
                return (<><Clock/></>);
            default:
                setComponentIndex(1);
        }
    }
    return(
      <div>
          <button onClick={()=>{setComponentIndex(componentIndex+1)}}>Change Component</button>
        <div>
          {renderSwitch(componentIndex)}
        </div>
      </div>);
}

export default App;

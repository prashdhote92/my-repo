import {useState} from "react";

function FontIncrementer(props){
    let [fontSizeC, setFontSize]= useState(5);
    return(
        <div className="App">
        <button onClick={()=>{setFontSize(fontSizeC+10)}}>click here...</button>
            <div style={{fontSize: fontSizeC}}>Something...</div>
        </div>  
    );
}
export default FontIncrementer;
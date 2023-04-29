import {useState} from "react";

function FontIncrementerHOC(OriginalFontIncrementer, initialCount){
    return(
        function NewComponent(props){
            let [counter, setCounter] = useState(0);
            return(
                <>
                    <OriginalFontIncrementer{...props}/>
                </>
            );
        }
    );
}
export default FontIncrementerHOC;
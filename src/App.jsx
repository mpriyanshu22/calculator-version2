import styles from'./App.module.css'
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
function App() {
  let [displayValue,setDisplayValue]=useState("");
  const whenButtonClick=(buttonText)=>{
   if(buttonText==="c"){
    setDisplayValue("");
   }else if(buttonText==="="){
    const result=eval(displayValue);
    setDisplayValue(result);
   }else if(buttonText==="!"){
    setDisplayValue(displayValue.slice(0, displayValue.length-1));
    // console.log(setDisplayValue(displayValue.length));
    // setDisplayValue(displayValue.slice(0, -1));
   }
   else{
    let totalAddition=displayValue+buttonText;
     setDisplayValue(totalAddition);
   }
  };
  return (
   <div className={styles.calContainer}>
      <div className={styles.calculator}>
    <Display value={displayValue}></Display>
    <ButtonsContainer onButtonClick={whenButtonClick}></ButtonsContainer>
     </div>
   </div>
  );
}

export default App

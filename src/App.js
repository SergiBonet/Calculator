import React, { useState, useEffect, useCallback } from "react";
import './App.css'

const FormulaDisplay = ({formula})=>{
  return(
    <div className="item formula-display" > 
      <p>{formula}</p>
    </div>
  );
};
const Display = ({display})=>{
  return(
    <div className="item display" id="display">
      <p>{display}</p>
    </div>
  )
}
const ButtonAc = ({onClick })=>{
  return(
    <div className="item ac">
      <button onClick={onClick} id="clear">AC</button>
    </div>
  )
}
const ButtonDivide = ({onClick })=>{
  return(
    <div  className="item divide">
      <button onClick={onClick} id="divide">/</button>
    </div>
  )
}
const ButtonMultiply = ({onClick })=>{
  return(
    <div  className="item multiply">
      <button onClick={onClick} id="multiply">X</button>
    </div>
  )
}
const ButtonAdd = ({onClick })=>{
  return(
    <div className="item add">
      <button onClick={onClick} id="add">+</button>
    </div>
  )
}
const ButtonSubtract = ({onClick })=>{
  return(
    <div className="item substract">
      <button onClick={onClick} id="subtract">-</button>
    </div>
  )
}
const Button7 = ({onClick })=>{
  return(
    <div className="item 7">
      <button onClick={onClick} id="seven">7</button>
    </div>
  )
}
const Button8 = ({onClick })=>{
  return(
    <div className="item 8">
      <button onClick={onClick} id="eight">8</button>
    </div>
  )
}
const Button9 = ({onClick })=>{
  return(
    <div className="item 9">
      <button onClick={onClick} id="nine">9</button>
    </div>
  )
}
const Button4 = ({onClick })=>{
  return(
    <div className="item 4">
      <button onClick={onClick} id="four">4</button>
    </div>
  )
}
const Button5 = ({onClick })=>{
  return(
    <div className="item 5">
      <button onClick={onClick} id="five">5</button>
    </div>
  )
}
const Button6 = ({onClick })=>{
  return(
    <div className="item 6">
      <button onClick={onClick} id="six">6</button>
    </div>
  )
}
const Button1 = ({onClick })=>{
  return(
    <div className="item 1">
      <button onClick={onClick} id="one">1</button>
    </div>
  )
}
const Button2 = ({onClick })=>{
  return(
    <div className="item 2">
      <button onClick={onClick} id="two">2</button>
    </div>
  )
}
const Button3 = ({onClick })=>{
  return(
    <div className="item 3">
      <button onClick={onClick} id="three">3</button>
    </div>
  )
}
const Button0 = ({onClick })=>{
  return(
    <div className="item num0">
      <button onClick={onClick} id="zero">0</button>
    </div>
  )
}
const ButtonDecimal = ({onClick })=>{
  return(
    <div className="item decimal">
      <button onClick={onClick}  id="decimal">.</button>
    </div>
  )
}
const ButtonEquals = ({onClick })=>{
  return(
    <div  className="item equals">
      <button onClick={onClick} id="equals">=</button>
    </div>
  )
}
const evaluate = (formula) => {
  try {
    const func = new Function('return ' + formula);
    return func();
  } catch (error) {
    console.error("Error al evaluar la fórmula:", error);
    return "Error";
  }
};


const App = () => {
  const [formula, setFormula] = useState("");
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(null);
  
  console.log("formula:", formula)
  console.log("display:", display)

  
  const handleButtonClick = (value) => {
    switch (value) {
      case "AC":
        setFormula("");
        setDisplay("0");
        setResult(null);
        break;
      case "=":
        try {
          const result = evaluate(formula);
          setDisplay(result.toString());
          setFormula("");
          setResult(result);
        } catch (error) {
          setDisplay("Error");
        }
        break;
      case ".":
        if (["*", "/", "+", "-"].includes(formula.slice(-1))) {
          setDisplay("0" + value);
          setFormula(formula + "0" + value);
        } else {
          const lastNumber = formula.split(/[*\/+\-]/).pop();
          if (!lastNumber.includes(".")) {
            setDisplay(display + value);
            setFormula(formula + value);
          }
        }
        break;
      case "*":
      case "/":
      case "+":
      case "-":
        if (result !== null) {
          setFormula(result + value);
          setResult(null);
        } else {
          setFormula(formula + value);
        }
        setDisplay(value);
        break;
      default:
        if (formula === "0" || result !== null) {
          setFormula(value);
          setDisplay(value);
          setResult(null);
        } else {
          if (["*", "/", "+", "-"].includes(formula.slice(-1))) {
            setDisplay(value);
            setFormula(formula + value);
          } else {
            setFormula(formula + value);
            setDisplay(formula + value);
          }
        }
        break;
    }
  };
  

  return (
    <div className="calculator">
      <FormulaDisplay formula={formula}/>
      <Display display={display}/>
      <ButtonAc onClick={() => handleButtonClick("AC")}/>
      <ButtonDivide onClick={() => handleButtonClick("/")}/>
      <ButtonMultiply onClick={() => handleButtonClick("*")}/>
      <ButtonAdd onClick={() => handleButtonClick("+")}/>
      <ButtonSubtract onClick={() => handleButtonClick("-")}/>
      <Button7 onClick={() => handleButtonClick("7")}/>
      <Button8 onClick={() => handleButtonClick("8")}/>
      <Button9 onClick={() => handleButtonClick("9")}/>
      <Button4 onClick={() => handleButtonClick("4")}/>
      <Button5 onClick={() => handleButtonClick("5")}/>
      <Button6 onClick={() => handleButtonClick("6")}/>
      <Button1 onClick={() => handleButtonClick("1")}/>
      <Button2 onClick={() => handleButtonClick("2")}/>
      <Button3 onClick={() => handleButtonClick("3")}/>
      <Button0 onClick={() => handleButtonClick("0")}/>   
      <ButtonDecimal onClick={() => handleButtonClick(".")}/>
      <ButtonEquals onClick={() => handleButtonClick("=")}/>
      
    </div>
  );
};
export default App
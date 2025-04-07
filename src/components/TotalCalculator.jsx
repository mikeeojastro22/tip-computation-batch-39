import TipRateSelector from "./TipRateSelector";
import "./TotalCalculator.css";
// 3. What is useState?
import { useState } from 'react';

// 4. What do we call this type of component?
// 5. If we want to use this component in other files, how do we do it?
function TotalCalculator() {
    // 6. For the declaration below, explain total and setTotal
    const [total, setTotal] = useState(0); 
    const [tipComputation, setTipComputation] = useState(0); 

    // 7. What is the initial value of tipRate?
    const [tipRate, setTipRate] = useState(0.1); 
    const [errorMessage, setErrorMessage] = useState(''); 

    // 8. What does this function do?
    const handleTipRate = (event) => {
        setTipRate(event.target.value);
    }

    // 9. What does this function do?
    const handleTotal = (event) => {
        event.preventDefault();
        setErrorMessage(null);
        // 10. What do these conditions mean?
        if(total.length <= 7 && Number(total)){
            // 11. What does this function call do?
            setTipComputation(total * tipRate);
        } else if (total.length > 7){
            // 12. What does this function call do?
            setErrorMessage("Maximum of 7 digits only");
        }
    }

    return (
        <div className="calculator-style">
            <h1>Tip Calculator</h1>
            <h2>Tip Rate Result: {tipComputation}</h2>
            {/* 
                13. Why do we need to place the values in curly braces {}?
            */}
            <h2>Total Result: {Number(tipComputation) + Number(total)}</h2>
            <span>Total Bill:</span>
            {/* 
                14. What does this input element do?
            */}
            <input className="input-style" onChange={(event)=>setTotal(event.target.value)} type="text" placeholder="0" value={total}></input>

            {/* 
                15. What does this component do?
                16. What is handleOnChange for this component?
            */}
            <TipRateSelector handleOnChange={handleTipRate} />

            <div className="button-style">
                {/* 
                    17. What does this button do?
                */}
                <button onClick={handleTotal} type="button">Calculate my bill</button>
            </div>

            {/* 
                18. Yes or No. Do we always display an errorMessage?
            */}
            <div className="error-color">
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default TotalCalculator;

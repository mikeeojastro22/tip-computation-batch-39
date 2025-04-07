import TipRateSelector from "./TipRateSelector";
import "./TotalCalculator.css";
// 3. What is useState? a react hook that gives state to your variables
import { useState } from 'react';

// 4. What do we call this type of component? Functional component
// 5. If we want to use this component in other files, how do we do it? Use the export keyword
function TotalCalculator() {
    // 6. For the declaration below, explain total and setTotal 
    // total - the variable to be used
    // setTotal - function for changing the value of total
    const [total, setTotal] = useState(0); 
    const [tipComputation, setTipComputation] = useState(0); 

    // 7. What is the initial value of tipRate? 0.1
    const [tipRate, setTipRate] = useState(0.1); 
    const [errorMessage, setErrorMessage] = useState(''); 

    // 8. What does this function do? When this function is called, it sets the value of tipRate given user input
    const handleTipRate = (event) => {
        setTipRate(event.target.value);
    }

    // 9. What does this function do? When this function is called, it computes for the total; adding the bill and the tip. It also checks if the input length for the bill is less than 7.
    const handleTotal = (event) => {
        event.preventDefault();
        setErrorMessage(null);
        // 10. What do these conditions mean? total should be less than or equal to 7 and total should have a value
        if(total.length <= 7 && Number(total)){
            // 11. What does this function call do? - sets the value of the variable tipComputation
            setTipComputation(total * tipRate);
        } else if (total.length > 7){
            // 12. What does this function call do? - sets the value of the variable errorMessage
            setErrorMessage("Maximum of 7 digits only");
        }
    }

    return (
        <div className="calculator-style">
            <h1>Tip Calculator</h1>
            <h2>Tip Rate Result: {tipComputation}</h2>
            {/* 
                13. Why do we need to place the values in curly braces {}? Because it uses a variable and there is a computation (addition)
            */}
            <h2>Total Result: {Number(tipComputation) + Number(total)}</h2>
            <span>Total Bill:</span>
            {/* 
                14. What does this input element do? Gets user input for total variable
            */}
            <input className="input-style" onChange={(event)=>setTotal(event.target.value)} type="text" placeholder="0" value={total}></input>

            {/* 
                15. What does this component do? Retrieves or shows the select element
                16. What is handleOnChange for this component? Props
            */}
            <TipRateSelector handleOnChange={handleTipRate} />

            <div className="button-style">
                {/* 
                    17. What does this button do? This triggers the handleTotal function when clicked
                */}
                <button onClick={handleTotal} type="button">Calculate my bill</button>
            </div>

            {/* 
                18. Yes or No. Do we always display an errorMessage? Yes, empty string if not updated
            */}
            <div className="error-color">
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default TotalCalculator;

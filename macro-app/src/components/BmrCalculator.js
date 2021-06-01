import React from 'react'


const BmrCalculator = (props) => {
    const menBmr = 88.362 +(13.397 * ('weight in kg'))+(4.799 * ('height in cm'))-(5.677 * ('age in years'))
    const womanBmr = 447.593 + (9.247 * ('weight in kg')) + (3.098 * ('height in cm')) - (4.330 * ('age in years'))
    return (

        <div>
           <form method='post' action='#' name='bmrform'>
               <fieldset>
                   <legend>BMR CALCULATOR</legend>
                   <label for=''>enter weight in kgs:</label>
                   <input type='text' id='weight' value=''size='20'placeholder='Enter weight in kgs' name='weight' required></input>
                   <br></br>
                    <label for=''>Enter height in cms:</label>
                    <input type='text' id='height' value=''size='20'placeholder='Enter height in cms' name='height' required></input>
                   <br></br>
                    <label for=''>Enter age in years:</label>
                    <input type='text' id='age' value=''size='20'placeholder='Enter age in years' name='age' required></input>
                   <br></br>
                    <input type='reset' value='reset'></input>
                    <input type='button' value='calculate BMR' onClick={calcBMR()} id='calc'></input>
                   <br></br>
                    <label for=''>BMR: </label>
                    <input type='text' value=''size='20'placeholder='result - bmr' name='bmr' id='bmr' readOnly></input>

               </fieldset>
           </form>
        </div>
    )
}
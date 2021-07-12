import React, {useState} from 'react'


const BmrCalculator = (props) => {
    // const menBmr = 88.362 +(13.397 * (formData.weight))+(4.799 * (formData.height))-(5.677 * (formData.age))
    // const womanBmr = 447.593 + (9.247 * ('weight in kg')) + (3.098 * ('height in cm')) - (4.330 * ('age in years'))

    const [bmr, setBMR] = useState(0)

    const [formData, setFormData] = useState({
        weight: null, 
        height: null, 
        age: null
    })

    const handleChange = (e) => { 
        const name = e.target.name
        setFormData({ 
            ...formData,
            [name]: e.target.value
        }) 
    }

    const handleSubmit = () => { 
        if (document.getElementById("Female").checked){
            const womanBmr = 447.593 + (9.247 * (formData.weight)) + (3.098 * (formData.height)) - (4.330 * (formData.age))
            setBMR(Math.round(womanBmr))
        }
        else if (document.getElementById("Male").checked){
        const menBmr = 88.362 +(13.397 * (formData.weight))+(4.799 * (formData.height))-(5.677 * (formData.age))
        setBMR(Math.round(menBmr))
        }
        console.log(bmr)
    }

    return (


        <div>
           <form method='post' action='#' name='bmrform'>
               <fieldset>
                   <legend>BMR CALCULATOR</legend>
                   <label for='weight'>Weight:</label>
                   <input onChange={handleChange} type='number' id='weight' value={formData.weight} size='20' placeholder='kilograms' name='weight' required></input>
                   <br></br>
                    <label for='height'>Height:</label>
                    <input onChange={handleChange} type='number' id='height' value={formData.height}size='20'placeholder='centimeters' name='height' required></input>
                   <br></br>
                    <label for='age'>Age:</label>
                    <input onChange={handleChange} type='number' id='age' value={formData.age}size='20'placeholder='years' name='age' required></input>
                   <br></br>
                    <input type="checkbox" id="Female" name="Female" ></input>
                    <label for="Female">Female</label>
                    <br></br>
                    <input type="checkbox" id="Male" name="Male" ></input>
                    <label for="Male">Male</label>
                    <br></br>
                    <input type='button' value='calculate BMR'  id='calc' onClick={handleSubmit}></input >
                   <br></br>
                    <label for='button'>BMR: {bmr} Calories/day</label>
                    

               </fieldset>
           </form>
        </div>
    )
}
export default BmrCalculator 
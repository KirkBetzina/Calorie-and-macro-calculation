import React, {useState} from 'react'


const BmrCalculator = (props) => {
    // const menBmr = 88.362 +(13.397 * (formData.weight))+(4.799 * (formData.height))-(5.677 * (formData.age))
    const womanBmr = 447.593 + (9.247 * ('weight in kg')) + (3.098 * ('height in cm')) - (4.330 * ('age in years'))

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
        const menBmr = 88.362 +(13.397 * (formData.weight))+(4.799 * (formData.height))-(5.677 * (formData.age))
        setBMR(menBmr)
    }

    return (


        <div>
           <form method='post' action='#' name='bmrform'>
               <fieldset>
                   <legend>BMR CALCULATOR</legend>
                   <label for='weight'>enter weight in kgs:</label>
                   <input onChange={handleChange} type='number' id='weight' value={formData.weight} size='20' placeholder='Enter weight in kgs' name='weight' required></input>
                   <br></br>
                    <label for='height'>Enter height in cms:</label>
                    <input onChange={handleChange} type='number' id='height' value={formData.height}size='20'placeholder='Enter height in cms' name='height' required></input>
                   <br></br>
                    <label for='age'>Enter age in years:</label>
                    <input onChange={handleChange} type='number' id='age' value={formData.age}size='20'placeholder='Enter age in years' name='age' required></input>
                   <br></br>
                    <input type='button' value='calculate BMR'  id='calc' onClick={handleSubmit}></input >
                   <br></br>
                    <label for='button'>BMR: {bmr} </label>
                    

               </fieldset>
           </form>
        </div>
    )
}
export default BmrCalculator 
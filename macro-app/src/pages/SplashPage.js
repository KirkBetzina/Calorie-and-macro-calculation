import { Button } from 'reactstrap'
import React from 'react'

const SplashPage = (props) => {
    return(
        <div className='splashPage'>
            <h1>The fitness industry will HATE this App</h1>  
            <p>This is desinged for every person at every level of fitness. From the beginner just making their first steps in getting control of their fitness, or the person that has been looking for a better way to automate their diet to achieve their goals.</p>
            <p>How it works: Input your information into our form, it will calculate your BMR and then it will give you a few options to choose from. Caloric deficit, maintenance, or caloric surplus. These dietary guidlines are designed specifically for you and will only work for you since its based off your own Base Metabolic Rate.</p>   

            <Button color="danger" size="lg">Sign Up Now</Button>{''} 
            
        </div>
    )
}
export default SplashPage
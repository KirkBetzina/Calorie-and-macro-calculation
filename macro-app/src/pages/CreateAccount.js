import React, { Component } from 'react'
import CreateAccountForm from '../Component/CreateAccountForm'

const CreateAccount = (props) => {
    return(
        <div>
            <CreateAccountForm />
            <h1>This is the creat account form this is where ther user will create account credentials, plug in bmr info to lock that into the users account.</h1>
        </div>
    )
}
export default CreateAccount
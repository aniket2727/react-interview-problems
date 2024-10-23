

import React from 'react'

const Form2 = (data) => {

    const error={}
    if(!data.name){
        error.name="name is empty"
    }

    if(!data.email){
         error.email="email is empty"
    }


    return error;

}

export default Form2

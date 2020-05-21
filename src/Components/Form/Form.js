import React from 'react';
import {
  TextInput,
} from 'react-native'

import Styles from './Styles';

const Form = () => {
    return(
        <TextInput 
            style={Styles.form} 
            placeholder='Number of a user'
        />
    )
}

export default Form;

import React, { Fragment, useState } from 'react';
import {
  TextInput,
  Text,
  Button,
  View
} from 'react-native'

import Styles from './Styles';

const Form = () => {
    const [userId, setUserId] = useState();

    const clickHandler = () => {
        // calls external API here or pass the state to another component
    }

    return(
        <Fragment>
            <Text style={Styles.formLabel}>
                Type a number of a user or leave it empty to search multiple users
            </Text>
            <TextInput 
                style={Styles.form}
                autoFocus
                keyboardType='numeric' 
                placeholder='Number here!'
                onChangeText={ (text) => setUserId(text) }
            />
            <View style={Styles.buttonWrapper}>
                <Button title="submit" onPress={clickHandler}/>
            </View>
        </Fragment>
    )
}

export default Form;

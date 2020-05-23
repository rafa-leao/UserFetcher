import React, { Fragment, useState } from 'react';
import {
  TextInput,
  Text,
  Button,
  View,
  Image
} from 'react-native'

import Styles from './Styles';
import { fetchUser } from '../../Services/api';

const Form = () => {
    const [userId, setUserId] = useState();
    const [usersFetched, setUsersFetched] = useState();

    async function clickHandler() {
        const response = await fetchUser(userId);
        setUsersFetched(response.data);
    }

    const renderUser= () => {
        return (
            <View style={Styles.userWrapper}>
                <Image
                    source={{ uri: usersFetched.avatar }}
                    style={Styles.avatar}
                />
                <Text> { `${usersFetched.first_name} ${usersFetched.last_name}` } </Text>
                <Text> { usersFetched.email } </Text>
            </View>
        );
    }

    return(
        <Fragment>
            <Text style={Styles.formLabel}>
                Type a number of a user
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
            { usersFetched != undefined ? renderUser() : null }
        </Fragment>
    )
}

export default Form;

import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    form: { 
        height: 40, 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },

    formLabel: {
        fontSize: 20,
        textAlign: "center",
        padding: 20
    },

    buttonWrapper: {
        marginTop: 15,
        marginRight: 80,
        marginLeft: 80
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 10
    },

    userWrapper: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        marginTop: 40,
        marginLeft: 80,
        marginRight: 80
    }
});

export default Styles;

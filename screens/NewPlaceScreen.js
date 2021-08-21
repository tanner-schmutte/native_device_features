import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/actions/places'

const NewPlaceScreen = (props) => {
    const [titleValue, setTitleValue] = useState('');

    const dispatch = useDispatch()

    const titleChangeHandler = (text) => {
        setTitleValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue))
        props.navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                />
                <Button
                    title="Save Place"
                    color={Colors.primary}
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place',
};

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    textInput: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
});

export default NewPlaceScreen;

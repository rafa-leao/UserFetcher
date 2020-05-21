import React, { Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Header } from './src/Components/Header';
import { Form }  from './src/Components/Form';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Header/>
            <Form/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

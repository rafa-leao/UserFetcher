import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Cabecalho } from './src/Components/Cabecalho';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Cabecalho/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

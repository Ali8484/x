import React from 'react';
import {Text , View , Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

const HomeScreen =({navigation}) => (
  <View>
    <Text>
      This is the Home screen
      </Text>
      <Button 
       onPress={() => navigation.navigate('Details')}
       title='PRESS HERE'
      />
    </View>
);
const DetailsScreen =() => (
  <View>
    <Text>
      This is the Details Screen
      </Text>
    </View>
);

const Root =StackNavigator ({
  Home : {
    screen : HomeScreen ,
    navigationOptions:{
      headerTitle : 'Homy',
    },
  },

  Details : {
    screen : DetailsScreen ,
    navigationOptions :{
      headerTitle : 'Detaily'
    },
  },
});
export default Root ;
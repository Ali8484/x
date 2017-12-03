import React , {Component}  from 'react' ;
import {AppRegistry, Text , View , Button } from 'react-native' ;
import {StackNavigator} from 'react-navigation';

export default class no extends Component{
    render(){
       return(
//const HomeScreen =({navigation}) => (
    <View>
        <Text>
        This is the Home maaan!
            </Text>
            <Button onPress={() => navigation.navigate('Details')}
            title="PUSH IT"
            />
        </View>
//);
       );
   }
}
AppRegistry.registerComponent('no' ,()=> no);

const DetailsScreen =() => (
    <View>
        <Text>
            This is the Details screen
            </Text>
        </View>
);
const Root= StackNavigator ({
    Home : {
        screen : HomeScreen ,
        navigationOptions: {
            headerTitle : "Homy "
        },
    },
    Details : {
        screen : DetailsScreen ,
        navigationOptions: {
            headerTitle : "Detaily "
        },
    },
});
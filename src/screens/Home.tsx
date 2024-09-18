import { StatusBar } from "expo-status-bar";
import {Text,  StyleSheet, View} from 'react-native';
import Header from "../componets/Header";


export default function Home() {
    return(
    <View style={homeStyle.container}>
        <Header />
      <Text style={homeStyle.text}>Hello world
      </Text>
      <StatusBar style="light"/>
    </View>

    );
}
const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{

      backgroundColor:'#000',
      color:'#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
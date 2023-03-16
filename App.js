import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReduxApp from './basics/screens/ReduxApp';


export default function App() {
  return (
    <View style={styles.container}>
      <ReduxApp/>
      <Text>hello</Text>
      {/* <CrudApp/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <HomeScreen user={{role: 'student'}} />
    </SafeAreaView>
  );
};

export default App;

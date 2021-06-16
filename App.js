/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Container, Header, Content, Button } from 'native-base'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

const App: () => Node = () => {
 

  return (
    
      <>
      <Text>here reat</Text>
        <Container> 
          <Header /> 
          <Content> 
            <Button> 
              <Text>Click Me!</Text> 
            </Button> 
            
          </Content> 
        </Container> 
      </>

  );
};


export default App;

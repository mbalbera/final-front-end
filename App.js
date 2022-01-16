import React from "react";
import AppNavigator from './navigation/AppNavigator';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
console.disableYellowBox = true

class App extends React.Component {

  render(){
    return(
        <RecoilRoot>
          <AppNavigator/>
        </RecoilRoot>
    )}
}

export default App

import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from './reducers/index'
import { Provider } from "react-redux";
import AppNavigator from './navigation/AppNavigator';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));
function App() {
  return(

    <Provider store={store}>
        <AppNavigator />
    </Provider>
    )
}

export default App

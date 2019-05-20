import * as React from "react";
import { Provider } from "react-redux";

import configureStore from "./configStore";
import AppNavigator from "./navigator";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;

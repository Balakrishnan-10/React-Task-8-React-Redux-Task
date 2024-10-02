import React from "react";
import { Provider } from "react-redux";
import Card from "./Components/Card";
import ProductStore from "./Features/ProductStore";

const App = () => {
  return (
    <Provider store={ProductStore}>
      <Card />
    </Provider>
  );
};

export default App;

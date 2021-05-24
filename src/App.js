import "./App.css";

import { Provider } from "react-redux";
import Store from "./redux/store";
import IcecreamContainer from "./components/IcecreamContainer";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <CakeContainer />
        <IcecreamContainer />
      </Provider>
    </div>
  );
}

export default App;

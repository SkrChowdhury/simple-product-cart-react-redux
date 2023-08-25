import "./App.css";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Page from "./components/Page";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  );
}

export default App;

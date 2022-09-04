import logo from "./logo.svg";
import "./App.css";
import { Header, Body, Brands, Services } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="App_bg">
        <Header />
        <Body />
        <Brands />
        <Services />
      </div>
    </div>
  );
}

export default App;

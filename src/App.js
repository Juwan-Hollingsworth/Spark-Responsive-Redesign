import logo from "./logo.svg";
import "./App.css";
import { Header, Banner, Footer, Body } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="App_bg">
        <Header />
        <Banner />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// site color scheme: purple #39175d, blue #00e6c3

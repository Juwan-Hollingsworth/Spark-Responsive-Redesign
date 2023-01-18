import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  Body,
  Brands,
  Services,
  Testimonial,
  CTA,
  Blog,
} from "./containers";
import { Page_Break } from "./component";

function App() {
  return (
    <div className="App">
      <div className="App_bg">
        <Header />
        <Body />
        <Brands />
        <Page_Break />
        <Services />
        <Page_Break />
        <Testimonial />
        <Page_Break />
        <CTA />
        <Page_Break />
        <Blog />
        <Page_Break />
      </div>
    </div>
  );
}

export default App;

// site color scheme: purple #39175d, blue #00e6c3

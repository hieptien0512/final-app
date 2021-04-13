import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Ninety Nine Cycle
            </a>
          </div>
          <div>
            <a href="/card">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserve</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

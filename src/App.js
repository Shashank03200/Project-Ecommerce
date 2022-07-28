import "./App.css";
import Layout from "./components/Layout.js/Layout";
import Router from "./components/Router/Router";
import Team from "./pages/Team";

import CartContextProvider, { CartContext } from "./context/cart-context";

function App() {
  return (
    <div className="App">
      <Layout>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </Layout>
    </div>
  );
}

export default App;

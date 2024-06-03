import { useEffect, useState } from "react";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RoutesMap from "./routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const linksList = ["/", "/home", "/login", "/about", "/products"];
  // const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const productsCardList = JSON.parse(localStorage.getItem("cart"));
      let tQty = 0;
      productsCardList.map((item) => {
        tQty += item.qty;
      });
      // setTotalQty(tQty);
    }
  }, []);

  const manageTotalQty = () => {
    // setTotalQty(totalQty + 1);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar links={linksList} 
        // totalQty={totalQty}
         />
        <RoutesMap manageTotalQty={manageTotalQty} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/// state management
//// useContext
/// redux  redux/toolkit
// form
// vite
// code review
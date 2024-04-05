import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./assets/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";
// import { MoneyContext } from "./components/Grandpa/Grandpa";
// import { Toaster } from 'react-hot-toast'
// import { Toaster } from 'react-hot-toast';

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);


function App() {
  // const name = 'ripon';

  const [money, setMoney] = useState(0);
  return (
    <div>
      <RingContext.Provider value="Golden Ring">
        <MoneyContext.Provider value={[money, setMoney]}>
          <Header />
          <Outlet />
          <Toaster />
          <Footer />
        </MoneyContext.Provider>
      </RingContext.Provider>
    </div>
  );
}

export default App;

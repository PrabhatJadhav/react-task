import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Account from "./Components/Account.js";
import Documentation from "./Components/Documentation.js";
import Landings from "./Components/Landings.js";
import Pages from "./Components/Pages.js";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import SelectionWidget from "./Components/SelectionWidget";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="accounts" element={<Account />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="landings" element={<Landings />} />
        <Route path="pages" element={<Pages />} />
        <Route
          path="buynow"
          element={
            <SelectionWidget
              props1={["Red", "Blue", "Green"]}
              props2={["Small", "Medium", "Large", "Extra Large"]}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

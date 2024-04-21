import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNewUser from "./components/NewUser/NewUser.jsx";
import SingleCustomer from "./components/SingleCustomer/SingleCustomer.jsx";
import Home from "./components/HomePage/HomePage.jsx";
import Update from "./components/UpdateUser/Update.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateNewUser />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
        <Route path="/view/:id" element={<SingleCustomer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import MainRoute from "./layouts/MainRoute";
import ProtectedRoute from "./layouts/ProtectedRoute";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LoginFormModel from "./model/LoginFormModel";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainRoute />}>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
      <LoginFormModel />
    </BrowserRouter>
  );
}

export default App;

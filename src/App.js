import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignUp from "./Forms/SignUp";
import Login from "./Forms/Login";
import Cart from "./Cart";
import Header from "./Header";
import { AuthContext } from "./Forms/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const isHeaderVisible = !["/login", "/signup"].includes(
    window.location.pathname
  );

  return (
    <Router>
      {isHeaderVisible && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AuthRoute>
                <Sidebar />
              </AuthRoute>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

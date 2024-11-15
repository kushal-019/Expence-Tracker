import { Route, Routes } from "react-router-dom";
import Transaction from "./Pages/Transaction";
import Navbar from "./Components/Navbar";
import DashBoard from "./Pages/DashBoard";
import HomePage from "./Pages/HomePage";
import Context from "./Context/Context";
import { useContext } from "react";
import { ProtectedRouteForUser } from "./Components/ProtectedRouteForUser";

function App() {

  const context = useContext(Context);
  const { isLoggedIn } = context;

  return (
    <>
      {
        isLoggedIn &&
        <Navbar />
      }

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route path="/dashboard" element={
          // <ProtectedRouteForUser>
            <DashBoard />
          // </ProtectedRouteForUser>

        } />
        <Route path="/Transaction" element={
          // <ProtectedRouteForUser>
            <Transaction />
          // </ProtectedRouteForUser> 
        } />
      </Routes>
    </>
  );
}

export default App



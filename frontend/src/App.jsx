import { Route ,Routes } from "react-router-dom";
import Transition from "./Components/Transition";
import Navbar from "./Components/Navbar";
import DashBoard from "./Pages/DashBoard";
import HomePage from "./Pages/HomePage";
import Context from "./Context/Context";
import { useContext } from "react";

function App() {

  const context = useContext(Context);
  const {isLoggedIn} = context;

  return (
    <>
    {
      isLoggedIn && 
      <Navbar/>
    }
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/transition" element={<Transition/>} />
      </Routes>
    </>
  );
}

export default App

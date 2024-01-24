import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Toaster } from "react-hot-toast";
import Sales from "./Pages/Sales";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales/>}/>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

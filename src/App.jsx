import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/routes/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

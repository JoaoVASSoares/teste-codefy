import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import FPageTitleUpdater from "./layout/FPageTitleUpdater";
import Episodes from "./pages/Episodes/Episodes";

function App() {
  return (
    <>
      <FPageTitleUpdater />
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

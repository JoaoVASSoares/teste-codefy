import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Character from "./pages/Character/Character";
import FPageTitleUpdater from "./layout/PageTitileUpdater.tsx/FPageTitleUpdater";
import Episodes from "./pages/Episodes/Episodes";
import Characters from "./pages/Characters/Characters";

function App() {
  return (
    <>
      <FPageTitleUpdater />
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

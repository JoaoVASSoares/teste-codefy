import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Character from "./pages/Character/Character";
import FPageTitleUpdater from "./layout/PageTitileUpdater.tsx/FPageTitleUpdater";
import Episodes from "./pages/Episodes/Episodes";
import Characters from "./pages/Characters/Characters";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <FPageTitleUpdater />
      <NavBar isChecked={isChecked} setIsChecked={setIsChecked} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/episodes" element={<Episodes isChecked={isChecked} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

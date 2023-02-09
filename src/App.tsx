import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from './components/Loader';
import { CharacterPageAsync } from './pages/CharacterPage/CharacterPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/character/:id" element={<CharacterPageAsync />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

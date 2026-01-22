import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import OurDogs from "./pages/OurDogs";
import NotFound from "./pages/NotFound";
import BecomeAPart from "./pages/BecomeAPart";
import DonatePage from "./pages/DonatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="ourdogs" element={<OurDogs />} />
            <Route path="becomeapart" element={<BecomeAPart />} />
            <Route path="donate" element={<DonatePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

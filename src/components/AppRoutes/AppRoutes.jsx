import { Route, Routes } from "react-router-dom";
import Me from "../../pages/Me/Me";
import Mom from "../../pages/Mom/Mom";
import Dad from "../../pages/Dad/Dad";
import MainPage from "../../pages/MainPage/MainPage";
import "./AppRoutes.css";
const AppRoutes = () => {
  return (
    <>
      <Routes className="nav">
        <Route path="me" element={<Me />} />
        <Route path="/" element={<MainPage />} />
        <Route path="mom" element={<Mom></Mom>} />
        <Route path="dad" element={<Dad></Dad>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

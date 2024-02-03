import { Route, Routes } from "react-router-dom";
import Me from "../Me/Me";
import Mom from "../Mom/Mom";
import Dad from "../Dad/Dad";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="me" element={<Me />} />
        <Route path="mom" element={<Mom></Mom>} />
        <Route path="dad" element={<Dad></Dad>} />
      </Routes>
    </>
  );
};

export default AppRoutes;

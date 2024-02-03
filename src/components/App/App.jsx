import { useState } from "react";
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";


function App() {
  return (
    <div>
      <AppRoutes>
        <Header/>
      </AppRoutes>
    </div>
  );
}

export default App;

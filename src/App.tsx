import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <Suspense fallback={<div className="p-4">Carregando...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

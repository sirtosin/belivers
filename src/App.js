
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./error/errorBoundary";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#dfdfdf] h-screen -mt-4">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Suspense fallback={'loading...'}>
                  <Login />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/home"
            element={
              <ErrorBoundary>
                <Suspense fallback={'loading...'}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

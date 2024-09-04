import { lazy } from "react";
import "./styles/main.css";

const HomePage = lazy(() => import("./pages/home/index"));


function App() {
  return (
    <>
      <main className="web-container">
        <HomePage />
      </main>
    </>
  )
}

export default App

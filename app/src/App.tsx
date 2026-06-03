import { useState, useCallback } from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Featured from "./pages/Featured";
import Index from "./pages/Index";
import About from "./pages/About";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoadComplete} />}
      {loaded && (
        <Layout>
          <Routes>
            <Route path="/" element={<Featured />} />
            <Route path="/work" element={<Index />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

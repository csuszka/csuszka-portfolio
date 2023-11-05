import { useEffect } from "react";
import "./App.css";
import { usePageState } from "./context/page-state-context";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  const [pageState] = usePageState();

  useEffect(() => {
    console.log(pageState.value);
  }, [pageState]);

  return (
    <>
      <Header />
      {pageState.matches("about") ? (
        <About />
      ) : pageState.matches("projects") ? (
        <Projects />
      ) : pageState.matches("experience") ? (
        <Experience />
      ) : pageState.matches("contact") ? (
        <Contact />
      ) : (
        <div>Érvénytelen állapot</div>
      )}
    </>
  );
}

export default App;

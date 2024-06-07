import "./App.css";
import { About } from "./components/About/about";
import { Contacts } from "./components/Contacts/contacts";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { Projects } from "./components/Projects/projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

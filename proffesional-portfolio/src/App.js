import './App.css';

// For bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the components : 
import { NavBar } from './Components/NavBar/NavBar'
import { Banner } from './Components/Banner/Banner'
import { Skills } from './Components/Skills/Skills'
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

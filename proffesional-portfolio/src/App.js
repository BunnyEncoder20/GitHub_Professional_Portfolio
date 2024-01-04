import './App.css';

// For bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the components : 
import { NavBar } from './Components/NavBar/NavBar'
import { Banner } from './Components/Banner/Banner'
import { Banner } from './Components/Skills/Skills'

function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <Skills />

    </div>
  );
}

export default App;

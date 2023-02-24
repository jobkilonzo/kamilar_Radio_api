import NavBar from './component/NavBar.js';
import Home from './component/Home.js';
import './App.css';
import PlayRadio from './component/PlayRadio.js';


// app.use(cors())

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Home />
      <PlayRadio/>
    </div>
  );
}

export default App;

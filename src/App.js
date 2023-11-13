import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Players from './components/Players';
import Navbarr from './components/Navbarr';

function App() {
  return (
    <div className="App">
    <Navbarr/>
      <Players/>
    </div>
  );
}

export default App;

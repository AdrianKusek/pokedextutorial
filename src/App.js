import logo from './logo.svg';
import './App.css';
import Dog from './Dog';
import pup from './imgs/pup.jpg';

function App() {
  return (
    <div className="App">
     <Dog/>
     <img src={pup}/>
    </div>
  );
}

export default App;

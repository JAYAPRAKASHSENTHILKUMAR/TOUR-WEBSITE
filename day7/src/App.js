
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <h1>Condetional Rendering</h1>
      <Greeting isLoggedIn={true}/>
      </div>
      
  );
}

export default App;

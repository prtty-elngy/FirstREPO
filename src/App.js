import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Welcome from './component/Welcome';
import Great from './component/Great';

function App() {
  return (
    <div className="App">
    { /* <Great />
     <Welcome /> */}
     <Navbar />
    </div>
  );
}

export default App;

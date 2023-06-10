import logo from './logo.svg';
import './App.css';
// import ProductList from './components/project1/ProductList/ProductList';
import TimersDashboard from './components/Project2/TimersDashboard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ProductList/> */}
        <TimersDashboard />
      </header>
    </div>
  );
}

export default App;

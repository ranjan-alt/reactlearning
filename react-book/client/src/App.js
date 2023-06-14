import logo from './logo.svg';
import './App.css';
import Form from './components/Project3/UsingImmer';
// import Gallery from './components/Project3/UpdatingObjectsInState';
// import ProductList from './components/project1/ProductList/ProductList';
// import TimersDashboard from './components/Project2/TimersDashboard';
import BucketList from './components/Project3/UpdatingArrayInState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ProductList/> */}
        {/* <TimersDashboard /> */}
        {/* <Gallery /> */}
        {/* <Form /> */}
        <BucketList />
      </header>
    </div>
  );
}

export default App;

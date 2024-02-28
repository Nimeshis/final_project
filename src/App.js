import Navigation from "./costumer/components/Navigation/Navigation";
import "./App.css";
import HomePage from "./costumer/components/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;

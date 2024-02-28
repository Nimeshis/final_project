import Navigation from "./costumer/components/Navigation/Navigation";
import "./App.css";
import Footer from "./costumer/components/Footer/Footer";
import HomePage from "./costumer/components/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;

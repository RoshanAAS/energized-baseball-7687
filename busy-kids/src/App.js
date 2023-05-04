// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import MainRoutes from "./Components/MainRoutes";
import Navbar from "./Components/Navbar";
// import { Calculator } from "./Pages/calculator";
function App() {
  return <div className="App">
    <Navbar />
    {/* <Calculator/> */}
    <MainRoutes />
    <Footer />
  </div>;
}

export default App;

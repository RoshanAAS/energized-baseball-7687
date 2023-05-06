import "./App.css";

import SignupCard from "./Components/authcom/signup/Signup";
// import Pricing from "./pages/Pricing";
import Footer from "./Components/Footer";
import MainRoutes from "./Components/MainRoutes";

import Navbar from "./Components/Navbar";
import { Hire } from "./pages/Hire";

// import { Calculator } from "./Pages/calculator";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <MainRoutes/>
      <Footer />
    </div>
  );
}

export default App;

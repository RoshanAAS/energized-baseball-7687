import "./App.css";

import SignupCard from "./components/authcom/signup/Signup";
// import Pricing from "./pages/Pricing";
import SigninCard from "./components/authcom/signin/SigninCard";
import Googlelogin from "./components/authcom/signin/Googlelogin";
import Footer from "./components/MainRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MainRoutes from "./components/MainRoutes";
import { Hire } from "./Pages/Hire";

// import { Calculator } from "./Pages/calculator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;

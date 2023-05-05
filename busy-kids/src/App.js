import "./App.css";

import SignupCard from "./components/authcom/signup/Signup";
// import Pricing from "./pages/Pricing";
import SigninCard from "./components/authcom/signin/SigninCard";
import Googlelogin from "./components/authcom/signin/Googlelogin";



import Footer from "./Components/Footer";
import MainRoutes from "./Components/MainRoutes";
import Navbar from "./Components/Navbar";
// import SigninCard from "./Components/authcom/signin/SigninCard";
// import { Calculator } from "./Pages/calculator";
// import SignupCard from "./Components/authcom/signup/Signup";
function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Calculator/> */}
      {/* <SigninCard />
        <SignupCard /> */}

      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;

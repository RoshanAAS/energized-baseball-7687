// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
// import MainRoutes from "./Components/MainRoutes";
import Navbar from "./Components/Navbar";
// import SigninCard from "./Components/authcom/signin/SigninCard";
// import { Calculator } from "./Pages/calculator";
// import SignupCard from "./Components/authcom/signup/Signup";
import { Hire } from "./Pages/Hire";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Calculator/>
      <SigninCard />
      <SignupCard />

      <MainRoutes /> */}
       <Hire/>
      <Footer />
    </div>
  );
}

export default App;

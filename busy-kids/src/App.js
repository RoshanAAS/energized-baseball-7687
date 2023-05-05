import logo from "./logo.svg";
import "./App.css";
import SignupCard from "./components/authcom/signup/Signup";
// import Pricing from "./pages/Pricing";
import SigninCard from "./components/authcom/signin/SigninCard";
import Googlelogin from "./components/authcom/signin/Googlelogin";

function App() {
  return (
    <div className="App">
      <SigninCard />
    </div>
  );
}

export default App;

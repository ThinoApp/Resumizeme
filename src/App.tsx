import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import PremiumAccount from "./components/PremiumAccount/PremiumAccount";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-content">
        <PremiumAccount />
        <PersonalInformation />
        <Footer />
      </div>
    </div>
  );
}

export default App;

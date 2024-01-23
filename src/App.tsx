import "./App.css";
import PersonalInformationContainer from "./Container/PersonalInformationContainer";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PremiumAccount from "./components/PremiumAccount/PremiumAccount";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-content">
        <PremiumAccount />
        <PersonalInformationContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;

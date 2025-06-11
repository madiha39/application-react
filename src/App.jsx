import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <h1>Football Players</h1>
      <Navbar />
      <PlayerList />
      <Footer />
    </div>
  );
};

export default App;

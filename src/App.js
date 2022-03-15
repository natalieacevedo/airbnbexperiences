import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Places from "./components/MyPlaces";
import dataPlaces from "./places";
import globe from "./images/globe.png";

function App() {
  console.log(dataPlaces);
  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <Card /> */}
      <div className="wholePlacesBody">
        <nav className="navigationPlaces">
          <img src={globe} alt="globo" />
          <h2>Travel Journal</h2>
        </nav>

        {dataPlaces.map((place, ind) => (
          <Places key={ind} {...place} />
        ))}
      </div>
    </div>
  );
}

export default App;

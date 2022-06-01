import { useState, useEffect } from "react";
import "./styles.css";
import Data from "./components/Data";

var fetchJsonp = require("fetch-jsonp");

function App() {
  const [airlines, setAirlines] = useState([]);
  const [airlineFilter, setAirlinesFilter] = useState([]);

  useEffect(() => {
    fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
      jsonpCallback: "jsonp"
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setAirlines(data);
        const al = data.filter(function (airline) {
          return airline.alliance !== "none";
        });
        setAirlinesFilter(al);
      })
      .catch(function (error) {
        console.log("parsing failed", error);
      });
  }, []);

  function filterAlliance(alliance) {
    const info = airlines.filter((airline) => airline.alliance === alliance);
    setAirlinesFilter(info);
  }

  return (
    <div className="App">
      <h1>airlines</h1>
      <h4>filter by alliances</h4>
      <div className="checkbox">
        <input
          type="radio"
          id="kraken"
          name="monster"
          onClick={() => filterAlliance("ST")}
        />
        <label htmlFor="kraken">Sky Team</label>
        <br />

        <input
          type="radio"
          id="sasquatch"
          name="monster"
          onClick={() => filterAlliance("OW")}
        />
        <label htmlFor="sasquatch">Oneworld</label>
        <br />

        <input
          type="radio"
          id="mothman"
          name="monster"
          onClick={() => filterAlliance("SA")}
        />
        <label htmlFor="mothman">Star Alliance</label>
      </div>

      <div className="container">
        {airlineFilter.map(function (data, index) {
          const logoURL = `https://kayak.com${data.logoURL}`;

          return (
            <Data
              key={index}
              id={index}
              name={data.name}
              img={logoURL}
              phone={data.phone}
              site={data.site}
              alliance={data.alliance}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

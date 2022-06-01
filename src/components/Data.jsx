import React from "react";
import { useState } from "react";

function Data(props) {
  const [isShown, setIsShown] = useState(false);
  // function mouseover(e){
  //   if(e.target.event===onMouseEnter){
  //      return true;
  //   }
  //   setDetails(true)
  // }

  function planeName(name) {
    if (name === "ST") {
      return "Sky Team";
    } else if (name === "TW") {
      return "One world";
    } else {
      return "Star Alliance";
    }
  }

  function site(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

    if (
      match != null &&
      match.length > 2 &&
      typeof match[2] === "string" &&
      match[2].length > 0
    ) {
      var hostname = match[2];
      return hostname;
    } else {
      return null;
    }
  }

  return (
    <div
      className="box"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="sbox">
        <img src={props.img} alt="img" />

        <span className="name">{props.name}</span>

        {isShown && (
          <div className="details">
            {/* <img src={props.img} alt="img" /> */}
            <li className="name">{props.name}</li>
            <li>{planeName(props.alliance)}</li>
            <li>{props.phone}</li>
            <li>
              {" "}
              <a href={props.site}>{site(props.site)}</a>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

export default Data;

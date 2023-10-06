import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) { 
  const [showBack, setShowBack] = useState(false);

  // function myFunction() {
  //   setShowBack(!showBack);
  // }
  // const timerId = setInterval(myFunction, 1000);

  return (
    <Card>
      <div onClick={() => setShowBack(!showBack)} >
        <div className="image">
          {showBack ? <img src={back} alt={name} /> : <img src={front} alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

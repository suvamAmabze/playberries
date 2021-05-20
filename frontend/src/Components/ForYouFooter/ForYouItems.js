import React from "react";
import { Link } from "react-router-dom";

export default function ForYouItems(props) {
  const Guidelines_btnActive = props.Guidelines_btnActive;
  const Privacy_btnActive = props.Privacy_btnActive;

  return (
    <div className="ForYouItems">
      <ul>
        <Link to="/privacy" className="ForYouItems-a">
          <li style={{ backgroundColor: `${Privacy_btnActive}` }}>Privacy</li>
        </Link>

        <Link to="/guidelines-for-restaurants" className="ForYouItems-a">
          <li style={{ backgroundColor: `${Guidelines_btnActive}` }}>Guidelines</li>
        </Link>

        <Link to="/guidelines-for-restaurants" className="ForYouItems-a">
          <li>Security</li>
        </Link>
      </ul>
    </div>
  );
}

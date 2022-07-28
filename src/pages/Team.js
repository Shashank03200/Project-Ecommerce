import React from "react";
import TeamCard from "../components/CustomCard/TeamCard";

import { team } from "../data/team";

import "./Team.css";

function TeamMembers() {
  return (
    <>
      {team.map((member, memberId) => {
        return <TeamCard key={memberId} {...member} />;
      })}
    </>
  );
}

const Team = () => {
  return (
    <div className="Team">
      <div className="Team__Header">
        <h2 className="Team__Heading">Our Team</h2>
        <h4 className="Team__Subheading">
          Without bonding and coordination, every project is a failure.
          <br />
          Look at who makes KICKSUP great.
        </h4>
      </div>
      <div className="Team__Members">
        <TeamMembers />
      </div>
      <h4 className="Team__EndQuote">and You! ;</h4>
    </div>
  );
};

export default Team;

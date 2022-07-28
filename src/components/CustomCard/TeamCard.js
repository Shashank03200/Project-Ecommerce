import React from "react";

const TeamCard = ({ photo, socialLinks, name, position }) => {
  return (
    <div className="TeamCard">
      <div className="TeamCard__ImageContainer">
        <img src={photo} />
      </div>
      <div className="TeamCard__PersonDetails">
        <h3 className="TeamCard__PersonDetails-Name">{name}</h3>
        <p className="TeamCard__PersonDetails-Position">{position}</p>

        <div className="TeamCard__PersonLinks">
          {socialLinks.map((socialLink, index) => {
            return (
              <a href={socialLink.url} target="_blank" key={index}>
                <img src={socialLink.icon} alt="social-link"></img>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

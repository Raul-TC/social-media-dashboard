import React from "react";
import iconDown from "../assets/icon-down.svg";
export const Card = ({
  icon,
  mediaName,
  username,
  followers,
  recentNotify,
  iconArrow,
}) => {
  return (
    <div className={`card ${mediaName}`}>
      <span className="cardHeader"></span>
      <div className="userName">
        <img className="icon" src={icon} alt={`${mediaName}-icon`} />
        <span>{`@${username}`}</span>
      </div>
      <div className="followers">
        <span className="follow">
          {mediaName === "instagram" ? "11k" : followers}
        </span>
        <p className="followerText">
          {mediaName === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}
        </p>
      </div>
      <div className={iconArrow === iconDown ? "today iconDown" : "today"}>
        <img src={iconArrow} alt="iconStat" />
        {`${recentNotify} Today`}
      </div>
    </div>
  );
};

import React from "react";
import iconDown from "../assets/icon-down.svg";
export const DetailsCard = ({
  icon,
  iconArrow,
  section,
  state,
  percentage,
  mediaName,
}) => {
  return (
    <div className="detailCard">
      <div className="content">
        <div className="pageViews">
          <p>{section}</p>
          <span>{state}</span>
        </div>
        <div className="socialIncrement">
          <img src={icon} alt={mediaName} className="icon iconDetail" />
          <div
            className={
              iconArrow === iconDown ? "percentage iconDown" : "percentage"
            }
          >
            <img src={iconArrow} alt="arrow-percentage" className="iconArrow" />
            <p>{percentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Card } from "./Card";
import fbIcon from "../assets/facebook-svgrepo-com.svg";
import twIcon from "../assets/twitter-svgrepo-com.svg";
import igIcon from "../assets/instagram-svgrepo-com.svg";
import ytIcon from "../assets/youtube-svgrepo-com.svg";
import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";
import { DetailsCard } from "./DetailsCard";
import { Header } from "./Header";

export const Main = ({ handleUpdateFollow }) => {
  return (
    <>
      <Header />
      <div className="mainContent">
        <div className="container">
          <div className="mainNotify">
            <Card
              icon={fbIcon}
              mediaName="facebook"
              username="nathanf"
              followers="1987"
              recentNotify="12"
              iconArrow={iconUp}
              handleUpdateFollow={handleUpdateFollow}
            />
            <Card
              icon={twIcon}
              mediaName="twitter"
              username="nathanf"
              followers="1044"
              recentNotify="99"
              iconArrow={iconUp}
              handleUpdateFollow={handleUpdateFollow}
            />
            <Card
              icon={igIcon}
              mediaName="instagram"
              username="realnathanf"
              followers="11000"
              recentNotify="1099"
              iconArrow={iconUp}
              handleUpdateFollow={handleUpdateFollow}
            />
            <Card
              icon={ytIcon}
              mediaName="youtube"
              username="Nathan F."
              followers="8239"
              recentNotify="144"
              iconArrow={iconDown}
              handleUpdateFollow={handleUpdateFollow}
            />
          </div>

          <h2 className="overview">Overview - Today</h2>

          <div className="details">
            <DetailsCard
              mediaName="facebook-views"
              icon={fbIcon}
              iconArrow={iconUp}
              section="Page Views"
              state="87"
              percentage="3%"
            />
            <DetailsCard
              mediaName="facebook-likes"
              icon={fbIcon}
              iconArrow={iconDown}
              section="Likes"
              state="52"
              percentage="2%"
            />
            <DetailsCard
              mediaName="instagram-likes"
              icon={igIcon}
              iconArrow={iconUp}
              section="Likes"
              state="5462"
              percentage="2257%"
            />
            <DetailsCard
              mediaName="instagram-views"
              icon={igIcon}
              iconArrow={iconUp}
              section="Profile Views"
              state="52k"
              percentage="1375%"
            />
            <DetailsCard
              mediaName="retweets"
              icon={twIcon}
              iconArrow={iconUp}
              section="Retweets"
              state="117"
              percentage="303%"
            />
            <DetailsCard
              mediaName="twitter-likes"
              icon={twIcon}
              iconArrow={iconUp}
              section="Likes"
              state="507"
              percentage="553%"
            />
            <DetailsCard
              mediaName="youtube-likes"
              icon={ytIcon}
              iconArrow={iconDown}
              section="Likes"
              state="107"
              percentage="19%"
            />
            <DetailsCard
              mediaName="youtube-views"
              icon={ytIcon}
              iconArrow={iconDown}
              section="Total Views"
              state="1407"
              percentage="12%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

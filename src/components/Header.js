import React from "react";
import { DarkModeButton } from "./DarkModeButton";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div>
            <h1 className="title">Social Media Dashboard</h1>
            <p className="totalFollowers">Total Followers: 22,270</p>
          </div>
          <hr className="hidden" />
          <DarkModeButton />
        </div>
      </header>
    </>
  );
};

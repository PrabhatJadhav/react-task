import React from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="info">
        <div>
          <span>Welcome to</span>
          <span id="color-blue"> LandKit</span>
          <h1>Develop anything</h1>
          <p>
            Build a beautiful, modern website with flexible Bootstrap components
            built from stratch
          </p>
        </div>
        <div>
          <button id="buy-now">View All Pages =&gt;</button>
          <button id="doc">Documentation</button>
        </div>
      </div>
      <div className="home-img"></div>
    </div>
  );
}

export default Home;

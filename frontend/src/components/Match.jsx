import Box from "@mui/material/Box";
import logo from "../../public/CSK_Logo.png"
import cskBanner from "../../public/CSK_Banner.jpg";
import miBanner from "../../public/MI_Banner.png";
import "./Match.css"

export default function Matches() {
  return (
      <div className="match-card">
        <div className="team left">
          <img src={miBanner} alt="KKR" />
        </div>
  
        <div className="center">
          <div className="score">
            <div>
              <h1>210/4</h1>
              <p>(20.0 overs)</p>
            </div>
  
            <div className="vs">v/s</div>
  
            <div>
              <h1>190/8</h1>
              <p>(18.2 overs)</p>
            </div>
          </div>
  
          <div className="live">LIVE</div>
        </div>
  
        <div className="team right">
          <img src={cskBanner} alt="CSK" />
        </div>
      </div>
  );
}
import React from "react";
import "./Body.css";
import text from "../images/Seamless Communication with OmniGPT.svg";
import circle from "../images/Graphic_Elements.svg";
import family1 from "../images/Mask group.svg";
import arrowupleft from "../images/Vector (30).svg";
import family2 from "../images/Mask group (1).svg";
import arr from "../images/arrow-up-right.svg";
import arr2 from "../images/arrow-up-left.svg";

const Body = () => {
  return (
    <div className="bodydiv">
      {/* <img src={text} alt="" /> */}
      <div className="textdiv">
        <h1 className="firsth1">Seamless Communication with OmniGPT</h1>
        <h1 className="secondh1">Powered by Chat GPT-4</h1>
        <p>
          Experience the power of AI language models with OmniGPT. Our chat
          platform provides seamless communication across multiple channels.
        </p>
        <p>Try for free! 15-day trial, no credit card required.</p>
        <button className="btn1">Start your free trial</button>
      </div>
      <div className="familydiv">
        <div>
          <img src={family1} alt="" />
          <img className="lucide" src={arr} alt="" />
        </div>
        <div className="arrdiv1">
          <img className="lucide2" src={arr2} alt="" />
          <img src={family2} alt="" />
          {/* <img className="firstarr" src={arrowupleft} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;

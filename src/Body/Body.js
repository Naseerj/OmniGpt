import React from "react";
import "./Body.css";
// import text from "../images/Seamless Communication with OmniGPT.svg";
import circle from "../images/Graphic_Elements.svg";
import family1 from "../images/Mask group.svg";
// import arrowupleft from "../images/Vector (30).svg";
import family2 from "../images/Mask group (1).svg";
import arr from "../images/arrow-up-right.svg";
import arr2 from "../images/arrow-up-left.svg";
import andrea from "../images/pexels-andrea-piacquadio-920382 Background Removed 1.svg";

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
        <img className="circle" src={circle} alt="" />
      </div>
      <div className="familydiv">
        <div className="position1">
          <div className="boxdiv5"></div>
          <img className="family1" src={family1} alt="" />
          <img className="lucide" src={arr} alt="" />
        </div>
        <div className="arrdiv1">
          <img className="lucide2" src={arr2} alt="" />
          <div className="boxdiv4"></div>

          <img className="family2pic" src={family2} alt="" />
          {/* <img className="firstarr" src={arrowupleft} alt="" /> */}
        </div>
        <div className="family2">
          <div className="andreadiv">
            <div className="boxdiv">
              <h4 className="headeromni">
                {" "}
                @OmniGPT Can you give us an update on the latest project status?{" "}
                <sub>11:38</sub>
              </h4>
            </div>
            <img className="andrea" src={andrea} alt="" />
          </div>
          <div className="lastbox">
            <div className="boxdiv2"></div>
            <div className="boxdiv3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

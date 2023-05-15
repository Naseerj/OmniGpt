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
import Iphone from "../images/apple-iphone-14-pro-max-2022-medium 2.svg";
import Avatar from "../images/Avatar.svg";
import left from "../images/chevron-left.svg";
import videocall from "../images/Video Call.svg";
import phone from "../images/phone.svg";
import battery from "../images/battery.svg";
import wifi from "../images/wifi.svg";
import wallpaper from "../images/whatsapp wallpaper.jpg";
// import download from "../images/Vector (32).svg";
// import mic from "../images/Vector (33).svg";
// import send from "../images/Vector (34).svg";
import iphone2 from "../images/apple-iphone-14-pro-max-2022-medium 1.svg";
import wallpaper2 from "../images/Rectangle 13053.svg";
import slack from '../images/Facebook_Messenger_logo_2020 1.svg'
import whatsapp from '../images/WhatsApp 1.svg'
import rectangle1 from '../images/Rectangle 13067.svg'
import rectangle2 from '../images/Rectangle 13068.svg'


const Body = () => {
  return (
    <div className="bigdiv">
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
                  @OmniGPT Can you give us an update on the latest project
                  status? <sub>11:38</sub>
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
      <div className="iphonediv">
        <div>
          <img className="iphone" src={Iphone} alt="" />
          <input
            className="inp1"
            type="text"
            placeholder="Can you help me find a restaurant nearby"
          />

          {/* <img src={download} alt="" />
          <img src={mic} alt="" />
          <img src={send} alt="" /> */}
        </div>
        <div className="whitediv">
          <div className="phonetop1">
            <p>14:24</p>
            <div className="rectangle"></div>
            <div className="circle2"></div>
            <div className="wi-bat">
              <img className="wifi" src={wifi} alt="" />
              <img className="battery" src={battery} alt="" />
            </div>
          </div>

          <div className="phonetop2">
            <div className="leftdiv">
              <img className="left" src={left} alt="" /> <p>12</p>
            </div>
            <div className="chatgpt">
              <img className="ava" src={Avatar} alt="" />
              <div className="namediv">
                <p>OmniGpt</p>
                <p className="type">typing ......</p>
              </div>
            </div>
            <img className="vid" src={videocall} alt="" />
            <img className="phone" src={phone} alt="" />
          </div>
          <img className="wallpaper" src={wallpaper} alt="" />
        </div>
      </div>
      <div className="section2div">
        <div>
          <img className="iphone2" src={iphone2} alt="" />
          <img className="wallpaper2" src={wallpaper2} alt="" />
          <img className="slack" src={slack} alt="" />
          <img className="rectangle1" src={rectangle1} alt="" />
          <img className="rectangle2" src={rectangle2} alt="" />
         <div className="innercircle">
         <img className="whatsapp" src={whatsapp} alt="" />
         </div>
        </div>
        <div>
          <h1>The All-in-One Solution for Conversational AI</h1>
          <div>
            <h3> Seamless Collaboration</h3>
            <p>
              Easily collaborate with team members on projects and ideas in
              real-time, boosting productivity and teamwork
            </p>
          </div>
          <h3> Multi-Channel Support</h3>
          <hr />
          <h3> Advanced AI Capabilities</h3>
          <hr />
          <h3> Multi-Channel Support</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Body;

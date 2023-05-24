import React from "react";
import "./Reviews.css";
import { useState, useEffect } from "react";
import data from "../data";

const Reviews = () => {
  const [reviews] = useState(data);
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(true)

  useEffect(() => {
    // console.log(reviews)
    const lastIndex = reviews.length - 1;
    // console.log(lastIndex)
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="stylediv">
      <div>

      </div>
      <div className="secondiv">
        {reviews.map((person, indexPeople) => {
       const {id, header, text, name, img } = person;
       let position = 'nextSlide'
       if(indexPeople === index ){
          position = 'activeSlide'
       }
       if(indexPeople === index - 1 || (index === 0 && indexPeople === reviews.length - 1)){
        position = 'lastSlide'
       }
       return(
  
          <article className={slide === true? 'help' : 'help-hidden'} key={id} >
          <h4 className="headerd">{header}</h4>
          <h5 className="textd">{text}</h5>
          <div className="flexx">
          <img src={img} alt=""  className="person-img"/>
          <h6>{name}</h6>
          </div>
        </article>
       )
        })}
      </div>
    </div>
  );
};

export default Reviews;

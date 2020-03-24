import React, { Component, Fragment, useState, useEffect } from "react";
import { render } from "react-dom";
import "./Ejemplo.css";

// const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel
const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook"
  },
  {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  },
  {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  },
  {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  },
  {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  },
  {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  },
  {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];
// ================


const Carousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const goToSlide = index => {
    setActiveIndex(index);
  };
  const goToNextSlide = e => {
    e.preventDefault();
    let index = activeIndex;
    let { slides } = props;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    setActiveIndex(index);
  };

  const goToPrevSlide = e => {
    e.preventDefault();
    let index = activeIndex;
    let { slides } = props;
    let slidesLength = slides.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <a
        href="#"
        className="carousel__arrow--left"
        onClick={e => goToPrevSlide(e)}
      >
        <Fragment>&#10094;</Fragment>
      </a>
      <ul className="carousel__slides">
        {props.slides.map((item, index) => (
          <li
            className={
              index == activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
            key={index}
          >
            <p className="carousel-slide__content">{item.content}</p>

            <p>
              <strong className="carousel-slide__author">{item.author}</strong>,
              <small className="carousel-slide__source">{item.source}</small>
            </p>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={e => goToNextSlide(e)}
      >
        <Fragment>&#10095;</Fragment>
      </a>
      <ul className="carousel__indicators">
           {props.slides.map((slide, index) => (
            <li key={index}>
               <a
                 href="#"
                 className={
                   index == activeIndex
                     ? "carousel__indicator carousel__indicator--active"
                     : "carousel__indicator"
                 }
                 onClick={e => goToSlide(index)}
              />
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Carousel;

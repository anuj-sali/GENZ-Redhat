import React from "react";
import Carouselhome1 from "../../Partials/HomePageComponents/Carouselhome1";
import CarouselReview from "../../Partials/HomePageComponents/CarouselReview";
import { RahiHome } from "../../Partials/HomePageComponents/RahiHome";
import Categories from "../../Partials/HomePageComponents/Categories"
import CarouselReviewHeading from "../../Partials/HomePageComponents/CarouselReviewHeading";

const Homepage = () => {
  return (
    <>
      <Carouselhome1 />
      <Categories />
      <br />
      <RahiHome />
      <br />
      <CarouselReviewHeading />
      <CarouselReview />
      <br />
    </>
  );
};

export default Homepage;

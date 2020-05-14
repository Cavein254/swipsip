import React from "react";
import { Carousel } from "react-bootstrap";
import Hein from "../imgs/heineken-james-bond.jpg";
import Jonny from "../imgs/black.jpg";
import Guiness from "../imgs/guinessfull.jpg";

const CaureselData = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-200" src={Hein} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-200" src={Jonny} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-200"
            src={Guiness}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CaureselData;

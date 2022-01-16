import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

const ImageDefault = () => {
  return (
    // <CarouselProvider
    //   visibleSlides={2}
    //   totalSlides={6}
    //   step={2}
    //   dragStep={2}
    //   naturalSlideWidth={400}
    //   naturalSlideHeight={500}
    // >
    //   <h2>Carousel (With Individual Spinners)</h2>
    //   <p>
    //     Each ImageWithZoom component has it&apos;s own spinner. You might want
    //     to use Chrome dev tools to throttle the network connection so you can
    //     see the spinners.
    //   </p>
    //   <p>
    //     Also, we added the boolean prop dotNumbers to the DotGroup for
    //     displaying slide numbers.
    //   </p>
    //   <Slider>
    //     <Slide index={0}>
    //       sad
    //       <ImageWithZoom src="https://dummyimage.com/600x400/000/fff" />
    //     </Slide>
    //     <Slide index={1}>
    //       <ImageWithZoom src="https://dummyimage.com/600x400/000/fff" />
    //     </Slide>
    //     <Slide index={2}>
    //       <ImageWithZoom src="https://dummyimage.com/600x400/000/fff" />
    //     </Slide>
    //     <Slide index={3}>
    //       <ImageWithZoom src="https://dummyimage.com/600x400/000/fff" />
    //     </Slide>
    //     <Slide index={4}>
    //       <ImageWithZoom src="https://dummyimage.com/600x400/000/fff" />
    //     </Slide>
    //     <Slide index={5}>
    //       <ImageWithZoom src="https://dummyimage.com/600x400/000/fff" />
    //     </Slide>
    //   </Slider>
    //   <ButtonFirst>First</ButtonFirst>
    //   <ButtonBack>Back</ButtonBack>
    //   <ButtonNext>Next</ButtonNext>
    //   <ButtonLast>Last</ButtonLast>
    //   <DotGroup dotNumbers />
    // </CarouselProvider>

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default ImageDefault;

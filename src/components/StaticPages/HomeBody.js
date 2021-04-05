import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src:"images/counsimage1.jpg",
    altText: 'Seemless Personal Assistance',
    caption: 'Seemless Personal Assistance'
  },
  {
    id: 2,
    src:"images/counsimage2.jpg",
    altText: 'Motivation beyond Imagination',
    caption: 'Motivation beyond Imagination'
  },
  {
    id: 3,
    src:"images/counsimage3.jpg",
    altText: 'Taught the way of life',
    caption: 'Taught the way of life'
  }
];


const HomeBody=(props)=>
{
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} style={{width:"1800px", height:"700px"}}alt={item.altText} />
        <CarouselCaption className="text-danger" /*captionText={item.caption}*/ captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel">
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 650px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default HomeBody;
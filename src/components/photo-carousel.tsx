import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

class PhotoCarousel extends React.Component {
  render() {
    return (
      <Carousel showArrows={true}>
        <div>
          <img src="/images/bear1.jpg" />
          <p className="legend">Car ride home</p>
        </div>
        <div>
          <img src="/images/bear2.jpg" />
          <p className="legend">Kitchen floor bear</p>
        </div>
        <div>
          <img src="/images/bear3.jpg" />
          <p className="legend">Bear stairs</p>
        </div>
        <div>
          <img src="/images/bear4.jpg" />
          <p className="legend">Paddington Bear</p>
        </div>
        <div>
          <img src="/images/bear5.jpg" />
          <p className="legend">Door bearing</p>
        </div>
      </Carousel>
    );
  }
}

export default PhotoCarousel;

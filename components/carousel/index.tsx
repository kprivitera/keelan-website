import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/800x200"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/800x200"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/800x200"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

);

export default ImageCarousel;


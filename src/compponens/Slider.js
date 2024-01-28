import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <>
  <Carousel data-bs-theme="dark nazimslider">
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="https://img.freepik.com/premium-vector/hot-sale-template-with-burning-label_95561-189.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img "
          src="https://www.thaiairways.com/static/common/imgscontent/Promotion/HOTTEST-SALE_PROMO.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img "
          src="https://gillori.com/cdn/shop/collections/Winter_Banner_2.jpg?v=1702548797&width=1920"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>  Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return <div className="relative">
    <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20" />
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
    
    >
      <div>
        {/* <img loading="lazy" src="https://links.papareact.com/gi1" alt="first" /> */}
        <img loading="lazy" src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/picture2.jpg" alt="first" />  
 

      </div>

      <div>
        <img loading="lazy" src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/picture3.jpg" alt="second" />  
      </div>

      <div>
        <img loading="lazy" src="https://joker-uploads.s3.ap-southeast-2.amazonaws.com/picture4.jpg" alt="third" />  
      </div>

    </Carousel>

  </div>;
}

export default Banner;

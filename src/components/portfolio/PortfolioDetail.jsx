import { useParams } from "react-router-dom";
import { PortfolioData } from "./PortfolioData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PortfolioPage.css";

export const PortfolioDetail = () => {
  const { id } = useParams();
  const item = PortfolioData.find((el) => el.id === parseInt(id));

  if (!item) {
    return <h2>Portfolio details not found</h2>;
  }
  return (
    <div className="details">
      <div className="portfolioDetail">
        <div className="carousel">
          <Carousel showThumbs={false} infiniteLoop autoPlay={false} emulateTouch>
           {item.img.map((media, index) => (
  <div key={index}>
    {media.type === "image" ? (
      <img
        src={media.src}
        alt={`slide-${index}`}
        className="carousel-media"
      />
    ) : media.type === "video" ? (
      <video controls className="carousel-media">
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : null}
  </div>
))}

          </Carousel>
        </div>

        <div className="portfolio-detail-text">
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <p><strong>Languages:</strong> {item.languages}</p>
          <a href={item.Link} target="_blank" rel="noreferrer">
            Visit Project
          </a>
        </div>
      </div>
    </div>

  );
};

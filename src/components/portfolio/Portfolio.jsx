import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioData } from './PortfolioData';
import './PortfolioPage.css'; // Use same CSS as full page

const Portfolio = () => {
  const navigate = useNavigate();

  const latestProjects = [...PortfolioData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="pHeading" style={{fontSize:"32px"}}>Latest Projects</h2>

      <div className="pMainCard" style={{display:"flex",gap:"20px", flexWrap:"nowrap"}}>
        {latestProjects.map((elem) => {
          const firstImage = elem.img.find((item) => item.type === 'image');

          return (
            <div key={elem.id} className="card">
              <div className="pCard">
                {firstImage ? (
                  <img
                    src={firstImage.src}
                    alt={elem.title}
                    onClick={() => navigate(`/PortfolioDetail/${elem.id}`)}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div className="pContent">
                <h2>{elem.title}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', }}>
        <button
          className="btn"
          onClick={() => navigate('/Portfolio')}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

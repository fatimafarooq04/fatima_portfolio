import React, { useState } from 'react';
import './PortfolioPage.css';
import { useParams } from 'react-router-dom';
import { PortfolioData } from './PortfolioData';
import { Sidebar } from '../Sidebar/Sidebar';

export const PortfolioDetail = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(0);

  const project = PortfolioData.find((item) => item.id === parseInt(id));
  if (!project) return <h2 style={{ textAlign: 'center' }}>🚫 Project not found</h2>;

  const mediaItems = project.img;

  const plusSlides = (n) => {
    setSlideIndex((prev) => (prev + n + mediaItems.length) % mediaItems.length);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
     <div className="pPortfolio">
                    <h1 className='pHeading'>Portfolio Details</h1>
                    <div className="icon">
                        <Sidebar />
                    </div>
                </div>
    <div className="portfolio-detail-container">
      
        {/* Media Carousel */}
      <div className="slideshow-container">
        {mediaItems.map((item, index) => {
          const isVideo = item.src.toLowerCase().endsWith('.mp4');
          return (
            <div
              className="mySlides fade"
              key={index}
              style={{ display: index === slideIndex ? 'block' : 'none' }}
            >
              <div className="numbertext">{index + 1} / {mediaItems.length}</div>
              <div className="img-wrapper">
                {isVideo ? (
                  <video
                    width="100%"
                    controls
                    muted
                    autoPlay
                    loop
                    style={{ maxHeight: '400px', borderRadius: '10px' }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '10px' }}
                  />
                )}
              </div>
              <div className="text">{item.caption}</div>
            </div>
          );
        })}

        <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
        <span className="next" onClick={() => plusSlides(1)}>&#10095;</span>
      </div>

      {/* Dots */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        {mediaItems.map((_, i) => (
          <span
            key={i}
            className={`dot ${slideIndex === i ? 'active' : ''}`}
            onClick={() => currentSlide(i)}
          ></span>
        ))}
      </div>
      {/* Project Heading */}
      <div className="portfolio-header">
        <h1>{project.title}</h1>
        <p className="portfolio-description">{project.desc}</p>
        <p><strong>Tech Stack:</strong> {project.languages}</p>
        {project.Link && <a href={project.Link} target="_blank" rel="noreferrer">🔗 View Live</a>}
      </div>

    
    </div>
    </>

  );
};

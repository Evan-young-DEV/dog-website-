import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/videos/video1.mp4', '/videos/video2.mp4'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // 5초마다 전환

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="hero-fullscreen">
        {/* 비디오/이미지 배경 */}
        <div className="hero-media">
          <div className="hero-video-wrapper">
            {videos.map((video, index) => (
              <video
                key={index}
                className={`fullscreen-video ${currentVideo === index ? 'active' : ''}`}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>
          <div className="hero-overlay"></div>
        </div>

        {/* 하단 좌측 컨텐츠 */}
        <div className="bottom-left-content">
          <h2 className="bottom-title">Smarter Health Tracking</h2>
          <p className="bottom-subtitle">Built for the Pets You Love</p>
          <p className="bottom-description">
            The first wearable that monitors body temperature, movement, and early health signals —<br />
            so you can protect your pet before symptoms appear.
          </p>
          <div className="bottom-buttons">
            <button className="wearable-btn">Dog Wearable</button>
            <button className="wearable-btn">Cat Wearable</button>
          </div>
        </div>
      </section>

      {/* 기능 섹션 - 영상 밖 하단 */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="feature-title">Health Tracking</h3>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </div>
            <h3 className="feature-title">Movement & Behavior Monitoring</h3>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="feature-title">Future-Ready Expansion</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

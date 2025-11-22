import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';

function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/videos/video1.mp4', '/videos/video2.mp4', '/videos/video3.mp4', '/videos/video4.mp4'];
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          video.style.display = 'block';
          video.play().catch(() => {});
        } else {
          video.style.display = 'none';
          video.pause();
        }
      }
    });
  }, [currentVideo]);

  return (
    <>
      <section id="home" className="hero-fullscreen">
        {/* 비디오/이미지 배경 */}
        <div className="hero-media">
          <div className="hero-video-wrapper">
            {videos.map((video, index) => (
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                className="fullscreen-video"
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

      {/* 비교표 섹션 */}
      <section className="comparison-section">
        <div className="comparison-container">
          <h2 className="comparison-title">Why JellyBeam Detects Early Signals Better</h2>
          <p className="comparison-subtitle">jelly beam Loopband vs Competitors</p>

          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell header-cell">Feature Category</div>
              <div className="table-cell header-cell jellybeam">JellyBeam</div>
              <div className="table-cell header-cell competitor">Major Competitor</div>
              <div className="table-cell header-cell basic">Basic Tracker</div>
            </div>

            <div className="table-row">
              <div className="table-cell feature-cell">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                </svg>
                High-Accuracy Temperature Sensing (±0.2℃)
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon check">✓</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon partial">●</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon cross">✕</span>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell feature-cell">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                Sleep Pattern Analysis
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon check">✓</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon partial">●</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon cross">✕</span>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell feature-cell">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Early Warning Alerts (Baseline Deviation)
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon check">✓</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon partial">●</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon cross">✕</span>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell feature-cell">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                Vital Index (Multi-Signal AI Fusion Score)
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon check">✓</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon partial">●</span>
              </div>
              <div className="table-cell status-cell">
                <span className="status-icon cross">✕</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

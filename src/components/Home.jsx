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

    </section>
  );
}

export default Home;

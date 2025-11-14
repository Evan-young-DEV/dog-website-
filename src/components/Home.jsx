import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="hero-fullscreen">
      {/* 비디오/이미지 배경 */}
      <div className="hero-media">
        <div className="hero-video-wrapper">
          {/* 나중에 실제 비디오로 교체 */}
          <div className="video-placeholder">
            <div className="placeholder-overlay"></div>
            <p className="placeholder-text">반려동물과 함께하는 일상 영상</p>
          </div>
          {/* 실제 사용 시:
          <video autoPlay muted loop playsInline>
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          */}
        </div>
        <div className="hero-overlay"></div>
      </div>

      {/* 히어로 컨텐츠 */}
      <div className="hero-content-wrapper">
        <div className="hero-content-centered">
          <h1 className="hero-main-title">
            Monitor. Detect. Protect.
          </h1>
          <p className="hero-main-subtitle">
            AI 기반 펫 웨어러블로 반려동물의 건강을 24/7 실시간으로 모니터링하세요
          </p>
          <div className="hero-cta-buttons">
            <button className="cta-primary" onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              지금 구매하기
            </button>
            <button className="cta-secondary" onClick={() => {
              document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
            }}>
              더 알아보기
            </button>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="scroll-down-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Home;

import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';

function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/videos/22-1.mp4', '/videos/22-2.mp4', '/videos/22-3.mp4', '/videos/22-5.mp4'];
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
        <div className="comparison-header">
          <h1 className="comparison-main-title">Why JellyBeam Detects Early Signals Better</h1>
          <p className="comparison-main-subtitle">JellyBeam Loopband vs Competitors</p>
          <p className="comparison-tagline">
            0.2℃ 정밀 온도 감지와 AI 기반 멀티시그널 융합 기술로<br />
            반려동물의 미세한 건강 신호를 가장 먼저 발견합니다
          </p>
        </div>

        <div className="comparison-container">
          <div className="comparison-table">
            {/* 헤더 */}
            <div className="table-header">
              <div className="header-cell">기능 / Capability</div>
              <div className="header-cell jellybeam-header">JellyBeam</div>
              <div className="header-cell">Major Competitor</div>
              <div className="header-cell">Basic Tracker</div>
            </div>

            {/* 바디 */}
            <div className="table-body">
              {/* 1. 정밀 온도 감지 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">🌡️</span>
                  <span>High-Accuracy Temperature (±0.2℃)</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟡</div>
                <div className="cell-value cell-tracker">❌</div>
              </div>

              {/* 2. HRV 스트레스 스코어 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">💓</span>
                  <span>HRV-based Stress Score</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟢</div>
                <div className="cell-value cell-tracker">❌</div>
              </div>

              {/* 3. 수면 패턴 분석 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">😴</span>
                  <span>Sleep Pattern Analysis</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟢</div>
                <div className="cell-value cell-tracker">🟡</div>
              </div>

              {/* 4. 조기 경고 알림 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">⚠️</span>
                  <span>Early Warning Alerts (Baseline AI)</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟢</div>
                <div className="cell-value cell-tracker">❌</div>
              </div>

              {/* 5. 생체신호 융합 AI */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">🧠</span>
                  <span>Vital Index (Multi-Signal Fusion AI)</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟡</div>
                <div className="cell-value cell-tracker">❌</div>
              </div>

              {/* 6. 행동 패턴 감지 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">🐾</span>
                  <span>Behavioral Pattern Detection</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟡</div>
                <div className="cell-value cell-tracker">🟢</div>
              </div>

              {/* 7. 수의사/가족 공유 보고서 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">📊</span>
                  <span>Vet / Family Share Report</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟡</div>
                <div className="cell-value cell-tracker">🟡</div>
              </div>

              {/* 8. OTA 펌웨어 업데이트 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">⚙️</span>
                  <span>OTA Firmware Update</span>
                </div>
                <div className="cell-value cell-jellybeam">🟢</div>
                <div className="cell-value cell-competitor">🟢</div>
                <div className="cell-value cell-tracker">❌</div>
              </div>

              {/* 9. 가벼운 착용감 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">⌚</span>
                  <span>Lightweight Loopband Comfort Fit</span>
                </div>
                <div className="cell-value cell-jellybeam">🟡</div>
                <div className="cell-value cell-competitor">🟡</div>
                <div className="cell-value cell-tracker">🟢</div>
              </div>

              {/* 10. 구독 & 분석 플랫폼 */}
              <div className="table-row">
                <div className="row-label">
                  <span className="row-icon">📱</span>
                  <span>Subscription + Analytics Platform</span>
                </div>
                <div className="cell-value cell-jellybeam">🟡</div>
                <div className="cell-value cell-competitor">🟢</div>
                <div className="cell-value cell-tracker">🟡</div>
              </div>
            </div>

            {/* 범례 */}
            <div className="legend">
              <div className="legend-item">
                <span className="legend-icon">🟢</span>
                <span><strong>Full Support</strong> - 완전 지원</span>
              </div>
              <div className="legend-item">
                <span className="legend-icon">🟡</span>
                <span><strong>Limited</strong> - 제한적</span>
              </div>
              <div className="legend-item">
                <span className="legend-icon">❌</span>
                <span><strong>Not Available</strong> - 미지원</span>
              </div>
            </div>
          </div>

          {/* 하이라이트 카드 */}
          <div className="feature-highlights">
            <div className="highlight-card">
              <div className="highlight-number">8/10</div>
              <div className="highlight-text">
                기능 완전 지원<br /><strong>Full Support Features</strong>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">±0.2℃</div>
              <div className="highlight-text">
                정밀 온도 감지<br /><strong>Industry-Leading Accuracy</strong>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">AI</div>
              <div className="highlight-text">
                멀티시그널 융합 기술<br /><strong>Advanced Early Detection</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

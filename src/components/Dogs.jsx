import React from 'react';
import '../styles/Dogs.css';

function Dogs() {
  return (
    <>
      {/* 대형 이미지 섹션 1 - 심박수 모니터링 */}
      <section id="features" className="feature-section feature-large">
        <div className="feature-split">
          <div className="feature-image-side">
            <div className="image-placeholder">
              <p>반려동물 착용 이미지</p>
            </div>
          </div>
          <div className="feature-content-side">
            <div className="feature-content">
              <span className="feature-label">24/7 실시간 모니터링</span>
              <h2 className="feature-heading">심장 건강을 실시간으로 추적합니다</h2>
              <p className="feature-text">
                의료급 정확도의 센서가 반려동물의 심박수를 24시간 모니터링합니다.
                이상 징후 발견 시 즉시 알림을 받아 조기 대응이 가능합니다.
              </p>
              <ul className="feature-list">
                <li>99.8% 의료급 정확도</li>
                <li>실시간 이상 징후 감지</li>
                <li>스마트폰 즉시 알림</li>
                <li>수의사와 데이터 공유</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 대형 이미지 섹션 2 - 활동량 추적 (이미지 좌우 반전) */}
      <section className="feature-section feature-large feature-reverse">
        <div className="feature-split">
          <div className="feature-content-side">
            <div className="feature-content">
              <span className="feature-label">AI 기반 분석</span>
              <h2 className="feature-heading">활동 패턴을 스마트하게 분석합니다</h2>
              <p className="feature-text">
                AI가 반려동물의 활동량, 운동 시간, 칼로리 소모를 분석하여
                최적의 건강 상태를 유지할 수 있도록 도와줍니다.
              </p>
              <ul className="feature-list">
                <li>일일 활동량 자동 추적</li>
                <li>칼로리 소모 계산</li>
                <li>운동 목표 설정 및 달성률</li>
                <li>활동 패턴 AI 분석</li>
              </ul>
            </div>
          </div>
          <div className="feature-image-side">
            <div className="image-placeholder">
              <p>활동 중인 반려동물 이미지</p>
            </div>
          </div>
        </div>
      </section>

      {/* 대형 이미지 섹션 3 - GPS 위치 추적 */}
      <section className="feature-section feature-large">
        <div className="feature-split">
          <div className="feature-image-side">
            <div className="image-placeholder">
              <p>GPS 추적 앱 화면</p>
            </div>
          </div>
          <div className="feature-content-side">
            <div className="feature-content">
              <span className="feature-label">위치 추적</span>
              <h2 className="feature-heading">반려동물의 위치를 실시간으로</h2>
              <p className="feature-text">
                GPS 기술로 반려동물의 위치를 정확하게 파악합니다.
                안전 구역 설정으로 이탈 시 즉시 알림을 받습니다.
              </p>
              <ul className="feature-list">
                <li>실시간 GPS 위치 추적</li>
                <li>안전 구역 설정 (Geofencing)</li>
                <li>이동 경로 기록</li>
                <li>분실 방지 알림</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 비디오 섹션 */}
      <section className="video-section-large">
        <div className="video-content">
          <h2>실제 사용자들의 이야기</h2>
          <div className="video-wrapper">
            <div className="video-placeholder-large">
              <p>사용자 인터뷰 영상 (나중에 업로드)</p>
            </div>
            {/* 실제 비디오:
            <video controls>
              <source src="/videos/testimonial.mp4" type="video/mp4" />
            </video>
            */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dogs;

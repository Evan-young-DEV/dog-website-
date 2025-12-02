import React from 'react';
import '../styles/Specs.css';

function Specs() {
  return (
    <section id="specs" className="specs-section">
      <div className="specs-container">
        <h2 className="specs-title">제품 상세 사양</h2>
        <p className="specs-subtitle">프리미엄 품질의 모든 것</p>

        {/* 주요 스펙 그리드 */}
        <div className="specs-grid">
          <div className="spec-card">
            <div className="spec-icon">🔋</div>
            <h3>배터리 수명</h3>
            <p className="spec-value">최대 10일</p>
            <p className="spec-detail">일반 사용 기준<br/>GPS 활성 시 7일<br/>자석 충전 2시간 완충</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">💧</div>
            <h3>방수 등급</h3>
            <p className="spec-value">IP68</p>
            <p className="spec-detail">수심 1.5m, 30분 방수<br/>수영장 사용 가능<br/>빗속 산책 안전</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">⚖️</div>
            <h3>무게 & 크기</h3>
            <p className="spec-value">28g</p>
            <p className="spec-detail">초경량 디자인<br/>목둘레 25-60cm 조절<br/>45 × 32 × 12mm</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">🐕</div>
            <h3>적합 품종</h3>
            <p className="spec-value">5kg 이상</p>
            <p className="spec-detail">소형~대형견<br/>말티즈, 포메, 시바 등<br/>고양이용 별도 출시 예정</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">📡</div>
            <h3>센서 구성</h3>
            <p className="spec-value">4종 센서</p>
            <p className="spec-detail">의료급 PPG 심박 센서<br/>±0.2℃ 정밀 온도 센서<br/>3축 가속도계 + GPS</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">📱</div>
            <h3>호환성</h3>
            <p className="spec-value">iOS & Android</p>
            <p className="spec-detail">iOS 14 이상<br/>Android 8 이상<br/>Bluetooth 5.0</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">🌐</div>
            <h3>통신 방식</h3>
            <p className="spec-value">LTE-M + GPS</p>
            <p className="spec-detail">전세계 로밍 지원<br/>실시간 위치 추적<br/>와이파이 불필요</p>
          </div>

          <div className="spec-card">
            <div className="spec-icon">🎨</div>
            <h3>컬러 옵션</h3>
            <p className="spec-value">3가지 색상</p>
            <p className="spec-detail">스페이스 그레이<br/>오션 블루<br/>로즈 골드</p>
          </div>
        </div>

        {/* 기술 스펙 상세 */}
        <div className="tech-specs-detail">
          <h3>기술 사양 상세</h3>
          <div className="tech-specs-grid">
            <div className="tech-spec-column">
              <h4>하드웨어</h4>
              <ul>
                <li><strong>프로세서:</strong> ARM Cortex-M4 32-bit</li>
                <li><strong>메모리:</strong> 512KB Flash, 64KB RAM</li>
                <li><strong>배터리:</strong> 리튬폴리머 350mAh</li>
                <li><strong>충전 방식:</strong> 자석 포고핀 5V/1A</li>
                <li><strong>무게:</strong> 28g (밴드 제외)</li>
                <li><strong>방수:</strong> IP68 (수심 1.5m, 30분)</li>
              </ul>
            </div>

            <div className="tech-spec-column">
              <h4>센서 정확도</h4>
              <ul>
                <li><strong>체온 센서:</strong> ±0.2℃ (36-42℃ 범위)</li>
                <li><strong>심박수:</strong> ±2 BPM (의료급 PPG)</li>
                <li><strong>위치 정확도:</strong> GPS ±3m, LTE ±50m</li>
                <li><strong>가속도계:</strong> ±16g, 3축</li>
                <li><strong>샘플링:</strong> 심박 1Hz, 온도 0.1Hz</li>
              </ul>
            </div>

            <div className="tech-spec-column">
              <h4>통신 & 연결</h4>
              <ul>
                <li><strong>셀룰러:</strong> LTE Cat-M1 (글로벌)</li>
                <li><strong>GPS:</strong> GPS, GLONASS, Galileo</li>
                <li><strong>블루투스:</strong> BLE 5.0</li>
                <li><strong>와이파이:</strong> 802.11 b/g/n (2.4GHz)</li>
                <li><strong>SIM:</strong> eSIM 내장</li>
              </ul>
            </div>

            <div className="tech-spec-column">
              <h4>환경 & 인증</h4>
              <ul>
                <li><strong>동작 온도:</strong> -10℃ ~ 50℃</li>
                <li><strong>보관 온도:</strong> -20℃ ~ 60℃</li>
                <li><strong>습도:</strong> 5% ~ 95% (비응결)</li>
                <li><strong>인증:</strong> KC, CE, FCC, RoHS</li>
                <li><strong>품질:</strong> ISO 13485 (의료기기)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 패키지 구성 */}
        <div className="package-contents">
          <h3>패키지 구성품</h3>
          <div className="package-grid">
            <div className="package-item">
              <div className="package-icon">📦</div>
              <p>JellyBeam 본체 × 1</p>
            </div>
            <div className="package-item">
              <div className="package-icon">🔌</div>
              <p>자석 충전 케이블 × 1</p>
            </div>
            <div className="package-item">
              <div className="package-icon">🎀</div>
              <p>실리콘 밴드 (M/L 2종)</p>
            </div>
            <div className="package-item">
              <div className="package-icon">📱</div>
              <p>퀵 스타트 가이드</p>
            </div>
            <div className="package-item">
              <div className="package-icon">🎁</div>
              <p>스티커 세트</p>
            </div>
            <div className="package-item">
              <div className="package-icon">📋</div>
              <p>보증서 (2년)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specs;

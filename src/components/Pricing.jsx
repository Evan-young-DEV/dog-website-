import React from 'react';
import '../styles/Pricing.css';

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">투명한 가격 정책</h2>
        <p className="pricing-subtitle">프리미엄 기능을 합리적인 가격으로</p>

        {/* 가격 카드 */}
        <div className="pricing-cards">
          <div className="price-card device-card">
            <div className="card-badge">사전 예약 특가</div>
            <h3>JellyBeam Loopband</h3>
            <div className="price-display">
              <span className="price-original">₩149,000</span>
              <span className="price-current">₩119,000</span>
            </div>
            <p className="price-note">20% 할인 (선착순 500대)</p>
            <ul className="price-features">
              <li>✓ 디바이스 1개</li>
              <li>✓ 충전 케이블 포함</li>
              <li>✓ 2년 무상 A/S</li>
              <li>✓ 30일 무료 체험</li>
            </ul>
            <button className="cta-button primary">지금 예약하기</button>
          </div>

          <div className="price-card subscription-card popular">
            <div className="card-badge popular-badge">추천</div>
            <h3>프리미엄 플랜</h3>
            <div className="price-display">
              <span className="price-current">₩9,900</span>
              <span className="price-period">/월</span>
            </div>
            <p className="price-note">연간 결제 시 ₩99,000 (2개월 무료)</p>
            <ul className="price-features">
              <li>✓ 실시간 AI 건강 분석</li>
              <li>✓ 조기 경고 알림</li>
              <li>✓ 수의사 리포트 무제한</li>
              <li>✓ 데이터 클라우드 백업</li>
              <li>✓ 가족 계정 공유 (최대 5명)</li>
              <li>✓ 우선 고객 지원</li>
            </ul>
            <button className="cta-button primary">플랜 선택하기</button>
          </div>

          <div className="price-card basic-card">
            <h3>베이직 플랜</h3>
            <div className="price-display">
              <span className="price-current">₩0</span>
              <span className="price-period">/월</span>
            </div>
            <p className="price-note">구독 없이 기본 기능 사용</p>
            <ul className="price-features">
              <li>✓ 실시간 활동량 추적</li>
              <li>✓ 심박수 모니터링</li>
              <li>✓ GPS 위치 추적</li>
              <li>✓ 7일 데이터 저장</li>
              <li className="disabled">✕ AI 건강 분석</li>
              <li className="disabled">✕ 조기 경고 알림</li>
            </ul>
            <button className="cta-button secondary">무료로 시작</button>
          </div>
        </div>

        {/* 경쟁사 가격 비교 */}
        <div className="price-comparison-table">
          <h3 className="comparison-table-title">경쟁사 대비 가격 비교</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th className="highlight">JellyBeam</th>
                <th>Fi Collar</th>
                <th>Whistle GO</th>
                <th>Tractive GPS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-label">디바이스 가격</td>
                <td className="highlight"><strong>₩119,000</strong><br/><span className="small">(사전 예약)</span></td>
                <td>₩199,000</td>
                <td>₩189,000</td>
                <td>₩79,000</td>
              </tr>
              <tr>
                <td className="row-label">월 구독료</td>
                <td className="highlight"><strong>₩9,900</strong></td>
                <td>₩13,200</td>
                <td>₩11,900</td>
                <td>₩6,600</td>
              </tr>
              <tr>
                <td className="row-label">1년 총 비용</td>
                <td className="highlight"><strong>₩237,800</strong></td>
                <td>₩357,400</td>
                <td>₩331,800</td>
                <td>₩158,200</td>
              </tr>
              <tr>
                <td className="row-label">온도 센서</td>
                <td className="highlight">✓ ±0.2℃</td>
                <td>✕</td>
                <td>✕</td>
                <td>✕</td>
              </tr>
              <tr>
                <td className="row-label">AI 건강 분석</td>
                <td className="highlight">✓</td>
                <td>기본</td>
                <td>기본</td>
                <td>✕</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 가격 FAQ */}
        <div className="pricing-faq">
          <h3>가격 관련 자주 묻는 질문</h3>
          <div className="faq-grid">
            <div className="faq-item-simple">
              <h4>💳 할부 결제 가능한가요?</h4>
              <p>네! 2~12개월 무이자 할부 지원합니다 (카드사별 상이)</p>
            </div>
            <div className="faq-item-simple">
              <h4>🔄 구독 취소는 언제든 가능한가요?</h4>
              <p>언제든 자유롭게 취소 가능합니다. 위약금 없습니다.</p>
            </div>
            <div className="faq-item-simple">
              <h4>🎁 다견 가정 할인이 있나요?</h4>
              <p>2개 이상 구매 시 디바이스 10% 추가 할인!</p>
            </div>
            <div className="faq-item-simple">
              <h4>📱 가족과 계정 공유되나요?</h4>
              <p>프리미엄 플랜은 최대 5명까지 공유 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

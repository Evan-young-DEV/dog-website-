import React from 'react';
import '../styles/Guarantee.css';

function Guarantee() {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">
        <h2 className="guarantee-title">100% 만족 보장</h2>
        <p className="guarantee-subtitle">걱정 없이 시작하세요. 모든 리스크는 저희가 책임집니다</p>

        {/* 주요 보증 */}
        <div className="guarantee-grid">
          <div className="guarantee-card highlight">
            <div className="guarantee-icon">🎁</div>
            <h3>30일 무료 체험</h3>
            <p className="guarantee-value">100% 전액 환불</p>
            <ul className="guarantee-details">
              <li>만족하지 못하면 언제든 환불</li>
              <li>왕복 배송비 무료</li>
              <li>사용 흔적 있어도 OK</li>
              <li>환불 사유 묻지 않습니다</li>
            </ul>
            <p className="guarantee-note">* 제품 파손만 없으면 됩니다</p>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-icon">🔧</div>
            <h3>2년 무상 A/S</h3>
            <p className="guarantee-value">무제한 수리</p>
            <ul className="guarantee-details">
              <li>정상 사용 중 고장 시 무상 수리</li>
              <li>24시간 내 교체품 선발송</li>
              <li>A/S 대기 시간 0</li>
              <li>배송비 100% 당사 부담</li>
            </ul>
            <p className="guarantee-note">* 방수, 배터리, 센서 모두 포함</p>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-icon">🔍</div>
            <h3>분실 보험</h3>
            <p className="guarantee-value">50% 할인</p>
            <ul className="guarantee-details">
              <li>GPS 추적 실패 시</li>
              <li>신제품 50% 할인가 재구매</li>
              <li>연 1회 제공</li>
              <li>구독 데이터 그대로 이전</li>
            </ul>
            <p className="guarantee-note">* 프리미엄 플랜 가입자 대상</p>
          </div>
        </div>

        {/* CTA */}
        <div className="guarantee-cta">
          <h3>아직도 고민 중이신가요?</h3>
          <p>30일 무료 체험으로 직접 경험해보세요. 마음에 안 들면 100% 환불해드립니다.</p>
          <button className="cta-button primary large">지금 시작하기 (무료 체험)</button>
          <p className="cta-note">신용카드 등록 필요 없음 · 자동 결제 없음</p>
        </div>
      </div>
    </section>
  );
}

export default Guarantee;

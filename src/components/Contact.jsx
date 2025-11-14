import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('뉴스레터 구독이 완료되었습니다!');
    setEmail('');
  };

  return (
    <>
      {/* 뉴스레터 섹션 */}
      <section id="contact" className="newsletter-section">
        <div className="newsletter-container">
          <h2>최신 소식을 받아보세요</h2>
          <p>신제품 출시, 특별 할인, 건강 정보를 가장 먼저 받아보세요</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">구독하기</button>
          </form>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* 회사 정보 */}
            <div className="footer-column">
              <h3 className="footer-logo">
                <span className="logo-icon">🐾</span>
                PetWear
              </h3>
              <p className="footer-description">
                AI 기반 펫 웨어러블로<br />
                반려동물의 건강한 삶을 지원합니다
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="YouTube">YouTube</a>
              </div>
            </div>

            {/* 제품 */}
            <div className="footer-column">
              <h4>제품</h4>
              <ul>
                <li><a href="#features">기능</a></li>
                <li><a href="#features">사양</a></li>
                <li><a href="#features">가격</a></li>
                <li><a href="#gallery">갤러리</a></li>
              </ul>
            </div>

            {/* 지원 */}
            <div className="footer-column">
              <h4>지원</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">사용자 가이드</a></li>
                <li><a href="#">고객 지원</a></li>
                <li><a href="#">보증 정책</a></li>
              </ul>
            </div>

            {/* 회사 */}
            <div className="footer-column">
              <h4>회사</h4>
              <ul>
                <li><a href="#">회사 소개</a></li>
                <li><a href="#">채용</a></li>
                <li><a href="#">파트너십</a></li>
                <li><a href="#">연락처</a></li>
              </ul>
            </div>

            {/* 연락처 */}
            <div className="footer-column">
              <h4>연락처</h4>
              <ul className="contact-info">
                <li>📞 1588-1234</li>
                <li>📧 support@petwear.com</li>
                <li>📍 서울시 강남구 테헤란로 123</li>
                <li>⏰ 평일 09:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 PetWear. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
              <a href="#">쿠키 정책</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;

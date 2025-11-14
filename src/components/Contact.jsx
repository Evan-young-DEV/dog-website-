import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('문의가 접수되었습니다! 빠른 시일 내에 연락드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      dogType: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">분양 문의하기</h2>
      <p className="contact-subtitle">궁금하신 사항이나 분양 문의를 남겨주세요</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름 *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">이메일 *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">전화번호 *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="010-1234-5678"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dogType">관심있는 품종</label>
          <select
            id="dogType"
            name="dogType"
            value={formData.dogType}
            onChange={handleChange}
          >
            <option value="">선택하세요</option>
            <option value="골든 리트리버">골든 리트리버</option>
            <option value="포메라니안">포메라니안</option>
            <option value="웰시코기">웰시코기</option>
            <option value="비글">비글</option>
            <option value="시바견">시바견</option>
            <option value="말티즈">말티즈</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">문의 내용 *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="문의하실 내용을 입력하세요"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">문의하기</button>
      </form>

      <div className="contact-info">
        <h3>연락처 정보</h3>
        <p>📞 전화: 02-1234-5678</p>
        <p>📧 이메일: info@dogworld.com</p>
        <p>📍 주소: 서울특별시 강남구 테헤란로 123</p>
        <p>⏰ 운영시간: 평일 10:00 - 19:00 (주말 예약 가능)</p>
      </div>
    </section>
  );
}

export default Contact;

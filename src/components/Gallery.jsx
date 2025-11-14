import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const galleryImages = [
    { id: 1, caption: '행복한 반려동물과 함께' },
    { id: 2, caption: '야외에서 활동 추적' },
    { id: 3, caption: '건강한 일상' },
    { id: 4, caption: '실시간 모니터링' },
    { id: 5, caption: '반려동물과 주인' },
    { id: 6, caption: '산책 중' }
  ];

  const testimonials = [
    {
      id: 1,
      name: '김민지',
      pet: '골든 리트리버, 3살',
      text: '심장병을 조기에 발견해서 치료받을 수 있었어요. 생명을 구한 제품입니다.',
      rating: 5
    },
    {
      id: 2,
      name: '박준혁',
      pet: '웰시코기, 5살',
      text: '활동량이 줄어든 걸 AI가 감지해서 알려줬고, 병원 가서 관절염을 발견했습니다.',
      rating: 5
    },
    {
      id: 3,
      name: '이서연',
      pet: '비글, 2살',
      text: 'GPS 덕분에 잃어버렸던 우리 강아지를 찾았어요. 감사합니다!',
      rating: 5
    }
  ];

  return (
    <>
      {/* 풀스크린 갤러리 */}
      <section id="gallery" className="gallery-fullscreen">
        <div className="gallery-header">
          <h2>반려동물과 함께하는 건강한 일상</h2>
          <p>실제 사용자들의 모습을 확인하세요</p>
        </div>
        <div className="gallery-grid-large">
          {galleryImages.map(image => (
            <div key={image.id} className="gallery-item-large">
              <div className="gallery-image-placeholder">
                <span>실사 이미지 {image.id}</span>
              </div>
              <div className="gallery-overlay">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 리뷰 섹션 */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">실제 사용자 후기</h2>
          <p className="testimonials-subtitle">10,000명 이상의 반려인이 선택한 이유</p>

          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-user-image">
                  {/* 플레이스홀더 */}
                  <div className="user-image-placeholder">
                    <span>사용자 사진</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.pet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;

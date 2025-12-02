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

  return (
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
  );
}

export default Gallery;

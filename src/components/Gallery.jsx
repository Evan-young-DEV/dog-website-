import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const images = [
    { id: 1, emoji: '🐕', caption: '행복한 강아지' },
    { id: 2, emoji: '🐶', caption: '산책 나온 강아지' },
    { id: 3, emoji: '🦮', caption: '공원에서 노는 강아지' },
    { id: 4, emoji: '🐕‍🦺', caption: '훈련받는 강아지' },
    { id: 5, emoji: '🐩', caption: '멋진 포즈의 강아지' },
    { id: 6, emoji: '🐕', caption: '친구들과 함께' },
    { id: 7, emoji: '🐶', caption: '잠자는 강아지' },
    { id: 8, emoji: '🦮', caption: '식사 시간' }
  ];

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">강아지 갤러리</h2>
      <p className="gallery-subtitle">우리 강아지들의 일상을 만나보세요</p>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <div className="gallery-emoji">{image.emoji}</div>
            <p className="gallery-caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

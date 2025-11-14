import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 className="home-title">사랑스러운 강아지들과 함께하세요</h1>
        <p className="home-description">
          건강하고 행복한 강아지들이 새로운 가족을 기다리고 있습니다.
          <br />
          책임감 있는 분양으로 평생의 친구를 만나보세요.
        </p>
        <button className="home-button" onClick={() => {
          document.getElementById('dogs').scrollIntoView({ behavior: 'smooth' });
        }}>
          강아지 보러가기
        </button>
      </div>
    </section>
  );
}

export default Home;

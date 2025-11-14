import React from 'react';
import '../styles/Dogs.css';

function Dogs() {
  const dogs = [
    {
      id: 1,
      name: '골든 리트리버',
      age: '3개월',
      personality: '온순하고 친근함',
      description: '가족과 함께하기 좋은 착한 강아지입니다.',
      emoji: '🦮'
    },
    {
      id: 2,
      name: '포메라니안',
      age: '2개월',
      personality: '활발하고 귀여움',
      description: '작지만 똑똑하고 애교가 많은 강아지입니다.',
      emoji: '🐕'
    },
    {
      id: 3,
      name: '웰시코기',
      age: '4개월',
      personality: '영리하고 충성스러움',
      description: '짧은 다리가 매력적인 사랑스러운 강아지입니다.',
      emoji: '🐶'
    },
    {
      id: 4,
      name: '비글',
      age: '3개월',
      personality: '호기심 많고 활동적',
      description: '에너지가 넘치고 사람을 좋아하는 강아지입니다.',
      emoji: '🐕‍🦺'
    },
    {
      id: 5,
      name: '시바견',
      age: '5개월',
      personality: '독립적이고 용감함',
      description: '일본 토종견으로 충성심이 강한 강아지입니다.',
      emoji: '🐕'
    },
    {
      id: 6,
      name: '말티즈',
      age: '2개월',
      personality: '상냥하고 사교적',
      description: '하얀 털이 아름다운 소형견입니다.',
      emoji: '🐩'
    }
  ];

  return (
    <section id="dogs" className="dogs">
      <h2 className="section-title">분양 가능한 강아지들</h2>
      <div className="dogs-grid">
        {dogs.map(dog => (
          <div key={dog.id} className="dog-card">
            <div className="dog-emoji">{dog.emoji}</div>
            <h3 className="dog-name">{dog.name}</h3>
            <p className="dog-age">나이: {dog.age}</p>
            <p className="dog-personality">성격: {dog.personality}</p>
            <p className="dog-description">{dog.description}</p>
            <button className="dog-button">자세히 보기</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dogs;

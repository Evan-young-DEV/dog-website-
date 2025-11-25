import React from 'react';
import '../styles/Reviews.css';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "김수진",
      age: 34,
      job: "간호사",
      petName: "보리",
      petAge: 5,
      petBreed: "말티즈",
      text: "보리가 멀쩡해 보여서 그냥 지나칠 뻔했는데 JellyBeam에서 체온 +0.27°C 상승 알림 뜨는 순간 가슴 덜컥했습니다. 병원 가니 초기 장염… 진짜 이거 아니었으면 큰일 날 뻔했어요.",
      image: "/images/20251125_111552.png"
    },
    {
      id: 2,
      name: "이준석",
      age: 45,
      job: "택배기사",
      petName: "백구",
      petAge: 7,
      petBreed: "진돗개",
      text: "JellyBeam이 활동량 절반 감소 경고 보내줘서 바로 병원 갔습니다. 심장 문제 초기라더군요… 다리 힘 풀리더라고요.",
      image: "/images/20251125_112613.png"
    },
    {
      id: 3,
      name: "최혜원",
      age: 25,
      job: "애견미용사",
      petName: "솜",
      petAge: 3,
      petBreed: "포메라니안",
      text: "솜이 스트레스 지수 92 뜨자마자 안았는데 그날 처음 제 품에서 잠들었어요. 말 못하는 마음을 숫자로 들은 느낌이었어요.",
      image: "/images/som-pomeranian.jpg"
    },
    {
      id: 4,
      name: "배서연",
      age: 27,
      job: "대학원생",
      petName: "단추",
      petAge: 4,
      petBreed: "믹스견",
      text: "단추가 수면 점수 87점 찍힌 날 제 무릎 위에서 처음으로 푹 잤어요. 입양 후 7개월 만에 처음이라… 진짜 눈물 났습니다.",
      image: "/images/20251125_110229.png"
    },
    {
      id: 5,
      name: "박민호",
      age: 29,
      job: "UX디자이너",
      petName: "루피",
      petAge: 2,
      petBreed: "웰시코기",
      text: "루피의 다리 활동 비대칭 그래프 보고 병원 갔더니 십자인대 초기래요. 모르고 지나쳤으면 진짜 후회할 뻔했습니다.",
      image: "/images/20251125_112127.png"
    },
    {
      id: 6,
      name: "송유림",
      age: 31,
      job: "카페 운영",
      petName: "라떼",
      petAge: 4,
      petBreed: "비숑",
      text: "혼자 있을 때 토하던 이유 JellyBeam에서 스트레스 스파이크 시간대 찍히고 나서 정확히 알았습니다. 관리하고 나선 토 한 번도 안 했어요.",
      image: "/images/20251125_111854.png"
    },
    {
      id: 7,
      name: "오성훈",
      age: 39,
      job: "스타트업 대표",
      petName: "하루",
      petAge: 5,
      petBreed: "시바견",
      text: "하루 활동량 급감 + 체온 저하 알림 보고 바로 병원 갔어요. 장 트러블 + 우울 초기라더군요… 무너지는 줄 알았습니다.",
      image: "/images/20251125_112349.png"
    },
    {
      id: 8,
      name: "김도현",
      age: 50,
      job: "공무원",
      petName: "몽이",
      petAge: 10,
      petBreed: "시추",
      text: "밤마다 켁켁거리길래 나이 탓이라 넘겼는데 JellyBeam이 수면 중 무호흡 기록 보여줬습니다. 기관지 협착 초기였어요… 진짜 감사해요.",
      image: "/images/20251125_112839.png"
    },
    {
      id: 9,
      name: "이소연",
      age: 33,
      job: "초등교사",
      petName: "탄이",
      petAge: 4,
      petBreed: "골든리트리버",
      text: "탄이가 밤에 28~30번 깼다는 기록 보고 너무 미안해서 울었어요. 한 달 관리했더니 수면 점수 97점… 표정부터 달라졌습니다.",
      image: "/images/20251125_112839.png"
    }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">
          반려인들의 진심 어린 후기 🐶💕
        </h2>
        <p className="reviews-subtitle">
          JellyBeam과 함께한 특별한 순간들
        </p>

        <div className="reviews-rolling-wrapper">
          <div className="reviews-rolling">
            {/* 첫 번째 세트 */}
            {reviews.map((review) => (
              <div key={`first-${review.id}`} className="review-card">
                {review.image ? (
                  <div className="review-image">
                    <img src={review.image} alt={review.petName} />
                  </div>
                ) : (
                  <div className="review-emoji">{review.emoji}</div>
                )}
                <div className="review-header">
                  <div className="review-pet-info">
                    <div className="pet-breed-age">
                      <span className="pet-breed">{review.petBreed}</span>
                      <span className="pet-age">{review.petAge}살</span>
                    </div>
                    <h3 className="pet-name">'{review.petName}'</h3>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-owner-info">{review.name}({review.age}, {review.job})</p>
              </div>
            ))}
            {/* 두 번째 세트 (무한 롤링을 위한 복제) */}
            {reviews.map((review) => (
              <div key={`second-${review.id}`} className="review-card">
                {review.image ? (
                  <div className="review-image">
                    <img src={review.image} alt={review.petName} />
                  </div>
                ) : (
                  <div className="review-emoji">{review.emoji}</div>
                )}
                <div className="review-header">
                  <div className="review-pet-info">
                    <div className="pet-breed-age">
                      <span className="pet-breed">{review.petBreed}</span>
                      <span className="pet-age">{review.petAge}살</span>
                    </div>
                    <h3 className="pet-name">'{review.petName}'</h3>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-owner-info">{review.name}({review.age}, {review.job})</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

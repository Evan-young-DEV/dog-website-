import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "제품 사용",
      icon: "🐶",
      question: "우리 강아지 체중 3kg인데 사용 가능한가요?",
      answer: "현재 모델은 5kg 이상 권장합니다. 3kg 미만 초소형견용 'JellyBeam Mini'는 2025년 3월 출시 예정입니다. 사전 알림 신청 시 출시 즉시 연락드립니다."
    },
    {
      category: "배터리",
      icon: "🔋",
      question: "충전은 얼마나 자주 해야 하나요?",
      answer: "일반 사용 시 최대 10일, GPS 활성 모드 시 7일입니다. 자석 충전 방식으로 2시간이면 완전 충전됩니다. 배터리 20% 이하 시 앱으로 알림을 보내드립니다."
    },
    {
      category: "구독",
      icon: "💰",
      question: "구독 안 하면 사용 못 하나요?",
      answer: "아니요! 기본 활동량 추적, 심박수 모니터링, GPS 위치 추적은 무료입니다. AI 건강 분석, 조기 경고 알림, 수의사 리포트는 프리미엄 플랜이 필요합니다."
    },
    {
      category: "호환성",
      icon: "📱",
      question: "아이폰/안드로이드 둘 다 되나요?",
      answer: "네! iOS 14 이상, Android 8 이상에서 모두 사용 가능합니다. 블루투스 5.0을 지원하는 스마트폰이면 문제없이 연결됩니다."
    },
    {
      category: "방수",
      icon: "🌊",
      question: "수영할 때도 착용 가능한가요?",
      answer: "IP68 방수 등급으로 수심 1.5m에서 30분간 방수됩니다. 수영장에서는 문제없지만, 바닷물은 염분 때문에 권장하지 않습니다. 사용 후 깨끗한 물로 헹궈주세요."
    },
    {
      category: "환불",
      icon: "🔄",
      question: "환불 정책이 어떻게 되나요?",
      answer: "30일 무료 체험 보장! 만족하지 못하시면 100% 전액 환불해드립니다. 왕복 배송비도 저희가 부담합니다. 제품이 파손되지 않았다면 사용 흔적이 있어도 환불 가능합니다."
    },
    {
      category: "반려동물",
      icon: "🐱",
      question: "고양이도 사용 가능한가요?",
      answer: "고양이 전용 'JellyBeam Loop-C'는 2025년 5월 출시 예정입니다. 고양이의 작은 체형과 예민한 성격을 고려한 특별 디자인으로 개발 중입니다. 사전 알림 신청 받고 있습니다."
    },
    {
      category: "병원",
      icon: "🏥",
      question: "동물병원에서 데이터 볼 수 있나요?",
      answer: "네! PDF 리포트 출력 또는 병원 전용 웹 뷰어로 공유 가능합니다. 현재 전국 120개 제휴병원에서 JellyBeam 데이터를 진료에 활용하고 있습니다."
    },
    {
      category: "정확도",
      icon: "🎯",
      question: "온도 측정이 정말 정확한가요?",
      answer: "±0.2℃ 의료급 정확도를 자랑합니다. 서울대 수의대와 함께한 임상 시험에서 실제 직장 체온계와 평균 오차 0.15℃로 검증되었습니다."
    },
    {
      category: "위치",
      icon: "🗺️",
      question: "해외에서도 GPS 추적이 되나요?",
      answer: "네! 글로벌 LTE-M 로밍과 GPS를 지원해 전세계 대부분 국가에서 사용 가능합니다. 다만 중국, 북한 등 일부 국가는 제한될 수 있습니다."
    },
    {
      category: "건강",
      icon: "⚕️",
      question: "어떤 질병을 미리 발견할 수 있나요?",
      answer: "초기 장염, 심장 질환, 관절염, 스트레스성 질환, 수면 장애 등을 조기에 발견할 수 있습니다. 실제로 342건의 조기 발견 사례가 보고되었습니다."
    },
    {
      category: "알림",
      icon: "🔔",
      question: "알림이 너무 자주 와서 시끄러울까 걱정돼요",
      answer: "걱정 마세요! AI가 학습해 반려동물의 정상 범위를 파악하고, 실제로 이상이 있을 때만 알림을 보냅니다. 알림 민감도는 앱에서 조절 가능합니다."
    },
    {
      category: "착용감",
      icon: "😊",
      question: "강아지가 싫어하지 않을까요?",
      answer: "초경량 28g 디자인으로 대부분 강아지들이 2-3일 내 적응합니다. 의료용 실리콘 밴드로 피부 자극이 없고, 임상 시험 참여 200마리 중 194마리(97%)가 문제없이 착용했습니다."
    },
    {
      category: "배송",
      icon: "📦",
      question: "배송은 얼마나 걸리나요?",
      answer: "사전 예약 제품은 2024년 12월부터 순차 배송됩니다. 결제 순서대로 발송되며, 배송 2-3일 전 카카오톡으로 안내드립니다. 당일/익일 배송은 추후 재고 확보 시 가능합니다."
    },
    {
      category: "AS",
      icon: "🔧",
      question: "고장 나면 어떻게 하나요?",
      answer: "2년 무상 A/S를 제공합니다. 고장 신고 접수 후 24시간 내 교체품을 먼저 발송하고, 고장품은 나중에 회수합니다. A/S 기간 동안 불편함이 없도록 최선을 다합니다."
    },
    {
      category: "분실",
      icon: "🔍",
      question: "기기를 잃어버리면 어떡하죠?",
      answer: "GPS 추적으로 마지막 위치를 확인할 수 있습니다. 만약 찾지 못하면 '분실 보험' 혜택으로 신제품을 50% 할인가에 재구매할 수 있습니다."
    },
    {
      category: "다견",
      icon: "🐕🐕",
      question: "강아지가 2마리인데 따로 구독해야 하나요?",
      answer: "아니요! 한 계정으로 여러 디바이스를 관리할 수 있습니다. 프리미엄 플랜 1개로 최대 3마리까지 무료, 4마리부터는 마리당 ₩4,900 추가입니다."
    },
    {
      category: "데이터",
      icon: "📊",
      question: "데이터는 얼마나 오래 보관되나요?",
      answer: "프리미엄 플랜은 무제한 영구 보관, 베이직 플랜은 최근 7일치만 저장됩니다. 언제든 CSV/PDF로 내보내기 가능하고, 계정 삭제 시 모든 데이터는 완전 삭제됩니다."
    },
    {
      category: "수명",
      icon: "⏱️",
      question: "제품 수명은 얼마나 되나요?",
      answer: "일반적으로 3-5년 사용 가능합니다. 배터리는 500회 충전 후에도 80% 이상 용량을 유지합니다. 2년 무상 A/S 이후에도 유상 수리 서비스를 제공합니다."
    },
    {
      category: "보안",
      icon: "🔒",
      question: "데이터 보안은 안전한가요?",
      answer: "256-bit AES 암호화로 모든 데이터를 보호합니다. AWS 서울 리전에 저장되며, ISO 27001 정보보호 인증을 받았습니다. 제3자와 데이터를 공유하지 않습니다."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">자주 묻는 질문</h2>
        <p className="faq-subtitle">궁금한 점이 있으신가요? 여기에서 답을 찾아보세요</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span className="faq-icon">{faq.icon}</span>
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>여전히 궁금한 점이 있으신가요?</h3>
          <p>24/7 고객 지원팀이 도와드립니다</p>
          <div className="faq-cta-buttons">
            <button className="cta-button primary">카카오톡 상담</button>
            <button className="cta-button secondary">이메일 문의</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

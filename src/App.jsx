import React from 'react';
import './index.css';
import HeroImage from './assets/rice_bread_hero_1777530460117.png';
import FigCampagneImage from './assets/fig_campagne_1777530478385.png';
import RiceRollImage from './assets/rice_roll_1777530492998.png';

function App() {
  const menuItems = [
    {
      name: "순미 100% 식빵",
      description: "밀가루 제로, 우리 쌀로만 구워낸 쫄깃하고 부드러운 기본 식빵",
      price: "6,000원",
      image: HeroImage
    },
    {
      name: "흑임자 쌀롤",
      description: "고소한 흑임자가 듬뿍 들어간 폭신폭신한 롤빵",
      price: "4,500원",
      image: RiceRollImage
    },
    {
      name: "무화과 깜빠뉴",
      description: "톡톡 터지는 무화과와 바삭한 크러스트의 환상적인 조화",
      price: "7,000원",
      image: FigCampagneImage
    }
  ];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">미소 쌀빵</div>
        <ul className="nav-links">
          <li><a href="#about">브랜드 소개</a></li>
          <li><a href="#menu">메뉴 안내</a></li>
          <li><a href="#order">구매 방법</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" id="about">
        <div className="hero-content">
          <h1 className="hero-title">속이 편안한,<br/>자연을 담은 쌀빵</h1>
          <p className="hero-subtitle">
            밀가루 없이 100% 우리 쌀로 만들어 매일 먹어도 속이 편안합니다.<br/>
            건강한 재료로 정성을 다해 굽습니다.
          </p>
          <a href="#menu" className="btn-primary">메뉴 보기</a>
        </div>
        <div className="hero-image-wrapper">
          <img src={HeroImage} alt="미소 쌀빵 메인" className="hero-image" />
        </div>
      </header>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <div className="section-header">
          <h2>오늘의 빵</h2>
          <p>매일 아침 매장에서 직접 굽는 신선한 쌀빵입니다.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <div className="menu-image-container">
                <img src={item.image} alt={item.name} className="menu-image" />
              </div>
              <div className="menu-info">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-desc">{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section className="order-section" id="order">
        <div className="section-header">
          <h2>구매 안내</h2>
          <p>건강하고 맛있는 쌀빵을 만나는 방법</p>
        </div>
        <div className="order-steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>매장 방문</h3>
            <p>서울시 강남구 테헤란로 123<br/>월-토 08:00 ~ 20:00 (일요일 휴무)</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h3>예약 픽업</h3>
            <p>카카오톡 채널 '미소쌀빵'<br/>최소 1일 전 예약 시 원하는 시간에 픽업 가능합니다.</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h3>전국 택배</h3>
            <p>온라인 스토어 준비 중입니다.<br/>조금만 기다려주세요!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">미소 쌀빵 MISO RICE BAKERY</div>
          <p className="footer-contact">02-1234-5678 | 카카오톡 채널: 미소쌀빵</p>
          <p className="footer-copyright">&copy; 2026 MISO RICE BAKERY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

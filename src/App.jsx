import React from 'react';
import './index.css';

// Import newly generated images
import ChiffonImage from './assets/chiffon_1777531126257.png';
import PoundCakeImage from './assets/pound_cake_1777531143698.png';
import MorningRollImage from './assets/morning_roll_1777531160475.png';
import CastellaImage from './assets/castella_1777531179235.png';
import MuffinImage from './assets/muffin_1777531195375.png';
import SconeImage from './assets/scone_1777531210615.png';
import PizzaBreadImage from './assets/pizza_bread_1777531228087.png';
import SausageBreadImage from './assets/sausage_bread_1777531247453.png';
import LoafBreadImage from './assets/loaf_bread_new_1777531447942.png';

// Use one of the images as a hero image
const HeroImage = MorningRollImage;

function App() {
  const menuItems = [
    { name: "쉬폰", description: "구름을 베어 문 듯한 폭신함, 쌀로 만들어 더욱 부드러워요.", price: "5,500원", image: ChiffonImage },
    { name: "파운드케이크", description: "따뜻한 차 한 잔과 어울리는 달콤하고 촉촉한 파운드", price: "6,000원", image: PoundCakeImage },
    { name: "모닝빵", description: "아침을 여는 고소하고 부드러운 쌀 모닝빵", price: "4,000원", image: MorningRollImage },
    { name: "카스테라", description: "달걀과 쌀가루의 완벽한 조화로 입안에서 녹아요.", price: "5,000원", image: CastellaImage },
    { name: "머핀", description: "달콤한 초코칩과 호두가 듬뿍 들어간 든든한 간식", price: "3,500원", image: MuffinImage },
    { name: "스콘", description: "겉은 바삭, 속은 촉촉한 매력만점 쌀스콘", price: "3,800원", image: SconeImage },
    { name: "피자빵", description: "누구나 좋아하는 짭짤하고 든든한 그 맛", price: "4,500원", image: PizzaBreadImage },
    { name: "소시지빵", description: "뽀득한 소시지를 품은 쫀득한 쌀빵", price: "4,200원", image: SausageBreadImage },
    { name: "식빵", description: "어떤 잼과도 찰떡궁합, 속이 편안한 기본 식빵", price: "5,000원", image: LoafBreadImage }
  ];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">혜리米빵</div>
        <ul className="nav-links">
          <li><a href="#about">소개</a></li>
          <li><a href="#menu">메뉴 안내</a></li>
          <li><a href="#order">구매 방법</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" id="about">
        <div className="blob-bg blob-1"></div>
        <div className="blob-bg blob-2"></div>
        <div className="hero-content">
          <h1 className="hero-title">속이 편안한 쌀빵</h1>
          <p className="hero-subtitle">
            밀가루 없이 100% 우리 쌀로 만들어<br/>매일 먹어도 속이 편안한 혜리米빵입니다.
          </p>
          <a href="#menu" className="btn-primary">맛있는 빵 구경하기</a>
        </div>
        <div className="hero-image-wrapper">
          <img src={HeroImage} alt="혜리米빵 메인" className="hero-image" />
        </div>
      </header>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <div className="section-header">
          <h2>메뉴 안내</h2>
          <p>정성을 다해 굽는 라인업을 소개합니다.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <div className="menu-image-container">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="menu-image" />
                ) : (
                  <div className="menu-image-placeholder">
                    <span>{item.name.includes(" ") ? item.name.split(" ")[1].slice(0, 2) : item.name.slice(0, 2)}</span>
                  </div>
                )}
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
          <p>혜리米빵 구매 및 예약 문의</p>
        </div>
        <div className="order-steps">
          <div className="step-card">
            <div className="step-icon">
              <svg viewBox="0 0 512 512" width="64" height="64" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
                <path fill="#FEE500" d="M256 80C141.1 80 48 154.6 48 246.7c0 58.7 36 110.1 90.7 140.2l-24 88.5c-1.5 5.5 5 9.7 9.8 6.5l101.4-67.6c9.8 1 19.8 1.5 30 1.5 114.9 0 208-74.6 208-166.7S370.9 80 256 80z"/>
                <path fill="#3C1E1E" d="M198 216c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm140 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"/>
              </svg>
            </div>
            <h3>카카오톡 채널</h3>
            <p>언제든 편하게 카카오톡으로<br/>구매 및 예약 문의를 남겨주세요!</p>
            <a href="http://pf.kakao.com/_PxaxlnC" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block', padding: '0.8rem 1.5rem' }}>카카오톡 문의하기</a>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <svg viewBox="0 0 448 512" width="60" height="60" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
                <path fill="url(#instagramGradient)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>인스타그램 DM</h3>
            <p>인스타그램 DM으로도<br/>안내 및 예약을 도와드리고 있습니다!</p>
            <a href="https://www.instagram.com/hyerimmi.ricebakery/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block', padding: '0.8rem 1.5rem', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', border: 'none' }}>인스타그램 방문하기</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">혜리米빵</div>
          <p className="footer-contact">
            인스타그램: <a href="https://www.instagram.com/hyerimmi.ricebakery/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>@hyerimmi.ricebakery</a>
          </p>
          <p className="footer-copyright">&copy; 2026 혜리米빵. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './style.css';

const Header = () => (
    <div id="head">
      <img src="https://i.namu.wiki/i/6ie-l4oYYPAs43NZ6sfoEonbvROUE4D4BC9tZy2wCWTPe9nbUFtInBCLKssNpBFM1KvLoHUo1mr4PBog2cAo9Q.svg" alt="Logo" />
    </div>
  );

const App = () => {
    const items = [
      { id: 'item1', imgSrc: 'https://cdn.pixabay.com/photo/2019/02/04/06/46/apple-3974057_640.jpg', description: '🍎 당도 보장! 충주 꿀사과 / 1,300원' },
      { id: 'item2', imgSrc: 'https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_640.jpg', description: '⌚ 모던 메탈 손목시계 / 250,000원' },
      { id: 'item3', imgSrc: 'https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_640.jpg', description: '📷 블랙프라이데이 30% 할인! 카메라 / 520,000원' },
      { id: 'item4', imgSrc: 'https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_640.jpg', description: '👖 멋있는 청바지 / 35,000원' },
    ];

    const [cart,setCart] = useState({}) => {
        setCart(prevCart => ({
            
        }));
    }
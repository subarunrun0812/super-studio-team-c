// src/components/Rewards.tsx

import React from 'react';
import './Rewards.css'; // ここでスタイルシートをインポートします

const Rewards: React.FC = () => {
  // 仮のポイント数とステータス
  const points = 181.6;
  const status = 'Green会員';

  return (
    <div className="rewards-container">
      <div className="rewards-header">
        <div className="status">{status}</div>
      </div>
      <div className="points">
        <h2 className="points-total">{points}★</h2>
      </div>
      <div className="rewards-progress-bar">
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${(points / 400) * 100}%` }}></div>
        </div>
        <div className="progress-bar-points">
          <span className="progress-point">30</span>
          <span className="progress-point">100</span>
          <span className="progress-point">150</span>
          <span className="progress-point">400</span>
        </div>
      </div>
      <div className="rewards-actions">
        <button className="btn-primary">商品に交換</button>
        <button className="btn-secondary">もっと見る</button>
      </div>
    </div>
  );
}

export default Rewards;

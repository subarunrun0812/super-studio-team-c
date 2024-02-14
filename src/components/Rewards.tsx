// src/components/Rewards.tsx

import React from 'react';

interface RewardProps {
  level: string;
  points: number;
  benefits: string[];
}

const RewardLevel: React.FC<RewardProps> = ({ level, points, benefits }) => (
  <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
    <h2>{level} - {points} ポイント</h2>
    <ul>
      {benefits.map(benefit => (
        <li key={benefit}>{benefit}</li>
      ))}
    </ul>
  </div>
);

const Rewards: React.FC = () => {
  const rewardsInfo = [
    { level: 'ブロンズ', points: 100, benefits: ['無料ドリンクサイズアップ'] },
    { level: 'シルバー', points: 300, benefits: ['無料ドリンク1杯', '無料ドリンクサイズアップ'] },
    { level: 'ゴールド', points: 500, benefits: ['無料ドリンク2杯', '無料フード1品', '無料ドリンクサイズアップ'] },
  ];

  return (
    <div>
      <h1>リワード</h1>
      {rewardsInfo.map(info => (
        <RewardLevel key={info.level} level={info.level} points={info.points} benefits={info.benefits} />
      ))}
    </div>
  );
}

export default Rewards;

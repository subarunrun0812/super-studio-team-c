// src/components/InstagramRanking.tsx
import React from 'react';

interface RankingItem {
    category: string;
    name: string;
    value: number;
    imageUrl: string;
}

interface InstagramRankingProps {
    ranking: RankingItem[];
}

const InstagramRanking: React.FC<InstagramRankingProps> = ({ ranking }) => {
    return (
        <div>
            <h3>Instagram 統計ランキング</h3>
            {ranking.map((item, index) => (
                <div key={index}>
                    <strong>{item.category}:</strong> {item.name}（{item.value}いいね）
                    <div>
                        <img src={item.imageUrl} alt={item.name} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
                    </div>

                </div>
            ))}
        </div>
    );
};

export default InstagramRanking;

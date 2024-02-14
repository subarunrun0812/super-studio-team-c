import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const SDGsInfo: React.FC = () => {
  // SDGs情報を配列で管理
  const sdgsInfos = [
    {
      title: "SDGsの3番",
      description: "あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を促進する。",
      imageUrl: "https://github.com/kknowk/kknowk/assets/131352588/419f903e-a45d-4d4a-b9af-4058f3b51c0e"
    },
    {
      title: "SDGsの4番",
      description: "包括的かつ公正な質の高い教育をすべての人に提供し、生涯学習の機会を促進する。",
      imageUrl: "https://github.com/kknowk/kknowk/assets/131352588/419f903e-a45d-4d4a-b9af-4058f3b51c0e"
    },
    {
      title: "SDGsの5番",
      description: "ジェンダー平等を達成し、すべての女性と少女のエンパワーメントを実現する。",
      imageUrl: "https://github.com/kknowk/kknowk/assets/131352588/419f903e-a45d-4d4a-b9af-4058f3b51c0e"
    }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', margin: '30px' }}>
      {sdgsInfos.map((info, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={info.imageUrl}
            alt={info.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SDGsInfo;

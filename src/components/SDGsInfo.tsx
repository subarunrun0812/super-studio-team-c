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
      title: "SDGsの7番",
      description: "エネルギーを世界中の人々に そしてクリーンなものへ ",
      imageUrl: "https://github.com/tatashir/images/assets/115047593/cebd052d-421a-4b91-83d2-95502e15af40"
    },
    {
      title: "SDGsの13番",
      description: "気候変動から地球を守るために、今すぐ行動を起こそう",
      imageUrl: "https://github.com/tatashir/images/assets/115047593/c05e0e7b-1008-45cf-855e-7f7a7cc5ad05"
    }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', margin: '30px' }}>
      {sdgsInfos.map((info, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
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

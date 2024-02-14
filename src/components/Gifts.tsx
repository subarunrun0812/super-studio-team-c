// src/components/Gifts.tsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const giftOptions = [
  {
    name: "エレガントタイプ",
    image: "https://github.com/tatashir/images/assets/115047593/7fc65dc9-6812-4e3c-beb8-137c807f61b6",
    description: "エレガントなデザインで特別な日にぴったりのラッピングです。",
  },
  {
    name: "カジュアルタイプ",
    image: "https://github.com/tatashir/images/assets/115047593/10add1ea-5b79-4d73-b58f-bd052e38b9a2",
    description: "カジュアルなプレゼントに最適なラッピングです。",
  },
  {
    name: "子供向けタイプ",
    image: "https://github.com/tatashir/images/assets/115047593/e120ef90-4f73-4ed1-9cc9-107884993326",
    description: "子供向けの楽しいデザインのラッピングです。",
  },
];

const Gifts: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ギフトラッピング選択
      </Typography>
      <Grid container spacing={4}>
        {giftOptions.map((gift) => (
          <Grid item xs={12} sm={6} md={4} key={gift.name}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={gift.image}
                alt={gift.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {gift.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {gift.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gifts;

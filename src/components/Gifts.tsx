// src/components/Gifts.tsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const giftOptions = [
  {
    name: "ラッピングタイプA",
    image: "https://github.com/kknowk/kknowk/assets/131352588/aebf5e0c-ee04-459c-84b9-99d8ed117167",
    description: "エレガントなデザインで特別な日にぴったりのラッピングです。",
  },
  {
    name: "ラッピングタイプB",
    image: "https://github.com/kknowk/kknowk/assets/131352588/aebf5e0c-ee04-459c-84b9-99d8ed117167",
    description: "カジュアルなプレゼントに最適なラッピングです。",
  },
  {
    name: "ラッピングタイプC",
    image: "https://github.com/kknowk/kknowk/assets/131352588/aebf5e0c-ee04-459c-84b9-99d8ed117167",
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
                height="140"
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

import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, Paper, Typography } from '@mui/material';

type BalanceCardProps = {
    title?: String;
    content?: String;
    label: any
}

// id: 0,
// name: "PETR3.SA",
// value: "R$ 42,62",
// variation: "+0.27%"
const Cards = ({item}: any): JSX.Element => {
        return (
        <Card variant="outlined" sx={{ display: "flex", width: 200, height: 180, alignItems: "center", justifyContent: "center", backgroundColor:"black", borderColor:"white"}}>
            <CardContent>
              <CardActionArea href='/Mercado'>
                <Typography variant="body1" color="white" sx={{ marginTop: 1}}>
                    {item.name}
                </Typography>
                <Typography variant="h5" color="white" sx={{ marginTop: 2}}>
                    {item.value}
                </Typography>
                <Typography variant="h5" color="white" sx={{ marginTop: 2}}>
                    {item.variation}
                </Typography>
              </CardActionArea>
            </CardContent>
        </Card>
        )
    }

export default Cards;

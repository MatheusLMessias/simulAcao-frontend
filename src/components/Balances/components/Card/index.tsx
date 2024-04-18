import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type BalanceCardProps = {
  title?: String;
  content?: String;
  label: any;
};
const BalanceCard: React.FC<BalanceCardProps> = ({ label }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        width: 250,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderColor: "white",
      }}
    >
      <CardContent>
        <CardActionArea href="/Wallet">
          <Typography variant="body1" color="white" sx={{ marginTop: 1 }}>
            {label.title}
          </Typography>
          {label.content > 0 ? (
            <>
              <Typography variant="h5" color="green" sx={{ marginTop: 2 }}>
                {`R$ ${label.content}`}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h5" color="red" sx={{ marginTop: 2 }}>
                {`R$ ${label.content}`}
              </Typography>
            </>
          )}
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;

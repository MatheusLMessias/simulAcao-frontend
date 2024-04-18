import {
    Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Cards = ({ item }: any): JSX.Element => {
    let color = "white"
    if(item.variation > 0 && item.variation != null){
        color = "green"
    } else if(item.variation < 0 && item.variation != null){
        color = "red"
    }
    
  return (
    item.variation != null ? (
    <Card sx={{ maxHeight: 600, maxWidth: 600, backgroundColor: "black",borderColor: "white", }} variant="outlined">
      <CardContent>
          <Typography variant="h3" gutterBottom color="white">
            {item.name}
          </Typography>
          <Typography variant="h4" component="div" color={`${color}`}>
            {item.value}
          </Typography>
          {item.variation > 0 && item.variation != null ? (
          <Typography sx={{ mb: 1.5 }} color={`${color}`}>
            {`+${item.variation}%`}
          </Typography>
          ) : item.variation < 0 && item.variation != null ? (
          <Typography sx={{ mb: 1.5 }} color={`${color}`}>
            {`${item.variation}%`}
          </Typography>
          ) : (<></>)}
          <Typography variant="body1" color="white">
            {item.variation > 0 ? `Ação em alta` : `Ação em queda`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/Market">Ir ao mercado</Button>
        </CardActions>
    </Card>
    ) : (
        <Card sx={{maxHeight: 600, maxWidth: 600, backgroundColor: "black",borderColor: "white", }} variant="outlined">
        <CardContent>
            <Typography variant="h3" gutterBottom color="white">
              {item.value}
            </Typography>
            <Typography variant="body1" color="white">
            {item.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={item.site}>Ir ao site</Button>
          </CardActions>
      </Card>
    //     <Card
    //   variant="outlined"
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "black",
    //     borderColor: `${color}`,
    //   }}
    // >
    //   <CardContent>
    //     <CardActionArea>
    //       <Typography variant="body1" color="white" sx={{ marginTop: 1 }}>
    //         {item.name}
    //       </Typography>
    //       <Typography variant="h5" color="white" sx={{ marginTop: 2 }}>
    //         {item.value}
    //       </Typography>
    //     </CardActionArea>
    //   </CardContent>
    // </Card>
    )
  );
};

export default Cards;

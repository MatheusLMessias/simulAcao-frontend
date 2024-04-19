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
          <Button size="small" href="/Market" sx={{color: "gray", textDecoration:"underline"}}>Ir ao mercado</Button>
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
            <Button size="small" sx={{color: "gray", textDecoration:"underline"}} href={item.site}>Ir ao site</Button>
          </CardActions>
      </Card>
    )
  );
};

export default Cards;

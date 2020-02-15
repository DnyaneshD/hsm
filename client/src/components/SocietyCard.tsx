import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import React from "react";

import societyCardImg from "./../images/society-card.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px"
  },
  media: {
    height: 140
  }
});

const SocietyCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={societyCardImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Society Name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Go to details
        </Button>
      </CardActions>
    </Card>
  );
};

export default SocietyCard;

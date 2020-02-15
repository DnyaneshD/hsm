import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import SocietyCard from "./SocietyCard";

const YourSocieties = () => {
  return (
    <Container maxWidth="md" component="main">
      <Typography
        component="h3"
        variant="h3"
        align="left"
        color="textPrimary"
        gutterBottom
        style={{ margin: 8 }}>
        Your Society/s
      </Typography>
      <SocietyCard />
    </Container>
  );
};

export default YourSocieties;

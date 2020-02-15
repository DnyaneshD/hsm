import * as React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import MemberCard from "./MemberCard";

const Members = () => {
  return (
    <Container maxWidth="md" component="main">
      <Typography
        component="h3"
        variant="h3"
        align="left"
        color="textPrimary"
        gutterBottom
        style={{ margin: 8 }}>
        Members
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <MemberCard />
        </Grid>
        <Grid item xs>
          <MemberCard />
        </Grid>
        <Grid item xs>
          <MemberCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Members;

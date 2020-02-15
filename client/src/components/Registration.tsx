import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button
} from "@material-ui/core";

const Registration = () => {
  return (
    <Container maxWidth="md" component="main">
      <Typography
        component="h3"
        variant="h3"
        align="left"
        color="textPrimary"
        gutterBottom
        style={{ margin: 8 }}>
        Society Registration
      </Typography>
      <form>
        <FormControl
          variant="outlined"
          fullWidth
          required
          style={{ margin: 8 }}>
          <InputLabel htmlFor="component-outlined">Society Name</InputLabel>
          <OutlinedInput id="component-outlined" label="Society Name" />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          required
          style={{ margin: 8 }}>
          <InputLabel htmlFor="component-outlined">Society Number</InputLabel>
          <OutlinedInput id="component-outlined" label="SocietyNumber" />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          required
          style={{ margin: 8 }}>
          <InputLabel htmlFor="component-outlined">Established</InputLabel>
          <OutlinedInput id="component-outlined" label="Established" />
        </FormControl>
        <FormControl>
          <Grid container>
            <Grid item>
              <Button variant="contained" color="primary" style={{ margin: 8 }}>
                Save
              </Button>
              <Button variant="contained" color="primary" style={{ margin: 8 }}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </Container>
  );
};

export default Registration;
